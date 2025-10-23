import Table from "../images/Table.png";
import React, { forwardRef } from "react";

const Section1 = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-[#F9FCFF] flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10 border-4 border-gray-200 p-8 rounded-2xl shadow-xl">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Table} alt="Illustration" className="w-80 md:w-[450px]" />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed border-l-4 border-gray-300 pl-8">
          <h2 className="font-semibold text-2xl md:text-3xl text-gray-800 mb-4">Apply Funds – Your Financial Partner</h2>
          <p>
            We provide quick approvals, competitive rates, and flexible repayment options for personal and business loans. 
            Whether you're expanding your business or covering unexpected expenses, we are here to help.
          </p>
          <p className="mt-4 font-semibold">Apply online today and move toward financial freedom!</p>
        </div>
      </div>
    </div>
  );
});

export default Section1;
