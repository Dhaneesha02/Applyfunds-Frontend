import React from "react";
import blimage from "../images/blimage.png";
import { Link } from "react-router-dom";

export default function Section1({ scrollToSection }) {
  return (
    <div className="px-4 py-2 mx-auto max-w-[1500px] md:px-12 lg:px-16 lg:py-10">
      <div
        className=" p-6 sm:p-10 lg:p-12 rounded-3xl flex flex-col lg:flex-row items-center"
        style={{ minHeight: "500px" }}
      >
        {/* Content Section */}
        <div className="w-full lg:w-2/3 lg:pr-12 mb-6 lg:mb-0">
          <h5
            className="mb-8 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-snug text-center lg:text-left"
            style={{
              background: "linear-gradient(90deg, #2a2b53 20%, #0f1258 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "pre-line", // Ensures the line breaks are respected
            }}
          >
            Get Your Buisness
            <br />
            Loans Approved <br />
            Quickly with <br />
            Apply Funds.
          </h5>

          <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
            <Link to="/buisness-form">
              <button
                className="px-6 py-2 text-lg border-2 border-green-600 text-white bg-green-600 rounded-full hover:bg-green-700 hover:border-green-700 transition duration-300"
                // onClick={() => scrollToSection("section2")}
              >
                Get Started
              </button>
            </Link>
            {/* <button className="px-6 py-2 text-lg border-2 border-black text-black bg-white rounded-full hover:bg-gray-100 hover:border-gray-300 transition duration-300">
              Learn More
            </button> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 sm:w-full sm:h-auto sm:mx-auto">
          <img
            className="object-cover w-full h-82 sm:h-80 lg:h-[350px] rounded-xl mx-auto"
            src={blimage}
            alt="Loan Services"
          />
        </div>
      </div>
    </div>
  );
}
