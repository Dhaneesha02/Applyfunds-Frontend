// import React, { useState, useRef, forwardRef } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { jsPDF } from "jspdf";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Section2 = forwardRef((props, ref) => {
//   const [borrowAmount, setBorrowAmount] = useState(2000000);
//   const [paymentPeriod, setPaymentPeriod] = useState(5);
//   const [apr, setApr] = useState(4.95);
//   const [depositDate, setDepositDate] = useState("2023-12-01");
//   const [paymentMethod, setPaymentMethod] = useState("Deposit Bank Transfer");
//   const [showFAQ, setShowFAQ] = useState(false);
//   const [openYear, setOpenYear] = useState(null); // Added state for openYear

//   const toggleYear = (year) => {
//     setOpenYear(openYear === year ? null : year);
//   };

//   const interest = borrowAmount * (apr / 100) * paymentPeriod;
//   const toRepay = borrowAmount + interest;

//   const data = {
//     labels: ["Principal", "Interest"],
//     datasets: [
//       {
//         data: [borrowAmount, interest],
//         backgroundColor: ["#0F1258", "#1CA43E"],
//         hoverBackgroundColor: ["#1D4ED8", "#66BB6A"],
//       },
//     ],
//   };

//   // Sample FAQ Data
//   const faqData = [
//     { year: 2022, data: [
//         { month: "Apr", principal: "₹13,500", interest: "₹5,500", total: "₹19,000", balance: "₹10,50,000" },
//         { month: "May", principal: "₹13,600", interest: "₹5,400", total: "₹19,000", balance: "₹10,36,400" },
//         { month: "Jun", principal: "₹13,700", interest: "₹5,300", total: "₹19,000", balance: "₹10,22,700" },
//       ]
//     },
//     { year: 2023, data: [
//         { month: "Apr", principal: "\u20B914,149", interest: "\u20B95,416", total: "\u20B919,566", balance: "\u20B99,85,851" },
//         { month: "May", principal: "\u20B914,226", interest: "\u20B95,340", total: "\u20B919,566", balance: "\u20B99,71,624" },
//         { month: "Jun", principal: "\u20B914,303", interest: "\u20B95,262", total: "\u20B919,566", balance: "\u20B99,57,321" },
//       ]
//     },
//     { year: 2024, data: [
//         { month: "Apr", principal: "\u20B915,000", interest: "\u20B95,200", total: "\u20B920,200", balance: "\u20B98,70,000" },
//         { month: "May", principal: "\u20B915,100", interest: "\u20B95,100", total: "\u20B920,200", balance: "\u20B98,55,000" },
//         { month: "Jun", principal: "\u20B915,200", interest: "\u20B95,000", total: "\u20B920,200", balance: "\u20B98,40,000" },
//       ]
//     },
//     { year: 2025, data: [
//         { month: "Apr", principal: "\u20B916,000", interest: "\u20B94,800", total: "\u20B920,800", balance: "\u20B97,50,000" },
//         { month: "May", principal: "\u20B916,100", interest: "\u20B94,700", total: "\u20B920,800", balance: "\u20B97,35,000" },
//         { month: "Jun", principal: "\u20B916,200", interest: "\u20B94,600", total: "\u20B920,800", balance: "\u20B97,20,000" },
//       ]
//     }
//   ];

//   // Function to generate and download PDF
//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(18);
//     doc.text("Business Loan EMI Calculator", 15, 20);

//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(14);
//     doc.text(`Borrow Amount: ₹ ${borrowAmount.toLocaleString("en-IN")}`, 15, 40);
//     doc.text(`Payment Period: ${paymentPeriod} Years`, 15, 50);
//     doc.text(`Interest Rate: ${apr.toFixed(2)}%`, 15, 60);
//     doc.text(`Deposit Date: ${depositDate}`, 15, 70);
//     doc.text(`Payment Method: ${paymentMethod}`, 15, 80);
//     doc.text(`Total Repayment Amount: ₹ ${toRepay.toLocaleString("en-IN")}`, 15, 90);

//     doc.save("Loan_Details.pdf");
//   };

//   return (
//     <div ref={ref} className="bg-white py-4 sm:py-6 md:py-6">
//       <div className="bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6">
//         <div className="p-6 w-full max-w-5xl">

//           <div className="flex flex-wrap gap-8">
//             {/* Left Side - Input Fields */}
//             <div className="flex-1">
//               <div className="mb-6">
//                 <label className="block text-gray-700 font-medium mb-2">Borrow Amount</label>
//                 <input
//                   type="range"
//                   min="1000000"
//                   max="5000000"
//                   value={borrowAmount}
//                   onChange={(e) => setBorrowAmount(Number(e.target.value))}
//                   className="w-full"
//                 />
//                 <p className="text-2xl font-semibold text-center mt-2 truncate">
//                   ₹ {borrowAmount.toLocaleString("en-IN")}.00
//                 </p>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-gray-700 font-medium mb-2">Payment Period</label>
//                 <input
//                   type="range"
//                   min="1"
//                   max="15"
//                   value={paymentPeriod}
//                   onChange={(e) => setPaymentPeriod(Number(e.target.value))}
//                   className="w-full"
//                 />
//                 <p className="text-2xl font-semibold text-center mt-2">
//                   {paymentPeriod} {paymentPeriod === 1 ? "Year" : "Years"}
//                 </p>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-gray-700 font-medium mb-2">Interest Rate (APR %)</label>
//                 <input
//                   type="range"
//                   min="1"
//                   max="15"
//                   step="0.1"
//                   value={apr}
//                   onChange={(e) => setApr(Number(e.target.value))}
//                   className="w-full"
//                 />
//                 <p className="text-2xl font-semibold text-center mt-2">{apr.toFixed(2)}%</p>
//               </div>
//               <div className="flex flex-wrap justify-between mb-6 gap-4">
//                 <div className="flex-1">
//                   <label className="block text-gray-700 font-medium mb-2">Deposit Date</label>
//                   <input
//                     type="date"
//                     value={depositDate}
//                     onChange={(e) => setDepositDate(e.target.value)}
//                     className="rounded-lg px-3 py-2 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <div className="flex-1">
//                   <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
//                   <div className="flex space-x-4">
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         value="Deposit Bank Transfer"
//                         checked={paymentMethod === "Deposit Bank Transfer"}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         className="mr-2"
//                       />
//                       Deposit Bank Transfer
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         value="Cash"
//                         checked={paymentMethod === "Cash"}
//                         onChange={(e) => setPaymentMethod(e.target.value)}
//                         className="mr-2"
//                       />
//                       Cash
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Loan Breakdown & Chart */}
//             <div className="flex-1">
//               <div className="mb-8">
//                 <h3 className="text-center text-lg font-bold text-gray-700 mb-4">Loan Breakdown</h3>
//                 <div className="flex justify-center">
//                   <div className="w-48 h-48 sm:w-64 sm:h-64">
//                     <Pie data={data} />
//                   </div>
//                 </div>
//               </div>

//               {/* Download PDF Button */}
//               <div className="text-center mt-6">
//                 <button
//                   onClick={downloadPDF}
//                   className="bg-green-500 text-white py-2 px-6 w-full rounded-lg shadow-lg hover:bg-green-600"
//                 >
//                   Download Form
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* View Interest Rate Button */}
//           <div className="text-center mt-8">
//             <button
//               onClick={() => setShowFAQ(!showFAQ)}
//               className="text-blue-600 hover:underline text-lg font-semibold"
//             >
//               View Interest Rate
//             </button>
//           </div>

//           {showFAQ && (
//            <div className="max-w-3xl mx-auto p-4">
//            {faqData.map((item) => (
//              <div key={item.year} className="mb-4 border-b">
//                <button
//                  className="w-full text-left p-3 text-lg font-semibold bg-gray-200 rounded-md"
//                  onClick={() => setOpenYear(openYear === item.year ? null : item.year)}
//                >
//                  {item.year}
//                </button>
//                {openYear === item.year && (
//                  <table className="w-full mt-2 border border-gray-300">
//                    <thead>
//                      <tr className="bg-gray-300">
//                        <th className="p-2 border">Month</th>
//                        <th className="p-2 border">Principal Paid</th>
//                        <th className="p-2 border">Interest Charged</th>
//                        <th className="p-2 border">Total Payment</th>
//                        <th className="p-2 border">Balance</th>
//                      </tr>
//                    </thead>
//                    <tbody>
//                      {item.data.map((row, index) => (
//                        <tr key={index} className="bg-gray-100">
//                          <td className="p-2 border">{row.month}</td>
//                          <td className="p-2 border">{row.principal}</td>
//                          <td className="p-2 border">{row.interest}</td>
//                          <td className="p-2 border">{row.total}</td>
//                          <td className="p-2 border">{row.balance}</td>
//                        </tr>
//                      ))}
//                    </tbody>
//                  </table>
//                )}
//              </div>
//            ))}
//          </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Section2;

import React, { useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Section2 = () => {
  const [borrowAmount, setBorrowAmount] = useState(500000);
  const [apr, setApr] = useState(10);
  const [paymentPeriod, setPaymentPeriod] = useState(3);
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
        monthYear: monthYear,
        principal: principalPaid,
        interest: interest,
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
        year: month.monthYear.split(" ")[1], // just year from last month of that year
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
          Business Loan <span className="text-[#1ca43e]">EMI Calculator</span>
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
            max={10000000}
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
            max={36}
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
            max={5}
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

      {/* EMI Display */}
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

      {/* Amortization Table */}
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
                <th className="p-2 border">Total (A+B)</th>
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
                <th className="p-2 border">Total (A+B)</th>
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
