// import React, { useState, useEffect } from "react";

// import scroll11 from "../images/scroll11.png"
// import scroll1 from "../images/scroll1.png";
// import scroll3 from "../images/scroll3.png";

// const slides = [
//   {
//     title: "Quick and Easy Loans for Your Financial Needs.",
//     description:
//       "Our loan services offer a hassle-free borrowing experience, ensuring quick access to funds for your financial goals.",
//     image: scroll11,
//   },
//   {
//     title: "Fast Approval, Low Interest Rates.",
//     description:
//       "We provide competitive interest rates and rapid loan approvals to help you achieve your financial dreams with ease.",
//     image: scroll1,
//   },
//   {
//     title: "Secure and Flexible Repayment Options.",
//     description:
//       "Enjoy peace of mind with our secure loan process and flexible repayment terms tailored to your needs.",
//     image: scroll3,
//   },
// ];

// export default function Section1({ scrollToSection }) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden bg-white z-0"> {/* Set lower z-index than the header */}
//       <div className="max-w-screen-xl mx-auto px-6 py-16 sm:px-12 lg:px-16">
//         <div className="relative w-full h-auto overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div key={index} className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center justify-between px-4">
//                 <div className="lg:w-1/2 text-center lg:text-left">
//                   <h5 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
//                     {slide.title}
//                   </h5>
//                   <p className="text-lg text-gray-700 mb-6">{slide.description}</p>
//                   <button
//                     className="px-6 py-2 text-lg font-semibold border-2 border-gray-500 text-black bg-white rounded-full hover:bg-green-600 hover:text-white transition duration-300"
//                     onClick={() => scrollToSection("section3")}
//                   >
//                     Get Started
//                   </button>
//                 </div>
//                 <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
//                   <img
//                     className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover"
//                     src={slide.image}
//                     alt="Slide"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";

import scr1 from "../images/scr1.png";
import scr2 from "../images/scr2.png";
import scr3 from "../images/scr3.png";

const slides = [
  {
    title: "Quick Loans for Your Financial Needs.",
    description: [
      "Hassle-free loan process",
      "Quick approval",
      "Minimal documentation",
      " Flexible loan amounts",
    ],
    image: scr1,
  },
  {
    title: "Fast Approval, Low Interest Rates.",
    description: [
      "Instant loan approvals",
      " Competitive interest rates",
      " No hidden charges",
      " Easy online application",
    ],
    image: scr2,
  },
  {
    title: "Easy-to-Manage Payment Options.",
    description: [
      " Secure loan transactions",
      " Customizable repayment ",
      " Auto-debit payment options",
      " 24/7 customer support",
    ],
    image: scr3,
  },
];

export default function Section1({ scrollToSection }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-green-100 to-blue-100 z-0">
      <div className="max-w-screen-xl mx-auto px-6 py-20 sm:px-12 lg:px-16">
        <div className="relative w-full h-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center justify-between px-4">
                <div className="lg:w-1/2 text-center lg:text-left">
                <h5 className="text-3xl md:text-5xl font-extrabold  mb-6 text-gray-900">
  {slide.title}
</h5>

                  <ul className="text-xl text-gray-700 mb-8 space-y-2">
                    {slide.description.map((point, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="text-green-600 text-2xl">✔️</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="px-8 py-3 text-xl font-semibold border-2 border-gray-500 text-black bg-white rounded-full hover:bg-green-600 hover:text-white transition duration-300"
                    onClick={() => scrollToSection("section3")}
                  >
                    Get Started
                  </button>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                  <img
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-full object-cover"
                    src={slide.image}
                    alt="Slide"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


