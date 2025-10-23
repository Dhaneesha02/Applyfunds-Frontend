import { useState } from "react";

const allTopicsFaqs = [
  {
    question: "What is a Loan Against Property?",
    answer:
      "A Loan Against Property (LAP) is a secured loan where you pledge your residential, commercial, or industrial property as collateral to avail funds for personal or business needs.",
  },
  {
    question: "What documents are required for a Loan Against Property?",
    answer:
      "You need identity proof, address proof, property documents, income proof, bank statements, and financial reports to apply for a Loan Against Property.",
  },
  {
    question: "How long does it take to get a Loan Against Property approved?",
    answer:
      "Approval time varies, but most lenders process Loan Against Property applications within 7-10 working days if all documents are in order.",
  },
  {
    question: "Can I prepay my Loan Against Property?",
    answer:
      "Yes, you can prepay your loan, but some lenders may charge a prepayment penalty. Check with your lender for details on prepayment terms.",
  },
];

const faqs = [
  {
    question: "How can I apply for a Loan Against Property?",
    answer:
      "You can apply for a Loan Against Property online or at a bank by submitting necessary documents such as property ownership papers, income proof, and credit history.",
    category: "Application Process",
  },
  {
    question: "What is the interest rate on a Loan Against Property?",
    answer:
      "Interest rates for Loans Against Property vary depending on the lender, loan amount, property type, and applicant's creditworthiness. Typically, they range from 8% to 14% per annum.",
    category: "Interest Rate & EMI",
  },
  {
    question: "What is the eligibility criteria for a Loan Against Property?",
    answer:
      "Eligibility is determined by factors such as property value, income stability, credit score, and repayment capacity.",
    category: "Eligibility",
  },
  {
    question: "Which bank offers the best Loan Against Property rates?",
    answer:
      "The best bank depends on factors like interest rates, processing fees, and loan tenure. It’s advisable to compare different lenders before applying.",
    category: "Application Process",
  },
  {
    question: "What is the minimum credit score required for a Loan Against Property?",
    answer:
      "A credit score of 700 or above is generally preferred for easy approval and better interest rates.",
    category: "Application Process",
  },
];

const categories = [
  "All Topics",
  "Application Process",
  "Eligibility",
  "Interest Rate & EMI",
];

function Faq() {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [openIndex, setOpenIndex] = useState(null);

  // Use predefined "All Topics" FAQs, otherwise filter by category
  const filteredFaqs =
    selectedCategory === "All Topics"
      ? allTopicsFaqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        FAQs on Loan Against Property
      </h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 border rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="space-y-4 border-t pt-4">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="border-b py-3">
            <button
              className="w-full flex justify-between items-center text-left p-3 focus:outline-none font-medium text-gray-900"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="text-gray-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="p-3 text-gray-700 bg-gray-50 rounded-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
