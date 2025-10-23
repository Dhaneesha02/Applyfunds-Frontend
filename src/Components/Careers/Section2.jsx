import React from "react";
import support from "../images/support.jpg";

const Section2 = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-950 mb-4">Who We Are</h1>

        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Text Content */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold mb-2">
              Shaping tomorrow together
            </h3>
            <p className="text-gray-700 mb-4">
              At Apply Funds, we’re on a mission to simplify financial access
              and empower individuals through innovative lending solutions. As a
              fast-growing fintech platform, we provide secure, transparent, and
              user-friendly loan services tailored to meet diverse customer
              needs.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in the power of people. Our team is passionate, driven,
              and committed to making a real impact. Join us to be part of a
              collaborative environment where your ideas matter, your growth is
              supported, and your work helps individuals and businesses thrive.
            </p>

            {/* <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
              Learn more
            </button> */}
          </div>

          {/* Image */}
          <div className="lg:w-1/3 w-full">
            <img
              src={support}
              alt="Support team"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
