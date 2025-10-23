// import { useState } from "react";

// const Item = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border rounded-lg mb-4">
//       <button
//         type="button"
//         aria-label="Open item"
//         title="Open item"
//         className="flex items-center justify-between w-full p-4 focus:outline-none rounded-t-lg"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <p className="text-lg font-medium">{title}</p>
//         <svg
//           viewBox="0 0 24 24"
//           className={`w-3 text-gray-600 transform transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         >
//           <polyline
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeMiterlimit="10"
//             points="2,7 12,17 22,7"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="p-4 pt-0 rounded-b-lg">
//           <p className="text-gray-700">{children}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export const Section7 = () => {
//   return (
//     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
//         <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
//           <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-950 sm:text-4xl md:mx-auto">
//             <span className="relative inline-block">
//               <span className="relative">Frequently asked Questions</span>
//             </span>{" "}
//           </h2>
//           <p className="text-base text-gray-700 md:text-lg">
//             There's no such things as too many questions
//           </p>
//         </div>
//         <div className="space-y-4">
//           <Item title="What interest rate can I expect?">
//             Generally, the shorter the loan term, the lower the interest rate
//             offered by most loan companies. Some lenders even offer an autopay
//             discount if you authorize your monthly loan payments to be directly
//             withdrawn from your checking account or savings account. Qualifying
//             for lower rates offered by a lender is dependent on your online loan
//             application, credit history and credit score, whether you get a
//             short-term loan or a long-term loan, loan purpose, and other
//             factors. The better your credit score, the better the interest rate
//             you can qualify for.
//           </Item>
//           <Item title="What can I use a personal loan for?">
//             A personal loan is a flexible financial tool used for various needs
//             like debt consolidation, medical expenses, home renovations,
//             education, travel, or weddings. It provides quick access to funds
//             without requiring collateral, making it convenient for urgent or
//             planned expenses. Borrow responsibly to ensure manageable repayments
//             and financial stability.
//           </Item>
//           <Item title="How can I get a personal loan?">
//             To get a personal loan, apply online or at a bank by providing
//             documents like ID, income proof, and credit history. Ensure you meet
//             the lender’s eligibility criteria and compare offers for the best
//             terms.
//           </Item>
//           <Item title="What is a home loan?">
//             A home loan is a financial product provided by banks or financial
//             institutions to help individuals purchase, construct, or renovate a
//             house. The borrower repays the loan with interest over a fixed
//             tenure through monthly installments (EMIs).
//           </Item>
//         </div>
//       </div>
//     </div>
//   );
// };
