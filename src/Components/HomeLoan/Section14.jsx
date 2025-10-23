import React from "react";
import wrong from "../images/wrong.png";
import right from "../images/right.png";

const Section14 = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20 lg:px-40">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-3xl font-bold text-blue-900 mb-12">
        DO's & Don't In <span className="text-green-500">Home Loan</span>
      </h1>

      {/* Containers */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Left Container */}
        <div className="bg-green-100 p-6 rounded-2xl shadow-md flex flex-col items-start w-full md:w-[45%]">
          {/* Icon */}

          <div className="flex items-center justify-center w-14 h-14 mb-6 self-center">
            <img
              src={right} // Replace with the actual path to your tick icon
              alt="Tick Icon"
              className="w-full h-full object-contain"
            />
          </div>
          {/* List */}
          <ul className="text-sm text-blue-900 font-medium leading-relaxed list-disc pl-5 max-w-[85%]">
            <li>
              Maintain a good credit score for better loan approval and rates.
            </li>
            <li>Compare lenders to find the best interest rates and terms.</li>
            <li>Read and understand all loan terms, including charges and conditions, before signing.</li>
            <li>Ensure EMIs are affordable within your budget.</li>
          </ul>
        </div>

        {/* Right Container */}
        <div className="bg-red-100 p-6 rounded-2xl shadow-md flex flex-col items-start w-full md:w-[45%]">
          {/* Icon */}
          <div className="flex items-center justify-center w-14 h-14 mb-6 self-center">
            <img
              src={wrong} // Replace with the actual path to your cross icon
              alt="Cross Icon"
              className="w-full h-full object-contain"
            />
          </div>
          {/* List */}
          <ul className="text-sm text-blue-900 font-medium leading-relaxed list-disc pl-5 max-w-[85%]">
            <li>
              {" "}
              Taking a bigger loan than necessary can lead to financial stress.
            </li>
            <li>
              Be aware of processing fees, legal charges, and prepayment
              penalties.
            </li>
            <li>
              {" "}
              Don’t miss EMIs, as it may lead to penalties and a lower credit score.
            </li>
            <li>
            Don’t rush—compare all options before deciding.
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section14;
