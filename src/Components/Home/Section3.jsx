import React, { forwardRef } from "react";
import cardnn from "../images/cardnn.png";
import card23 from "../images/card23.png";
import cards3 from "../images/cards3.png";
import card4 from "../images/card4.png";

const Section3 = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white px-4 md:px-12 py-8 overflow-x-hidden">
      {/* Container for all steps */}
      <div className="container mx-auto">
        {/* How We Work Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">
            How We Work?
          </h3>
          <p className="text-gray-600">
            This is the process, how you can get a loan for yourself.
          </p>
        </div>
        {[
          {
            title: "Application",
            description:
              "The borrower submits a loan application to the bank, either in person, online, or through other channels. The application includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan.",
            imgSrc: cardnn,
            imgAlt: "Application Step",
            reverse: false,
          },
          {
            title: "Documentation and Verification",
            description:
              "The bank requests supporting documents from the borrower, such as identification proof, income statements, bank statements, and collateral details (if applicable). The bank verifies the information provided to assess the borrower’s creditworthiness and eligibility for the loan.",
            imgSrc: card23,
            imgAlt: "Documentation Step",
            reverse: true,
          },
          {
            title: "Credit Assessment",
            description:
              "The bank conducts a credit assessment to evaluate the borrower’s creditworthiness and ability to repay the loan. This process involves analyzing the borrower’s credit history, income stability, debt-to-income ratio, and other factors.",
            imgSrc: cards3,
            imgAlt: "Credit Assessment",
            reverse: false,
          },
          {
            title: "Loan Approval",
            description:
              "If the borrower meets the bank’s lending criteria and passes the credit assessment, the loan is approved. The bank determines the loan amount, interest rate, repayment term, and any associated fees.",
            imgSrc: card4,
            imgAlt: "Loan Approval Step",
            reverse: true,
          },
        ].map((step, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${
              step.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img
                src={step.imgSrc}
                alt={step.imgAlt}
                className="max-w-full h-auto mx-auto"
              />
            </div>

            <div className="text-center lg:text-left lg:w-1/2">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Section3;
