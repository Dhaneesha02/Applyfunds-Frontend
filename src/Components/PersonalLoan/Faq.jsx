import { useState } from "react";

const allTopicsFaqs = [
  {
    question: "What is a Personal Loan?",
    answer:
      "A Personal Loan is an unsecured loan provided by banks and NBFCs to help individuals meet their financial needs such as medical expenses, travel, weddings, or home renovations.",
  },
  {
    question: "What documents are required for a Personal Loan?",
    answer:
      "You need identity proof, address proof, income proof, bank statements, and salary slips or ITR documents to apply for a Personal Loan.",
  },
  {
    question: "How long does it take to get a Personal Loan approved?",
    answer:
      "Approval time varies, but most lenders process Personal Loan applications within 24-72 hours if all documents are in order.",
  },
  {
    question: "Can I prepay my Personal Loan?",
    answer:
      "Yes, you can prepay your loan, but some lenders may charge a prepayment penalty. It is advisable to check with your lender for exact terms.",
  },
];

const faqs = [
  {
    question: "How can I apply for a Personal Loan?",
    answer:
      "You can apply for a Personal Loan online or at a bank by submitting the required documents, such as income proof and identity verification.",
    category: "Application Process",
  },
  {
    question: "What is the interest rate on a Personal Loan?",
    answer:
      "Interest rates for Personal Loans vary based on factors like credit score, loan amount, and lender policies. Typically, they range from 10% to 24% per annum.",
    category: "Interest Rate & EMI",
  },
  {
    question: "What is the eligibility criteria for a Personal Loan?",
    answer:
      "Eligibility is determined by factors such as age, income, employment status, credit score, and financial stability.",
    category: "Eligibility",
  },
  {
    question: "Which bank offers the best Personal Loan rates?",
    answer:
      "The best bank depends on interest rates, loan tenure, processing fees, and customer service. It’s advisable to compare different lenders before applying.",
    category: "Application Process",
  },
  {
    question: "What is the minimum credit score required for a Personal Loan?",
    answer:
      "A credit score of 750 or above is usually preferred for easy approval and lower interest rates.",
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
        FAQs on Personal Loans
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
