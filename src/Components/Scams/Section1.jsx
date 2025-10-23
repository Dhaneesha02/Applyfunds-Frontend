import React from "react";

const Section1 = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <div className="bg-blue-700 py-5">
        <h1 className="text-3xl font-bold text-white text-center">
          scams & fraud
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-lg leading-relaxed">
        <p className="mb-6">
          Please be informed that if anyone asks for money from customers
          without the knowledge or consent of our office, we are not responsible
          for such actions. Always verify with our official team before making
          any payments or financial commitments.
        </p>

        <p>
          If you encounter any suspicious activity or are approached by someone
          claiming to represent us while asking for money, please report it
          immediately to us and to your local law enforcement authorities.
        </p>
      </div>
    </div>
  );
};

export default Section1;
