import React from "react";
import hlresimg from "../images/hlresimg.jpg";
import homemob from "../images/homemob.png";

export default function Section12() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-0">
      <h1 className="text-center text-3xl font-bold mb-8 text-[#0F1258] px-4 md:px-0">
        What steps should I take to apply <br /> for a
        <span className="text-[#1CA43E]"> Home Loan</span>
      </h1>
      <div className="w-full flex justify-center">
        {/* Desktop View */}
        <img
          src={homemob}
          alt="Desktop View"
          className="hidden md:block w-full max-w-[90vw] h-auto max-h-[600px] object-contain"
        />
        {/* Mobile View */}
        <img
          src={hlresimg}
          alt="Mobile View"
          className="block md:hidden w-screen max-w-none h-auto max-h-[1000px] object-contain"
        />
      </div>
    </div>
  );
}
