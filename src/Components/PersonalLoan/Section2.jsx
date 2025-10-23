import React, { useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Section2 = () => {
  const [borrowAmount, setBorrowAmount] = useState(500000); // ₹5 lakhs default
  const [apr, setApr] = useState(12); // default interest rate
  const [paymentPeriod, setPaymentPeriod] = useState(3); // default 3 years
  const [showType, setShowType] = useState(null); // null | "monthly" | "yearly"

  const calculateAmortization = (principal, rate, years) => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const schedule = [];
    let balance = principal;
    const startDate = new Date();

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principalPaid = emi - interest;
      balance -= principalPaid;

      const date = new Date(startDate);
      date.setMonth(date.getMonth() + i - 1);
      const monthYear = `${date.toLocaleString("default", {
        month: "short",
      })} ${date.getFullYear()}`;

      schedule.push({
        sno: i,
        monthYear,
        principal: principalPaid,
        interest,
        total: emi,
        balance: balance < 0 ? 0 : balance,
      });
    }

    return schedule;
  };

  const monthlySchedule = calculateAmortization(
    borrowAmount,
    apr,
    paymentPeriod
  );

  const yearlySchedule = monthlySchedule.reduce((acc, month, index) => {
    const year = Math.floor(index / 12) + 1;
    if (!acc[year]) {
      acc[year] = {
        sno: year,
        year: month.monthYear.split(" ")[1],
        principal: 0,
        interest: 0,
        total: 0,
        balance: 0,
      };
    }

    acc[year].principal += month.principal;
    acc[year].interest += month.interest;
    acc[year].total += month.total;
    acc[year].balance = month.balance;

    return acc;
  }, {});

  const emi = monthlySchedule[0]?.total || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#0F1258]">
          Personal Loan <span className="text-[#1ca43e]">EMI Calculator</span>
        </h1>
      </div>

      {/* Input Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Loan Amount (₹)
          </label>
          <input
            type="range"
            min={0}
            max={5000000} // 50 Lakhs
            step={10000}
            value={borrowAmount}
            onChange={(e) => setBorrowAmount(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="mt-2 text-gray-900 font-semibold">
            <FaIndianRupeeSign className="inline" />{" "}
            {borrowAmount.toLocaleString()}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Interest Rate (%)
          </label>
          <input
            type="range"
            min={0}
            max={25}
            step={0.1}
            value={apr}
            onChange={(e) => setApr(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="mt-2 text-gray-900 font-semibold">{apr}%</div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Loan Tenure (Years)
          </label>
          <input
            type="range"
            min={0}
            max={7}
            step={1}
            value={paymentPeriod}
            onChange={(e) => setPaymentPeriod(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="mt-2 text-gray-900 font-semibold">
            {paymentPeriod} {paymentPeriod === 1 ? "year" : "years"}
          </div>
        </div>
      </div>

      {/* EMI Summary */}
      <div className="bg-gray-100 p-6 rounded-md shadow-sm text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Estimated Monthly EMI
        </h3>
        <div className="text-3xl font-bold text-blue-950">
          ₹{emi.toFixed(2)}
        </div>
        <div className="text-gray-600 mt-2">
          Total Payable (Principal + Interest) over {paymentPeriod} years:{" "}
          <span className="font-semibold text-gray-800">
            ₹{(emi * paymentPeriod * 12).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setShowType("monthly")}
          className={`px-4 py-2 rounded ${
            showType === "monthly"
              ? "bg-[#0F1258] text-white"
              : "bg-[#1ca43e] text-white"
          }`}
        >
          Monthly Amortization
        </button>
        <button
          onClick={() => setShowType("yearly")}
          className={`px-4 py-2 rounded ${
            showType === "yearly"
              ? "bg-[#0F1258] text-white"
              : "bg-[#1ca43e] text-white"
          }`}
        >
          Yearly Amortization
        </button>
      </div>

      {/* Monthly Amortization Table */}
      {showType === "monthly" && (
        <div className="mt-10 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 text-center">
            📅 Monthly Amortization Schedule
          </h2>
          <table className="w-full border border-gray-300 text-sm text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">S.No</th>
                <th className="p-2 border">Month & Year</th>
                <th className="p-2 border">Principal (A)</th>
                <th className="p-2 border">Interest (B)</th>
                <th className="p-2 border">Total Monthly Payment (A+B)</th>
                <th className="p-2 border">Outstanding Balance</th>
              </tr>
            </thead>
            <tbody>
              {monthlySchedule.map((item, index) => (
                <tr key={index} className="bg-gray-50">
                  <td className="p-2 border">{item.sno}</td>
                  <td className="p-2 border">{item.monthYear}</td>
                  <td className="p-2 border">₹{item.principal.toFixed(2)}</td>
                  <td className="p-2 border">₹{item.interest.toFixed(2)}</td>
                  <td className="p-2 border">₹{item.total.toFixed(2)}</td>
                  <td className="p-2 border">₹{item.balance.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Yearly Amortization Table */}
      {showType === "yearly" && (
        <div className="mt-10 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 text-center">
            📆 Yearly Amortization Schedule
          </h2>
          <table className="w-full border border-gray-300 text-sm text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">S.No</th>
                <th className="p-2 border">Year</th>
                <th className="p-2 border">Principal (A)</th>
                <th className="p-2 border">Interest (B)</th>
                <th className="p-2 border">Total Payment (A+B)</th>
                <th className="p-2 border">Outstanding Balance</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(yearlySchedule).map(([year, item]) => (
                <tr key={year} className="bg-gray-50">
                  <td className="p-2 border">{item.sno}</td>
                  <td className="p-2 border">{item.year}</td>
                  <td className="p-2 border">₹{item.principal.toFixed(2)}</td>
                  <td className="p-2 border">₹{item.interest.toFixed(2)}</td>
                  <td className="p-2 border">₹{item.total.toFixed(2)}</td>
                  <td className="p-2 border">₹{item.balance.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Section2;
