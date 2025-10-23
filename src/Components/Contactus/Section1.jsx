import React from "react";
import bgimg from "../images/bgimg.png"; // Ensure the image path is correct

const Section1 = () => {
  return (
    <div
      className="overflow-hidden bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
             Contact Us
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-100 md:text-lg"> 
                Do you have a question, concern, idea, feedback, or problem?
                Take a look at our frequently asked questions for some quick
                answers. If you still need assistance, please fill out the form
                below and we'd be happy to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
