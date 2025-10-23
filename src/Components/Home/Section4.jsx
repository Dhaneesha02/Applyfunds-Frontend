import React, { useState } from "react";
import pl from "../images/pl.png";
import bl from "../images/bl.png";
import hl from "../images/hl.png";
import ml from "../images/ml.png";
import cl from "../images/cl.png";
import vl from "../images/vl.png";
import loanagalogo from "../images/loanagalogo.png";
import { NavLink } from "react-router-dom";

const Section4 = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleCards = showMore
    ? [
        { id: 1, title: "Personal Loan", icon: pl, route: "/personal-loan" },
        { id: 2, title: "Business Loan", icon: bl, route: "/business-loan" },
        { id: 3, title: "Home Loan", icon: hl, route: "/home-loan" },
        { id: 4, title: "Mortgage Loan", icon: ml, route: "/mortgage-loan" },
        {
          id: 5,
          title: "Loan Against Property",
          icon: vl,
          route: "/loan-against",
        },
        { id: 6, title: "Corporate Loan", icon: cl, route: "/corporate-loan" },
      ]
    : [
        { id: 1, title: "Personal Loan", icon: pl, route: "/personal-loan" },
        { id: 2, title: "Business Loan", icon: bl, route: "/business-loan" },
        { id: 3, title: "Home Loan", icon: hl, route: "/home-loan" },
      ];

  return (
    <div className="bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-950">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Personal Loan */}
        <div className="bg-[#f1faf5] shadow-md rounded-lg p-6 text-center w-80">
          <img
            src={pl}
            alt="Personal Loan"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Personal Loan</h3>
          <p className="text-gray-600 mb-4">
            Personal loans offer flexibility for needs like debt consolidation,
            medical bills, or home improvements.
          </p>
          <NavLink
            to="/personal-loan"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 inline-block text-center"
          >
            View
          </NavLink>
        </div>

        {/* Business Loan */}
        <div className="bg-[#f1faf5] shadow-md rounded-lg p-6 text-center w-80">
          <img
            src={bl}
            alt="Business Loan"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Business Loan</h3>
          <p className="text-gray-600 mb-4">
            Business Loan Services provide financial assistance to businesses
            for various purposes.
          </p>
          <NavLink
            to="/buisness-loan"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 inline-block text-center"
          >
            View
          </NavLink>
        </div>

        {/* Home Loan */}
        <div className="bg-[#f1faf5] shadow-md rounded-lg p-6 text-center w-80">
          <img src={hl} alt="Home Loan" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Home Loan</h3>
          <p className="text-gray-600 mb-4">
            Home Loan Services provide financing options for individuals or
            businesses to purchase property.
          </p>
          <NavLink
            to="/home-loan"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 inline-block text-center"
          >
            View
          </NavLink>
        </div>

        {/* Mortgage Loan */}
        {showMore && (
          <div className="bg-[#f1faf5] shadow-md rounded-lg p-6 text-center w-80">
            <img
              src={ml}
              alt="Mortgage Loan"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mortgage Loan</h3>
            <p className="text-gray-600 mb-4">
              A mortgage loan is a secured loan using property as collateral for
              buying or refinancing real estate.
            </p>
            <NavLink
              to="/mortgage-loan"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 inline-block text-center"
            >
              View
            </NavLink>
          </div>
        )}

        {/* Vehicle Loan */}
        {showMore && (
          <div className="bg-[#f1faf5] shadow-md rounded-lg p-6 text-center w-80">
            <img
              src={loanagalogo}
              alt="Loan against property"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Loan Against Property
            </h3>
            <p className="text-gray-600 mb-4">
              A Loan Against Property is a secured loan where you pledge your
              property to get funds at low interest rates.
            </p>
            <NavLink
              to="/loan-against"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 inline-block text-center"
            >
              View
            </NavLink>
          </div>
        )}

        {/* Corporate Loan */}
        {showMore && (
          <div className="bg-[#f1faf5] shadow-md rounded-lg p-6 text-center w-80">
            <img
              src={cl}
              alt="Corporate Loan"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Corporate Loan</h3>
            <p className="text-gray-600 mb-4">
              A corporate loan is a funding option provided to businesses for
              operational expenses or other corporate needs.
            </p>
            <NavLink
              to="/corporate-loan"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 inline-block text-center"
            >
              View
            </NavLink>
          </div>
        )}
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-blue-950 text-white px-6 py-3 rounded-full hover:bg-blue-900"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Section4;
