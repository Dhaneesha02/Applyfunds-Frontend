import React, { useState, useEffect } from "react";

import apply1 from "../images/apply1.png";
import apply2 from "../images/apply2.png";
import apply3 from "../images/apply3.png";
import apply4 from "../images/apply4.png";
import apply5 from "../images/apply5.png";

const Section3 = () => {
  const slides = [
    {
      title: "Why In Apply Funds",
      subtitle:
        "We strive to get you the loan in quickest turn around time, at lowest rate of interest and in a hassle free manner.",
      heading: "Quick.Easy",
      points: [
        "Completely online loan application process for convenience and accessibility.",
        "Funds disbursed in as little as 48 hours after approval, ensuring quick access to capital.",
        "Assistance with loan agreement execution, whether digitally or in person, tailored to your preferences.",
      ],
      image: apply1,
    },
    {
      title: "Why In Apply Funds ",
      subtitle:
        "We strive to get you the loan in quickest turn around time, at lowest rate of interest and in a hassle free manner.",
      heading: "Flexibility and Transparency",
      points: [
        "Flexible Loan Options: Enjoy low monthly EMIs with a 36-month tenure and no lock-in period.",
        "No Extra Charges: Prepay your loan fully or partially anytime without penalties or hidden fees.",
        "Track with Ease: Access visual dashboards to monitor your transactions seamlessly.",
      ],
      image: apply2,
    },
    {
      title: "Why In Apply Funds",
      subtitle:
        "We strive to get you the loan in quickest turn around time, at lowest rate of interest and in a hassle free manner.",
      heading: "Security and Privacy",
      points: [
        "Your personal information is never revealed to evaluating lenders",
        "Loans funded only by screened lenders",
        "Apply Funds assures your personal data is secure and not shared or misused",
      ],
      image: apply3,
    },
    {
      title: "Why In Apply Funds ",
      subtitle:
        "We strive to get you the loan in quickest turn around time, at lowest rate of interest and in a hassle free manner.",
      heading: "Credit Assessment",
      points: [
        "Our evaluation process goes beyond the traditional approach of banks.",
        "By assessing borrowers on multiple parameters and not limited to just credit score or only to employees of Selective Corporate, we are able to offer loans to a much larger borrower segment",
      ],
      image: apply4,
    },
    {
      title: "Why In Apply Funds ",
      subtitle:
        "We strive to get you the loan in quickest turn around time, at lowest rate of interest and in a hassle free manner.",
      heading: "Multiple Loans",
      points: [
        "Rewarding Responsibility: Maintain a strong borrowing track record to unlock more loan opportunities.",
        "Flexible Access: Borrow multiple times without affecting your current loan or its terms.",
        "Hassle-Free Loans: Enjoy ongoing financial support with unchanged conditions",
      ],
      image: apply5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle dot click to navigate to the specific slide
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="px-4 py-4 mx-auto max-w-[1200px] md:px-12 lg:px-16 lg:py-8">
      <div className="bg-[#f3f3f3] rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-950 text-center">
          {slides[currentSlide].title}
        </h2>
        <p className="text-sm md:text-base text-black text-center mt-2 break-words max-w-[500px] mx-auto">
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-4 space-y-6 lg:space-y-0">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              {slides[currentSlide].heading}
            </h3>
            <ul className="space-y-2">
              {slides[currentSlide].points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start text-black leading-tight"
                >
                  {/* Adjusted tick alignment */}
                  <span className="text-green-500 mr-3 flex-shrink-0">✔</span>
                  <span className="leading-tight">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3">
            <img
              src={slides[currentSlide].image}
              alt="Icon"
              className="w-full max-w-[600px] h-auto mx-auto lg:mx-0"
            />
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)} // Clicking the dot changes the slide
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
