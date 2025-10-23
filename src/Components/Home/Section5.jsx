import React from "react";
import a1 from "../images/a1.png";
import a2 from "../images/a2.png";
import a3 from "../images/a3.png";
import a4 from "../images/a4.png";

const Section5 = () => {
  return (
    <div className="bg-white  px-4 sm:px-8 md:px-16 py-6 lg:px-32">
      <div className="text-center max-w-xxl mx-auto">
        <h1 className="text-3xl font-bold text-blue-950 mb-4">
          Why Apply Funds?
        </h1>
        <p className="text-gray-600  mb-8 text-lg">
          Our values represent what we stand for as a corporate citizen, a
          business partner, and an employer. From the financial requirement of a
          large business to individual customers, our portfolio of products and
          solutions are tailored to meet this challenge.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <img
            src={a1}
            alt="Live updates"
            className="w-12 h-12 mb-4 object-contain"
          />
          <h3 className="text-lg font-semibold text-gray-800">Live Updates</h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={a2}
            alt="Smart Advisor"
            className="w-12 h-12 mb-4 object-contain"
          />
          <h3 className="text-lg font-semibold text-gray-800">Smart Advisor</h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={a3}
            alt="Quick Processor"
            className="w-12 h-12 mb-4 object-contain"
          />
          <h3 className="text-lg font-semibold text-gray-800">
            Quick Processor
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={a4}
            alt="Easy EMI"
            className="w-12 h-12 mb-4 object-contain"
          />
          <h3 className="text-lg font-semibold text-gray-800">Easy EMI</h3>
        </div>
      </div>
    </div>
  );
};

export default Section5;
