// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import aplogo from "../images/aplogo.png";

// export default function Header1({ scrollToSection }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isNestedOpen, setIsNestedOpen] = useState(false);

//   const activeLinkClass =
//     "font-medium tracking-wide text-gray-700 border-b-2 border-green-500";
//   const defaultLinkClass =
//     "font-medium tracking-wide text-gray-700 transition duration-200 hover:border-b-2 hover:border-green-500";

//   return (
//     <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//       <div className="relative flex items-center justify-between">
//         {/* Logo */}
//         <a
//           href="/"
//           aria-label="Company"
//           title="Company"
//           className="inline-flex items-center"
//         >
//           <img src={aplogo} alt="Logo" className="w-25 h-14 ml-3" />
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center w-full">
//           <ul className="flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? activeLinkClass : defaultLinkClass
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
//             {/* Services Dropdown with Nested Dropdown */}
//             <li className="relative">
//               <button
//                 onClick={() => setIsServicesOpen(!isServicesOpen)}
//                 className="font-medium tracking-wide text-gray-700 transition duration-200 hover:border-b-2 hover:border-green-500 flex items-center focus:outline-none"
//               >
//                 Services
//                 <svg
//                   className={`w-4 h-4 ml-2 transform ${
//                     isServicesOpen ? "rotate-180" : "rotate-0"
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               {isServicesOpen && (
//                 <ul className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     <NavLink
//                       to="/home-loan"
//                       className={({ isActive }) =>
//                         isActive ? activeLinkClass : defaultLinkClass
//                       }
//                       onClick={() => setIsServicesOpen(false)}
//                     >
//                       Home Loan
//                     </NavLink>
//                   </li>
//                   {/* Nested Dropdown */}
//                   {/* <li className="relative">
//                     <button
//                       onClick={() => setIsNestedOpen(!isNestedOpen)}
//                       className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between cursor-pointer"
//                     >
//                       Business Loan
//                       <svg
//                         className={`w-4 h-4 transform ${
//                           isNestedOpen ? "rotate-180" : "rotate-0"
//                         }`}
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>
//                     {isNestedOpen && (
//                       <ul className="ml-4 mt-1 border-l border-gray-200">
//                         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                           Machinery Loan
//                         </li>
//                         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                           Corporate Loan
//                         </li>
//                       </ul>
//                     )}
//                   </li> */}
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     <NavLink
//                       to="/buisness-loan"
//                       className={({ isActive }) =>
//                         isActive ? activeLinkClass : defaultLinkClass
//                       }
//                       onClick={() => setIsServicesOpen(false)}
//                     >
//                       Buisness Loan
//                     </NavLink>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                     <NavLink
//                       to="/personal-loan"
//                       className={({ isActive }) =>
//                         isActive ? activeLinkClass : defaultLinkClass
//                       }
//                       onClick={() => setIsServicesOpen(false)}
//                     >
//                       Personal Loan
//                     </NavLink>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("section2")}
//                 className="font-medium tracking-wide text-gray-700 transition duration-200 hover:border-b-2 hover:border-green-500 focus:outline-none"
//               >
//                 EMI Calculation
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("section4")}
//                 className="font-medium tracking-wide text-gray-700 transition duration-200 hover:border-b-2 hover:border-green-500 focus:outline-none"
//               >
//                 Eligibility Criteria
//               </button>
//             </li>
//           </ul>

//           {/* Right-Aligned Contact Us Button */}
//           <div className="ml-auto">
//             <a
//               href="/contact"
//               className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-green-600 hover:bg-deep-purple-accent-700 rounded-full"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="inline-flex items-center justify-center p-2 text-gray-600 bg-white rounded-md hover:text-gray-800 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>

//           {/* Mobile Menu Toggle */}
//           {isMenuOpen && (
//             <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 rounded-md">
//               <ul className="space-y-4 p-4">
//                 <li>
//                   <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                       isActive ? activeLinkClass : defaultLinkClass
//                     }
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => setIsServicesOpen(!isServicesOpen)}
//                     className="w-full text-left"
//                   >
//                     Services
//                   </button>
//                   {isServicesOpen && (
//                     <ul className="space-y-2 pl-4">
//                       <li>
//                         <NavLink
//                           to="/home-loan"
//                           className={({ isActive }) =>
//                             isActive ? activeLinkClass : defaultLinkClass
//                           }
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           Home Loan
//                         </NavLink>
//                       </li>
//                       {/* <li>
//                         <button
//                           onClick={() => setIsNestedOpen(!isNestedOpen)}
//                           className="w-full text-left"
//                         >
//                           Business Loan
//                         </button>
//                         {isNestedOpen && (
//                           <ul className="space-y-2 pl-4">
//                             <li>Machinery Loan</li>
//                             <li>Corporate Loan</li>
//                           </ul>
//                         )}
//                       </li> */}
//                       <li>
//                         <NavLink
//                           to="/buisness-loan"
//                           className={({ isActive }) =>
//                             isActive ? activeLinkClass : defaultLinkClass
//                           }
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           Buisness Loan
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink
//                           to="/personal-loan"
//                           className={({ isActive }) =>
//                             isActive ? activeLinkClass : defaultLinkClass
//                           }
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           Personal Loan
//                         </NavLink>
//                       </li>
//                     </ul>
//                   )}
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("section2")}
//                     className="font-medium tracking-wide text-gray-700 transition duration-200 hover:border-b-2 hover:border-green-500 focus:outline-none"
//                   >
//                     EMI Calculation
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => scrollToSection("section4")}
//                     className="font-medium tracking-wide text-gray-700 transition duration-200 hover:border-b-2 hover:border-green-500 focus:outline-none"
//                   >
//                     Eligibility Criteria
//                   </button>
//                 </li>
//                 <li>
//                   <a
//                     href="/contact"
//                     className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-green-600 hover:bg-deep-purple-accent-700 rounded-full"
//                   >
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
