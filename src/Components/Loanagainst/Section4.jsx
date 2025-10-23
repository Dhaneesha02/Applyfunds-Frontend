import React, { forwardRef } from "react";
import loanapply from "../images/loanapply.png";
import { Check } from "lucide-react";
import { NavLink } from "react-router-dom";
import self from "../images/self.png";

// ForwardRef for Section4
const Section4 = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white py-10 px-5 md:px-20 lg:px-40">
      {/* Title Section */}
      <h1 className="text-center text-3xl font-bold mb-8 text-[#1CA43E]">
        Loan against property{" "}
        <span className="text-[#0F1258]">Eligibility Criteria</span>
      </h1>

      {/* First Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8">
        {/* Left Section */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={loanapply}
            alt="Group of people"
            className="object-cover w-full max-w-[700px] h-auto md:h-[400px] lg:h-[400px] xl:h-[500px]  rounded-lg"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-6 md:w-1/2">
          <div className="bg-green-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-[#0F1258] mb-4">
              Self-employed Individuals
            </h2>
            <ul className="text-gray-700 space-y-2">
              {[
                "Aadhar Card",
                "Pan Card",
                "Passport size Photo",
                "3 yrs ITR(Income tax returns)",
                "1 year bank statements",
                "MSME certificate",
                "Gst",
                "Co-applicant KYC-(Aadhar,pan)",
                "Property Document",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  style={{ alignItems: "flex-start" }}
                >
                  <Check
                    className="text-green-600 flex-shrink-0 mt-1"
                    size={22}
                    strokeWidth={3}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <NavLink
                to="/loan-form"
                className="bg-[#1CA43E] text-white py-2 px-4 rounded-full"
              >
                Apply Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Self-Employed Individuals */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8">
        <div className="space-y-6 order-2 md:order-1 md:w-1/2">
          <div className="bg-green-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-[#0F1258] mb-4">
              Salaried Individuals
            </h2>
            <ul className="text-gray-700 space-y-2">
              {[
                "Aadhar Card",
                "Pan Card",
                "Passport Size Photo",
                "6 months' pay slips",
                "Last 1 Year Salary statement",
                "Form 16AS",
                "Cibil min-700 max-750",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  style={{ alignItems: "flex-start" }}
                >
                  <Check
                    className="text-green-600 flex-shrink-0 mt-1"
                    size={22}
                    strokeWidth={3}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <NavLink
                to="/home-loan-form"
                className="bg-[#1CA43E] text-white py-2 px-4 rounded-full"
              >
                Apply Now
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <img
            src={self}
            alt="Self-employed"
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
          />
        </div>
      </div>
    </div>
  );
});
export default Section4;
