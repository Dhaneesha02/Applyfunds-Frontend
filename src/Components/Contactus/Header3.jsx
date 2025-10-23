// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import aplogo from "../images/aplogo.png";

// export default function Header3() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isNestedOpen, setIsNestedOpen] = useState(false);
//   const location = useLocation();

//   const activeLinkClass = "font-medium tracking-wide text-gray-700 border-b-2 border-green-500";
//   const defaultLinkClass = "font-medium tracking-wide text-black transition duration-200 hover:text-black hover:border-b-2 hover:border-green-500";

//   const isServicesActive = ["/home-loan", "/vehicle-loan", "/personal-loan"].some((path) =>
//     location.pathname.includes(path)
//   );

//   return (
//     <div className="px-6 py-4 bg-white shadow-md">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <a href="/" aria-label="Company" title="Company" className="inline-flex items-center">
//           <img src={aplogo} alt="Logo" className="w-24 h-14" />
//         </a>

//         {/* Mobile Menu Button */}
//         <button className="lg:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center space-x-8">
//           <li>
//             <NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClass : defaultLinkClass)}>
//               Home
//             </NavLink>
//           </li>
//           <li className="relative">
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className={`${isServicesActive ? activeLinkClass : defaultLinkClass} flex items-center focus:outline-none`}
//             >
//               Services
//               <svg className={`w-4 h-4 ml-2 transform ${isServicesOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isServicesOpen && (
//               <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <NavLink to="/home-loan" className={defaultLinkClass}>Home Loan</NavLink>
//                 </li>
//                 {/* <li className="relative">
//                   <button onClick={() => setIsNestedOpen(!isNestedOpen)} className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-100">
//                     Business Loan
//                     <svg className={`w-4 h-4 transform ${isNestedOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                   {isNestedOpen && (
//                     <ul className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-md z-50">
//                       <li className="px-4 py-2 hover:bg-gray-100">Machinery Loan</li>
//                       <li className="px-4 py-2 hover:bg-gray-100">Corporate Loan</li>
//                     </ul>
//                   )}
//                 </li> */}
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <NavLink to="/buisness-loan" className={defaultLinkClass}>Buisness Loan</NavLink>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-gray-100">
//                   <NavLink to="/personal-loan" className={defaultLinkClass}>Personal Loan</NavLink>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden mt-4 bg-white border border-gray-200 rounded-md shadow-lg">
//           <ul className="flex flex-col">
//             <li className="border-b">
//               <NavLink to="/" className="block px-4 py-2" onClick={() => setIsMenuOpen(false)}>
//                 Home
//               </NavLink>
//             </li>
//             <li className="border-b">
//               <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="w-full text-left px-4 py-2 flex items-center justify-between">
//                 Services
//                 <svg className={`w-4 h-4 transform ${isServicesOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               {isServicesOpen && (
//                 <ul className="bg-white border-t border-gray-200">
//                   <li className="px-4 py-2">
//                     <NavLink to="/home-loan" className="block" onClick={() => setIsMenuOpen(false)}>
//                       Home Loan
//                     </NavLink>
//                   </li>
//                   {/* <li className="relative">
//                     <button onClick={() => setIsNestedOpen(!isNestedOpen)} className="w-full text-left px-4 py-2 flex items-center justify-between">
//                       Business Loan
//                       <svg className={`w-4 h-4 transform ${isNestedOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
//                     {isNestedOpen && (
//                       <ul className="ml-4 border-l border-gray-200">
//                         <li className="px-4 py-2">Machinery Loan</li>
//                         <li className="px-4 py-2">Corporate Loan</li>
//                       </ul>
//                     )}
//                   </li> */}
//                   <li className="px-4 py-2">
//                     <NavLink to="/buisness-loan" className="block" onClick={() => setIsMenuOpen(false)}>
//                       Buisness Loan
//                     </NavLink>
//                   </li>
//                   <li className="px-4 py-2">
//                     <NavLink to="/personal-loan" className="block" onClick={() => setIsMenuOpen(false)}>
//                       Personal Loan
//                     </NavLink>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
