// import React, { useState } from "react";
// import { FaUser, FaBox, FaHeadset, FaSignOutAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Section1() {
//   const [activeTab, setActiveTab] = useState("Dashboard");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Dashboard":
//         return (
//           <div className="bg-white p-6 rounded shadow-md">
//             <h3 className="text-blue-500 text-sm mb-2">CIBIL | Experian</h3>
//             <h2 className="font-semibold text-gray-700 mb-2">
//               Hey! Here's your Credit Score for Apr' 25
//             </h2>
//             <div className="flex items-center gap-10 flex-wrap">
//               <div className="text-center">
//                 <div className="w-40 h-40 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 flex items-center justify-center mx-auto text-3xl font-bold text-gray-800">
//                   727
//                 </div>
//                 <p className="text-yellow-500 font-semibold mt-2">Good 🙂</p>
//               </div>
//               <div>
//                 <p className="text-xl font-bold text-blue-700">
//                   You are doing Good!
//                 </p>
//                 <p className="text-sm text-gray-600 mt-2">
//                   A Credit Score is a 3 digit number which ranges between{" "}
//                   <strong>300-900</strong>. Maintaining a Good or better score
//                   helps you get best offers on Loans or Credit Cards.
//                 </p>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Next report on: <strong>05 May' 25</strong>
//                 </p>
//                 <div className="mt-4 flex gap-4 flex-wrap">
//                   <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
//                     Download Report
//                   </button>
//                   <button className="text-indigo-600 underline">
//                     See What's Changed
//                   </button>
//                   <button className="text-indigo-600 underline">
//                     Score Predictor
//                   </button>
//                   <button className="text-indigo-600 underline">
//                     View Report
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white mt-6 p-4 rounded shadow-md">
//               <h4 className="font-semibold text-gray-700 mb-2">pb💰money</h4>
//               <p className="text-sm text-gray-600">
//                 One View of all your Bank Accounts
//               </p>
//               <p className="text-xs text-gray-500">
//                 Know how to spend across accounts - all in one place
//               </p>
//               <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
//                 Know More
//               </button>
//             </div>
//           </div>
//         );

//       case "Profile":
//         return (
//           <div className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-2xl font-semibold text-blue-700 mb-6">
//               Welcome!
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-sm">
//               {/* Full Name */}
//               <div>
//                 <label className="text-gray-500 block mb-1">Full Name</label>
//                 <div className="flex items-center bg-gray-100 p-3 rounded">
//                   <input
//                     type="text"
//                     placeholder="Enter your full name"
//                     className="bg-transparent outline-none flex-grow text-gray-800"
//                   />
//                   <span className="text-gray-500 ml-2">🔒</span>
//                 </div>
//               </div>

//               {/* Date of Birth */}
//               <div>
//                 <label className="text-gray-500 block mb-1">
//                   Date of Birth
//                 </label>
//                 <div className="flex items-center bg-gray-100 p-3 rounded">
//                   <input
//                     type="text"
//                     placeholder="Enter your DOB"
//                     className="bg-transparent outline-none flex-grow text-gray-800"
//                   />
//                   <span className="text-gray-500 ml-2">🎂</span>
//                 </div>
//               </div>

//               {/* Email Address */}
//               <div>
//                 <label className="text-gray-500 block mb-1">
//                   Email Address
//                 </label>
//                 <div className="flex items-center bg-gray-100 p-3 rounded">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="bg-transparent outline-none flex-grow text-gray-800"
//                   />
//                   <span className="text-gray-500 ml-2">🔒</span>
//                 </div>
//               </div>

//               {/* Mobile Number */}
//               <div>
//                 <label className="text-gray-500 block mb-1">
//                   Mobile Number
//                 </label>
//                 <div className="flex items-center bg-gray-100 p-3 rounded">
//                   <input
//                     type="text"
//                     placeholder="Enter your mobile number"
//                     className="bg-transparent outline-none flex-grow text-gray-800"
//                   />
//                   <span className="text-gray-500 ml-2">🔒</span>
//                 </div>
//               </div>

//               {/* Address */}
//               <div>
//                 <label className="text-gray-500 block mb-1">Address</label>
//                 <div className="flex items-center bg-gray-100 p-3 rounded">
//                   <input
//                     type="text"
//                     placeholder="Enter your address"
//                     className="bg-transparent outline-none flex-grow text-gray-800"
//                   />
//                   <span className="text-gray-500 ml-2">🔒</span>
//                 </div>
//               </div>

//               {/* PIN Code */}
//               <div>
//                 <label className="text-gray-500 block mb-1">Pin Code</label>
//                 <div className="flex items-center bg-gray-100 p-3 rounded">
//                   <input
//                     type="text"
//                     placeholder="Enter your pin code"
//                     className="bg-transparent outline-none flex-grow text-gray-800"
//                   />
//                   <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-400 ml-2">
//                     City
//                   </span>
//                 </div>
//               </div>

//               {/* PAN Card Number */}
//               <div>
//                 <label className="text-gray-500 block mb-1">
//                   PAN Card Number
//                 </label>
//                 <div className="flex items-center bg-gray-100 p-3 rounded">
//                   <input
//                     type="text"
//                     placeholder="Enter your PAN number"
//                     className="bg-transparent outline-none flex-grow text-gray-800"
//                   />
//                   <span className="text-gray-500 ml-2">🔒</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "Services":
//         return (
//           <div className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Our Services
//             </h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700">
//         <li>
//           <Link to="/personal-loan" className="text-blue-500 hover:underline">
//             Personal Loan
//           </Link>
//         </li>
//         <li>
//           <Link to="/business-loan" className="text-blue-500 hover:underline">
//             Business Loan
//           </Link>
//         </li>
//         <li>
//           <Link to="/loan-against-property" className="text-blue-500 hover:underline">
//             Loan Against Property
//           </Link>
//         </li>
//         <li>
//           <Link to="/home-loan" className="text-blue-500 hover:underline">
//             Home Loan
//           </Link>
//         </li>
//       </ul>
//           </div>
//         );

//       case "Support":
//         return (
//           <div className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               Support
//             </h2>
//             <p className="text-gray-600">For any issues, contact us:</p>
//             <p className="text-gray-600">Email: support@paisabazaar.com</p>
//             <p className="text-gray-600">Phone: 1800-123-4567</p>
//           </div>
//         );

//       case "Logout":
//         return (
//           <div className="bg-white p-6 rounded shadow-md text-center">
//             <h2 className="text-xl font-semibold text-red-600 mb-2">
//               You have logged out!
//             </h2>
//             <p className="text-gray-600">
//               Thank you for visiting PaisaBazaar Dashboard.
//             </p>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white p-4 shadow-lg">

//         <ul className="space-y-4">
//           <li
//             className={`cursor-pointer font-semibold ${
//               activeTab === "Dashboard" ? "text-blue-600" : "text-gray-700"
//             }`}
//             onClick={() => setActiveTab("Dashboard")}
//           >
//             📊 Dashboard
//           </li>
//           <li
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => setActiveTab("Profile")}
//           >
//             <FaUser /> Profile
//           </li>
//           <li
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => setActiveTab("Services")}
//           >
//             <FaBox /> Services
//           </li>
//           <li
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => setActiveTab("Support")}
//           >
//             <FaHeadset /> Support
//           </li>
//           <li
//             className="flex items-center gap-2 text-red-500 mt-12 cursor-pointer"
//             onClick={() => setActiveTab("Logout")}
//           >
//             <FaSignOutAlt /> Log Out
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">{renderContent()}</div>
//     </div>
//   );
// }

// export default Section1;

// import React, { useState } from "react";
// import { FaUser, FaBox, FaHeadset, FaSignOutAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Section1() {
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [supportOpen, setSupportOpen] = useState(false);

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Dashboard":
//         return (
//           <div className="bg-white p-6 rounded shadow-md">
//             <h3 className="text-blue-500 text-sm mb-2">CIBIL | Experian</h3>
//             <h2 className="font-semibold text-gray-700 mb-2">
//               Hey! Here's your Credit Score for Apr' 25
//             </h2>
//             <div className="flex items-center gap-10 flex-wrap">
//               <div className="text-center">
//                 <div className="w-40 h-40 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 flex items-center justify-center mx-auto text-3xl font-bold text-gray-800">
//                   727
//                 </div>
//                 <p className="text-yellow-500 font-semibold mt-2">Good 🙂</p>
//               </div>
//               <div>
//                 <p className="text-xl font-bold text-blue-700">
//                   You are doing Good!
//                 </p>
//                 <p className="text-sm text-gray-600 mt-2">
//                   A Credit Score is a 3 digit number which ranges between{" "}
//                   <strong>300-900</strong>. Maintaining a Good or better score
//                   helps you get best offers on Loans or Credit Cards.
//                 </p>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Next report on: <strong>05 May' 25</strong>
//                 </p>
//                 <div className="mt-4 flex gap-4 flex-wrap">
//                   <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
//                     Download Report
//                   </button>
//                   <button className="text-indigo-600 underline">
//                     See What's Changed
//                   </button>
//                   <button className="text-indigo-600 underline">
//                     Score Predictor
//                   </button>
//                   <button className="text-indigo-600 underline">
//                     View Report
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white mt-6 p-4 rounded shadow-md">
//               <h4 className="font-semibold text-gray-700 mb-2">pb💰money</h4>
//               <p className="text-sm text-gray-600">
//                 One View of all your Bank Accounts
//               </p>
//               <p className="text-xs text-gray-500">
//                 Know how to spend across accounts - all in one place
//               </p>
//               <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
//                 Know More
//               </button>
//             </div>
//           </div>
//         );

//         case "Profile":
//           return (
//             <div className="bg-white p-6 rounded shadow-md">
//               <h2 className="text-2xl font-semibold text-blue-700 mb-6">
//                 Welcome!
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-sm">
//                 {/* Full Name */}
//                 <div>
//                   <label className="text-gray-500 block mb-1">Full Name</label>
//                   <div className="flex items-center bg-gray-100 p-3 rounded">
//                     <input
//                       type="text"
//                       placeholder="Enter your full name"
//                       className="bg-transparent outline-none flex-grow text-gray-800"
//                     />
//                     <span className="text-gray-500 ml-2">🔒</span>
//                   </div>
//                 </div>

//                 {/* Date of Birth */}
//                 <div>
//                   <label className="text-gray-500 block mb-1">
//                     Date of Birth
//                   </label>
//                   <div className="flex items-center bg-gray-100 p-3 rounded">
//                     <input
//                       type="text"
//                       placeholder="Enter your DOB"
//                       className="bg-transparent outline-none flex-grow text-gray-800"
//                     />
//                     <span className="text-gray-500 ml-2">🎂</span>
//                   </div>
//                 </div>

//                 {/* Email Address */}
//                 <div>
//                   <label className="text-gray-500 block mb-1">
//                     Email Address
//                   </label>
//                   <div className="flex items-center bg-gray-100 p-3 rounded">
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       className="bg-transparent outline-none flex-grow text-gray-800"
//                     />
//                     <span className="text-gray-500 ml-2">🔒</span>
//                   </div>
//                 </div>

//                 {/* Mobile Number */}
//                 <div>
//                   <label className="text-gray-500 block mb-1">
//                     Mobile Number
//                   </label>
//                   <div className="flex items-center bg-gray-100 p-3 rounded">
//                     <input
//                       type="text"
//                       placeholder="Enter your mobile number"
//                       className="bg-transparent outline-none flex-grow text-gray-800"
//                     />
//                     <span className="text-gray-500 ml-2">🔒</span>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div>
//                   <label className="text-gray-500 block mb-1">Address</label>
//                   <div className="flex items-center bg-gray-100 p-3 rounded">
//                     <input
//                       type="text"
//                       placeholder="Enter your address"
//                       className="bg-transparent outline-none flex-grow text-gray-800"
//                     />
//                     <span className="text-gray-500 ml-2">🔒</span>
//                   </div>
//                 </div>

//                 {/* PIN Code */}
//                 <div>
//                   <label className="text-gray-500 block mb-1">Pin Code</label>
//                   <div className="flex items-center bg-gray-100 p-3 rounded">
//                     <input
//                       type="text"
//                       placeholder="Enter your pin code"
//                       className="bg-transparent outline-none flex-grow text-gray-800"
//                     />
//                     <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-400 ml-2">
//                       City
//                     </span>
//                   </div>
//                 </div>

//                 {/* PAN Card Number */}
//                 <div>
//                   <label className="text-gray-500 block mb-1">
//                     PAN Card Number
//                   </label>
//                   <div className="flex items-center bg-gray-100 p-3 rounded">
//                     <input
//                       type="text"
//                       placeholder="Enter your PAN number"
//                       className="bg-transparent outline-none flex-grow text-gray-800"
//                     />
//                     <span className="text-gray-500 ml-2">🔒</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );

//       case "Services":
//         return (
//           <div className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Our Services
//             </h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700">
//               <li>
//                 <Link
//                   to="/personal-loan"
//                   className="text-blue-500 hover:underline"
//                 >
//                   Personal Loan
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/business-loan"
//                   className="text-blue-500 hover:underline"
//                 >
//                   Business Loan
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/loan-against-property"
//                   className="text-blue-500 hover:underline"
//                 >
//                   Loan Against Property
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/home-loan" className="text-blue-500 hover:underline">
//                   Home Loan
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         );

//       case "Support":
//         return (
//           <div className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               Support
//             </h2>
//             {supportOpen && (
//               <ul className="space-y-2 text-gray-700">
//                 <li>
//                   <Link to="/faq" className="text-blue-500 hover:underline">
//                     FAQ
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contact" className="text-blue-500 hover:underline">
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             )}
//             <button
//               onClick={() => setSupportOpen(!supportOpen)}
//               className="text-blue-500 mt-4"
//             >
//               {supportOpen ? "Hide" : "Show"} Support Options
//             </button>
//           </div>
//         );

//       case "Logout":
//         return (
//           <div className="bg-white p-6 rounded shadow-md text-center">
//             <h2 className="text-xl font-semibold text-red-600 mb-2">
//               You have logged out!
//             </h2>
//             <p className="text-gray-600">
//               Thank you for visiting PaisaBazaar Dashboard.
//             </p>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-50 p-4 shadow-lg text-black">
//         <ul className="space-y-4">
//           <li
//             className={`cursor-pointer font-semibold ${
//               activeTab === "Dashboard" ? "text-blue-350" : "text-black"
//             }`}
//             onClick={() => setActiveTab("Dashboard")}
//           >
//             📊 Dashboard
//           </li>
//           <li
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => setActiveTab("Profile")}
//           >
//             <FaUser /> Profile
//           </li>
//           <li
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => setActiveTab("Services")}
//           >
//             <FaBox /> Services
//           </li>
//           <li
//             className="flex items-center gap-2 cursor-pointer"
//             onClick={() => setActiveTab("Support")}
//           >
//             <FaHeadset /> Support
//           </li>
//           <li
//             className="flex items-center gap-2 text-red-500 mt-12 cursor-pointer"
//             onClick={() => setActiveTab("Logout")}
//           >
//             <FaSignOutAlt /> Log Out
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 bg-gray-50">{renderContent()}</div>
//     </div>
//   );
// }

// export default Section1;

import React, { useState } from "react";
import { FaUser, FaBox, FaHeadset, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Section1() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-blue-500 text-sm mb-2">CIBIL | Experian</h3>
            <h2 className="font-semibold text-gray-700 mb-2">
              Hey! Here's your Credit Score for Apr' 25
            </h2>
            <div className="flex items-center gap-10 flex-wrap">
              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 flex items-center justify-center mx-auto text-3xl font-bold text-gray-800">
                  727
                </div>
                <p className="text-yellow-500 font-semibold mt-2">Good 🙂</p>
              </div>
              <div>
                <p className="text-xl font-bold text-blue-700">
                  You are doing Good!
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  A Credit Score is a 3 digit number which ranges between{" "}
                  <strong>300-900</strong>. Maintaining a Good or better score
                  helps you get best offers on Loans or Credit Cards.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Next report on: <strong>05 May' 25</strong>
                </p>
                <div className="mt-4 flex gap-4 flex-wrap">
                  <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
                    Download Report
                  </button>
                  <button className="text-indigo-600 underline">
                    See What's Changed
                  </button>
                  <button className="text-indigo-600 underline">
                    Score Predictor
                  </button>
                  <button className="text-indigo-600 underline">
                    View Report
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white mt-6 p-4 rounded shadow-md">
              <h4 className="font-semibold text-gray-700 mb-2">pb💰money</h4>
              <p className="text-sm text-gray-600">
                One View of all your Bank Accounts
              </p>
              <p className="text-xs text-gray-500">
                Know how to spend across accounts - all in one place
              </p>
              <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Know More
              </button>
            </div>
          </div>
        );

      case "Profile":
        return (
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Welcome!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-sm">
              {/* Full Name */}
              <div>
                <label className="text-gray-500 block mb-1">Full Name</label>
                <div className="flex items-center bg-gray-100 p-3 rounded">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-transparent outline-none flex-grow text-gray-800"
                  />
                  <span className="text-gray-500 ml-2">🔒</span>
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="text-gray-500 block mb-1">
                  Date of Birth
                </label>
                <div className="flex items-center bg-gray-100 p-3 rounded">
                  <input
                    type="text"
                    placeholder="Enter your DOB"
                    className="bg-transparent outline-none flex-grow text-gray-800"
                  />
                  <span className="text-gray-500 ml-2">🎂</span>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="text-gray-500 block mb-1">
                  Email Address
                </label>
                <div className="flex items-center bg-gray-100 p-3 rounded">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent outline-none flex-grow text-gray-800"
                  />
                  <span className="text-gray-500 ml-2">🔒</span>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="text-gray-500 block mb-1">
                  Mobile Number
                </label>
                <div className="flex items-center bg-gray-100 p-3 rounded">
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="bg-transparent outline-none flex-grow text-gray-800"
                  />
                  <span className="text-gray-500 ml-2">🔒</span>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="text-gray-500 block mb-1">Address</label>
                <div className="flex items-center bg-gray-100 p-3 rounded">
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="bg-transparent outline-none flex-grow text-gray-800"
                  />
                  <span className="text-gray-500 ml-2">🔒</span>
                </div>
              </div>

              {/* PIN Code */}
              <div>
                <label className="text-gray-500 block mb-1">Pin Code</label>
                <div className="flex items-center bg-gray-100 p-3 rounded">
                  <input
                    type="text"
                    placeholder="Enter your pin code"
                    className="bg-transparent outline-none flex-grow text-gray-800"
                  />
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-400 ml-2">
                    City
                  </span>
                </div>
              </div>

              {/* PAN Card Number */}
              <div>
                <label className="text-gray-500 block mb-1">
                  PAN Card Number
                </label>
                <div className="flex items-center bg-gray-100 p-3 rounded">
                  <input
                    type="text"
                    placeholder="Enter your PAN number"
                    className="bg-transparent outline-none flex-grow text-gray-800"
                  />
                  <span className="text-gray-500 ml-2">🔒</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "Services":
        return (
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Services
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <Link
                  to="/personal-loan"
                  className="text-blue-500 hover:underline"
                >
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link
                  to="/buisness-loan"
                  className="text-blue-500 hover:underline"
                >
                  Business Loan
                </Link>
              </li>
              <li>
                <Link
                  to="/loan-against"
                  className="text-blue-500 hover:underline"
                >
                  Loan Against Property
                </Link>
              </li>
              <li>
                <Link to="/home-loan" className="text-blue-500 hover:underline">
                  Home Loan
                </Link>
              </li>
            </ul>
          </div>
        );

      case "Support":
        return (
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Support
            </h2>
            {supportOpen && (
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link to="/faq" className="text-blue-500 hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-blue-500 hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
            <button
              onClick={() => setSupportOpen(!supportOpen)}
              className="text-blue-500 mt-4"
            >
              {supportOpen ? "Hide" : "Show"} Support Options
            </button>
          </div>
        );

      case "Logout":
        return (
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              You have logged out!
            </h2>
            <p className="text-gray-600">
              Thank you for visiting Apply Funds Dashboard.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-blue-50 p-4 shadow-lg text-black">
        <ul className="space-y-4">
          <li
            className={`cursor-pointer font-semibold ${
              activeTab === "Dashboard" ? "text-blue-350" : "text-black"
            }`}
            onClick={() => setActiveTab("Dashboard")}
          >
            📊 Dashboard
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveTab("Profile")}
          >
            <FaUser /> Profile
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveTab("Services")}
          >
            <FaBox /> Services
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveTab("Support")}
          >
            <FaHeadset /> Support
          </li>
          <li
            className="flex items-center gap-2 text-red-500 mt-12 cursor-pointer"
            onClick={() => setActiveTab("Logout")}
          >
            <FaSignOutAlt /> Log Out
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">{renderContent()}</div>
    </div>
  );
}

export default Section1;
