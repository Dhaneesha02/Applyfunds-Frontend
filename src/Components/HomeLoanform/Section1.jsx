import React, { useState } from "react";
import homeformi from "../images/homeformi.png";

const Section1 = () => {
  const [formData, setFormData] = useState({
    FirstName: "", // used as FirstName
    LastName: "", // ✅ new field (missing from initial state)
    EmailId: "", // ✅ new field (missing)
    // ReferenceName: "", // ✅ new field (missing)
    // ProductName: "", // ✅ new field (missing)
    MobileNumber: "",
    employmentType: "",
    loanType: "Home Loan",
    LocationId: "", // ✅ updated field (was `city`)
    loanAmount: "",
    companyName: "",
    natureOfBusiness: "",
    businessAccount: "",
    yearlyTurnover: "",
    netProfit: "",
    grossAnnualIncome: "",
  });

  const [isLoading, setIsLoading] = useState(false); // 👈 add this

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.FirstName.trim()) newErrors.FirstName = "Required";
    if (!formData.LastName.trim()) newErrors.LastName = "Required";
    if (!formData.MobileNumber.trim()) newErrors.MobileNumber = "Required";
    if (!formData.employmentType) newErrors.employmentType = "Required";
    if (!formData.LocationId.trim()) newErrors.LocationId = "Required";
    if (!formData.loanAmount.trim()) newErrors.loanAmount = "Required";

    if (formData.employmentType === "Salaried") {
      if (!formData.grossAnnualIncome.trim())
        newErrors.grossAnnualIncome = "Required";
    }

    if (formData.employmentType === "Self-Employed") {
      if (!formData.companyName.trim()) newErrors.companyName = "Required";
      if (!formData.natureOfBusiness.trim())
        newErrors.natureOfBusiness = "Required";
      if (!formData.businessAccount.trim())
        newErrors.businessAccount = "Required";
      if (!formData.yearlyTurnover.trim())
        newErrors.yearlyTurnover = "Required";
      if (!formData.netProfit.trim()) newErrors.netProfit = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("subm");

    if (validateForm()) {
      setIsLoading(true); // Start loader

      const payload = {
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        MobileNumber: formData.MobileNumber,
        EmailId: formData.EmailId,
        LocationId: formData.LocationId,
        // ProductName: formData.ProductName,
        // ReferenceName: formData.ReferenceName,
      };

      if (formData.employmentType === "Salaried") {
        payload.grossAnnualIncome = formData.grossAnnualIncome;
      } else if (formData.employmentType === "Self-Employed") {
        payload.companyName = formData.companyName;
        payload.natureOfBusiness = formData.natureOfBusiness;
        payload.businessAccount = formData.businessAccount;
        payload.yearlyTurnover = formData.yearlyTurnover;
        payload.netProfit = formData.netProfit;
      }

      try {
        const res = await fetch("http://localhost:5000/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        console.log(res, payload);

        if (!res.ok) {
          throw new Error("API request failed");
        }

        const responseData = await res.json();
        console.log("Response data:", responseData);

        setSuccessMessage("Thank you, our team will contact you soon.");

        // Reset form fields
        setFormData({
          FirstName: "",
          LastName: "",
          EmailId: "",
          // ReferenceName: "",
          // ProductName: "",
          MobileNumber: "",
          employmentType: "",
          loanType: "Home Loan",
          LocationId: "",
          loanAmount: "",
          companyName: "",
          natureOfBusiness: "",
          businessAccount: "",
          yearlyTurnover: "",
          netProfit: "",
          grossAnnualIncome: "",
        });
      } catch (err) {
        console.error("Error:", err);
        alert("Server error. Please try again.");
      } finally {
        setIsLoading(false); // Stop loader
      }
    }
  };

  const handleProceed = async (e) => {
    console.log("proceed", e);

    e.preventDefault();
    if (validateForm()) {
      const payload = {
        EmailId: formData.EmailId,
        FirstName: formData.FirstName,

        LastName: formData.LastName,
        LocationId: formData.LocationId,
        MobileNumber: formData.MobileNumber,
        // ProductName: formData.ProductName,
        // ReferenceName: formData.ReferenceName,
      };

      if (formData.employmentType === "Salaried") {
        payload.grossAnnualIncome = formData.grossAnnualIncome;
      } else if (formData.employmentType === "Self-Employed") {
        payload.companyName = formData.companyName;
        payload.natureOfBusiness = formData.natureOfBusiness;
        payload.businessAccount = formData.businessAccount;
        payload.yearlyTurnover = formData.yearlyTurnover;
        payload.netProfit = formData.netProfit;
      }

      try {
        const response = await fetch(
          "http://oneassist.net.in/OneAssistCrmAPI/api/Contact/savecontactdetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (response.ok) {
          setSuccessMessage("Thank you, our team will contact you soon.");
          setFormData({
            FirstName: "",
            LastName: "",
            // ReferenceName: "",
            // ProductName: "",
            MobileNumber: "",
            employmentType: "",
            loanType: "Home Loan",
            LocationId: "",
            EmailId: "",

            loanAmount: "",
            companyName: "",
            natureOfBusiness: "",
            businessAccount: "",
            yearlyTurnover: "",
            netProfit: "",
            grossAnnualIncome: "",
          });
        } else {
          alert("Something went wrong. Try again.");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("Server error. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full lg:w-2/5 bg-[#f0f5f2] flex flex-col justify-center items-center p-8">
        <img
          src={homeformi}
          alt="Illustration"
          className="mb-6 w-2/3 lg:w-auto"
        />
        <h1 className="text-3xl font-semibold text-blue-900 text-center">
          Apply Funds
        </h1>
        <h2 className="text-2xl font-bold mt-6 text-center">Home Loan</h2>
        <ul className="mt-6 space-y-3 text-lg text-center">
          <li>✅ Low Interest Rates</li>
          <li>✅ High Loan Amount</li>
          <li>✅ Quick and Easy Process</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-3/5 bg-gray-100 p-6 sm:p-10 md:p-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center lg:text-left">
          Welcome Back!
        </h1>
        <p className="text-black mt-2 text-center lg:text-left">
          <strong>Please verify your details!</strong> This information is
          critical to get accurate offers from lenders.
        </p>

        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-4">
            <span className="block sm:inline">{successMessage}</span>
            <button
              onClick={() => setSuccessMessage("")}
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
              <svg
                className="fill-current h-6 w-6 text-green-700"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 5.652a1 1 0 00-1.414-1.414L10 7.172 7.066 4.238a1 1 0 10-1.414 1.414L8.586 8.586l-2.934 2.934a1 1 0 101.414 1.414L10 10.828l2.934 2.934a1 1 0 001.414-1.414L11.414 8.586l2.934-2.934z" />
              </svg>
            </button>
          </div>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Common Fields */}
          <label>First Name</label>
          <input
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            placeholder="Enter Your Fisrt name"
            className="w-full border rounded p-2"
            required
          />
          <label>Last Name</label>
          <input
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            placeholder="Enter your Last name"
            className="w-full border rounded p-2"
            required
          />
          <label>Email ID</label>
          <input
            type="email"
            name="EmailId"
            value={formData.EmailId}
            onChange={handleChange}
            placeholder="Enter Email ID"
            className="w-full border rounded p-2"
            required
          />

          <label>Mobile Number</label>
          <input
            name="MobileNumber"
            value={formData.MobileNumber}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            className="w-full border rounded p-2"
            required
          />

          <label>Employment Type</label>
          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Select</option>
            <option value="Salaried">Salaried</option>
            <option value="Self-Employed">Self-Employed</option>
          </select>

          {formData.employmentType === "Self-Employed" && (
            <>
              <label>Company Name</label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border rounded p-2"
                required
              />

              <label>Nature of Business</label>
              <input
                name="natureOfBusiness"
                value={formData.natureOfBusiness}
                onChange={handleChange}
                placeholder="Nature of Business"
                className="w-full border rounded p-2"
                required
              />

              <label>Business Account</label>
              <input
                name="businessAccount"
                value={formData.businessAccount}
                onChange={handleChange}
                placeholder="Business Account"
                className="w-full border rounded p-2"
                required
              />

              <label>Yearly Turnover</label>
              <input
                name="yearlyTurnover"
                type="number"
                value={formData.yearlyTurnover}
                onChange={handleChange}
                placeholder="Yearly Turnover"
                className="w-full border rounded p-2"
                required
              />

              <label>Net Profit</label>
              <input
                name="netProfit"
                type="number"
                value={formData.netProfit}
                onChange={handleChange}
                placeholder="Net Profit"
                className="w-full border rounded p-2"
                required
              />
            </>
          )}

          {formData.employmentType === "Salaried" && (
            <>
              <label>Gross Annual Income</label>
              <input
                name="grossAnnualIncome"
                type="number"
                value={formData.grossAnnualIncome}
                onChange={handleChange}
                placeholder="Gross Annual Income"
                className="w-full border rounded p-2"
                required
              />
            </>
          )}

          <label>Loan Type</label>
          <input
            name="loanType"
            value={formData.loanType}
            readOnly
            className="w-full border rounded p-2 bg-gray-200"
          />

          <label>Location</label>
          <select
            name="LocationId"
            value={formData.LocationId}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          >
            <option value="">Select a city</option>
            <option value="2001">Coimbatore</option>
            <option value="2002">Chennai</option>
            <option value="3002">Hosur</option>
            <option value="3003">Thirupur</option>
            <option value="3004">Salem</option>
            <option value="3005">Erode</option>
            <option value="3006">Bangalore</option>
            <option value="3007">Pune</option>
            <option value="3008">Madhurai</option>
            <option value="3009">Madurai</option>
            <option value="3010">Karur</option>
            <option value="3011">Namakkal</option>
            <option value="3012">Puthukottai</option>
            <option value="3013">Krishnagiri</option>
          </select>

          <label>Desired Loan Amount</label>
          <input
            name="loanAmount"
            type="number"
            value={formData.loanAmount}
            onChange={handleChange}
            placeholder="Loan Amount"
            className="w-full border rounded p-2"
            required
          />
          {/* <label>Refered By</label>

          <input
            name="ReferenceName"
            type="text"
            value={formData.ReferenceName}
            onChange={handleChange}
            placeholder="Enter Reference Name"
            className="w-full border rounded p-2"
          /> */}
          {/* <label>Product Name</label>
          <input
            name="ProductName"
            type="text"
            value={formData.ProductName}
            onChange={handleChange}
            placeholder="Enter Product Name"
            className="w-full border rounded p-2"
          /> */}

          <button
            disabled={isLoading}
            onSubmit={handleProceed}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {isLoading ? "Proceeding..." : "Proceed"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section1;
