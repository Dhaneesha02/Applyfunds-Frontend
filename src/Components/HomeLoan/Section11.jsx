import React, { forwardRef } from "react";
import { Check } from "lucide-react"; // Using the basic sharp Check icon
import sal from "../images/sal.png";
import self from "../images/self.png";
import pd from "../images/pd.png";
import { NavLink } from "react-router-dom";
const Section11 = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white py-10 px-5 md:px-20 lg:px-40">
      <h1 className="text-center text-3xl font-bold mb-8 text-[#1CA43E]">
        Home Loan <span className="text-[#0F1258]">Eligibility Criteria</span>
      </h1>

      {/* Salaried Individuals */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8">
        <div className="flex justify-center">
          <img
            src={sal}
            alt="Group of people"
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
          />
        </div>
        <div className="space-y-6 md:w-1/2">
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
                "Last 1 year Salary statement",
                "2 years Form 16 or 26AS",
                "Sale Agreement",
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
      </div>

      {/* Self-Employed Individuals */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8">
        <div className="space-y-6 order-2 md:order-1 md:w-1/2">
          <div className="bg-green-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-[#0F1258] mb-4">
              Self-Employed Individuals
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
                "Sale Agreement",
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

      {/* Partners/Directors in Firms */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex justify-center">
          <img
            src={pd}
            alt="Group of people"
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg"
          />
        </div>
        <div className="space-y-6 md:w-1/2">
          <div className="bg-green-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-[#0F1258] mb-4">
              Partners/Directors in Firms
            </h2>
            <ul className="text-gray-700 space-y-2">
              {[
                "Partnership Deed, List of Partners",
                "Financials with audited ITR",
                "Partnership authority letter",
                "Board Resolution (for Companies)",
                "Articles of Incorporation, MOA and AOA",
                "DIN of all Directors, Board Resolution",
                "Company Share Holding Pattern",
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
      </div>
    </div>
  );
});

export default Section11;
