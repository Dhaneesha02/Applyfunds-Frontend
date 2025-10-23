import React, { forwardRef } from "react";
import PE from "../images/PE.png";
import { Check } from "lucide-react";
import { NavLink } from "react-router-dom";

// ForwardRef for Section4
const Section4 = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white py-10 px-5 md:px-20 lg:px-40">
      {/* Title Section */}
      <h1 className="text-center text-3xl font-bold mb-8 text-[#1CA43E]">
        Buisness Loan{" "}
        <span className="text-[#0F1258]">Eligibility Criteria</span>
      </h1>

      {/* First Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8">
        {/* Left Section */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={PE}
            alt="Group of people"
            className="object-cover w-56 h-35 sm:w-64 sm:h-54 md:w-72 md:h-62 lg:w-80 lg:h-62 xl:w-96 xl:h-86 rounded-lg"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-6 md:w-1/2">
          <div className="bg-green-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-[#0F1258] mb-4">
              Buisness Loan Eligibility
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
                to="/buisness-form"
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
export default Section4;
