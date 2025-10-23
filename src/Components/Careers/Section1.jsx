// import React from "react";
// import careers from "../images/careers.png";

// const Section1 = () => {
//   return (
//     <div className="min-h-[80vh] bg-blue-100 font-sans">
//       {/* Hero Section */}
//       <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-10 py-16 md:py-20 gap-10">
//         <div className="max-w-xl text-center lg:text-left">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
//             Bring out your best.
//           </h1>
//           <p className="text-base sm:text-lg text-gray-700">
//             Grow your career. Collaborate with the best. Create a brighter
//             future.
//           </p>
//         </div>
//         <div className="relative flex justify-center">
//           <div className="absolute inset-0 bg-blue-400 w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 -z-10 transform translate-x-4 translate-y-4 rounded-lg" />
//           <img
//             src={careers}
//             alt="Team"
//             className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-lg shadow-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section1;

import React from "react";
import careers from "../images/careers.png";

const Section1 = () => {
  return (
    <div className="bg-blue-100 font-sans px-10 py-10 lg:min-h-[75vh]">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-10 gap-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Bring out your best.
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Grow your career. Collaborate with the best. Create a brighter
            future.
          </p>
        </div>
        <div className="relative flex justify-center">
          {/* Background Shape */}
          <div className="absolute bg-blue-400 w-56 h-54 sm:w-72 sm:h-65 lg:w-[26rem] lg:h-[26rem] -z-10 translate-x-4 translate-y-4 rounded-lg" />
          {/* Image without shadow */}
          <img
            src={careers}
            alt="Team"
            className="w-60 sm:w-72 md:w-96 lg:w-[32rem] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
