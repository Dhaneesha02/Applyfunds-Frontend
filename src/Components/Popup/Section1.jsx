import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 animate-fade-in">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-[90%] sm:w-96 text-center relative border border-gray-200 transition-all duration-300 transform scale-100">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            💡Smart Lending
          </h2>
          <p className="text-gray-700 text-lg">
            Get the Best Deal That Fits Your Needs
          </p>

          {/* Buttons */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            <button
              onClick={() => handleNavigation("/home-loan-form")}
              className="bg-gradient-to-r from-green-100 to-blue-100 text-black py-2 sm:py-3 text-sm sm:text-base
             rounded-lg font-medium shadow-md transition duration-300
             hover:!bg-blue-900 hover:!bg-none hover:text-white"
            >
              🏠 Home Loan
            </button>
            <button
              onClick={() => handleNavigation("/buisness-form")}
              className="bg-gradient-to-r from-green-100 to-blue-100 text-black py-2 sm:py-3 text-sm sm:text-base
             rounded-lg font-medium shadow-md transition duration-300
             hover:!bg-blue-900 hover:!bg-none hover:text-white"
            >
              📈 Business Loan
            </button>
            <button
              onClick={() => handleNavigation("/loan-form")}
              className="bg-gradient-to-r from-green-100 to-blue-100 text-black py-2 sm:py-3 text-sm sm:text-base
             rounded-lg font-medium shadow-md transition duration-300
             hover:!bg-blue-900 hover:!bg-none hover:text-white"
            >
              🏦 Property Loan
            </button>

            <button
              onClick={() => handleNavigation("/personal-loan-form")}
              className="bg-gradient-to-r from-green-100 to-blue-100 text-black py-2 sm:py-3 text-sm sm:text-base
             rounded-lg font-medium shadow-md transition duration-300
             hover:!bg-blue-900 hover:!bg-none hover:text-white"
            >
              👤 Personal Loan
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Section1;
