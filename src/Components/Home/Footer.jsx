import React, { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import aplogo from "../images/aplogo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="px-10 pt-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-full  bg-gradient-to-r from-green-100 to-blue-100 text-black">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={aplogo} alt="Company Logo" className="w-30 h-16" />
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm mb-4">
              Our mission is to empower individuals and businesses by providing
              them with the financial resources they need to achieve their
              goals.
            </p>
            {/* <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white text-gray-800 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-green-300 text-sm"
                style={{ maxWidth: "250px" }}
              />
              <button className="bg-blue-950 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-500 transition-colors duration-300">
                Subscribe
              </button>
            </div> */}
            <div className="flex items-center mt-4 space-x-4 sm:mt-0 pr-10">
              <a
                href="https://www.linkedin.com/company/one-assist-technologies/posts/?feedView=all"
                className="hover:text-blue-900"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/919894978394"
                className="hover:text-blue-900"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/people/One-Assist-Technologies/61562081859308/"
                className="hover:text-blue-900"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-bold pb-1">OUR SERVICES</p>
            <div className="h-[2px] w-12 bg-black mb-4"></div>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink to="/personal-loan" className="hover:text-blue-900">
                  Personal Loan
                </NavLink>
              </li>
              <li>
                <NavLink to="/buisness-loan" className="hover:text-blue-900">
                  Business Loan
                </NavLink>
              </li>
              <li>
                <NavLink to="/loan-against" className="hover:text-blue-900">
                  Loan Against Property
                </NavLink>
              </li>
              <li>
                <NavLink to="/home-loan" className="hover:text-blue-900">
                  Home Loan
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold pb-1">LINKS</p>
            <div className="h-[2px] w-12 bg-black mb-4"></div>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink to="/our-partners" className="hover:text-blue-900">
                  Our Partners
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-blue-900">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="hover:text-blue-900">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="hover:text-blue-900">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold pb-1">INVESTMENT</p>
            <div className="h-[2px] w-12 bg-black mb-4"></div>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink to="/mutual-fund" className="hover:text-blue-900">
                  Mutual Fund
                </NavLink>
              </li>
              <li>
                <NavLink to="/sip" className="hover:text-blue-900">
                  SIP
                </NavLink>
              </li>
            </ul>

            <p className="font-bold pb-1 mt-4">INSURANCE</p>
            <div className="h-[2px] w-12 bg-black mb-4"></div>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink to="/scams" className="hover:text-blue-900">
                  Scams & Frauds
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers" className="hover:text-blue-900">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin" className="hover:text-blue-900">
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold pb-1">Contact Us</p>
            <div className="h-[2px] w-12 bg-black mb-4"></div>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start space-x-2">
                <FaPhone className="text-blue-950 text-lg mt-1" />
                <div className="flex flex-col">
                  <a
                    href="tel:+919894978394"
                    className="hover:text-blue-900 whitespace-nowrap"
                  >
                    +91 9894978394
                  </a>
                  <a
                    href="tel:+919597431719"
                    className="hover:text-blue-900 whitespace-nowrap"
                  >
                    +91 9597431719
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-950 text-lg mt-1 w-8 h-8" />
                <div>
                  <a href="/" className="hover:text-blue-900">
                    553 NVN Layout, Tatabad, Gandhipuram, Coimbatore Tamil
                    Nadu-641012
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-600 sm:flex-row">
        <p className="text-sm">
          © Copyright 2020 One Assist. All rights reserved
        </p>
        {/* <div className="flex items-center mt-4 space-x-4 sm:mt-0 pr-10">
        © Copyright 2020 One Assist. All rights reserved
       
        </div> */}
      </div>
    </div>
  );
}
