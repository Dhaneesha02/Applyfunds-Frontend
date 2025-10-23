import { useState } from "react";

const allTopicsFaqs = [
  {
    question: "What is a Business Loan?",
    answer:
      "A business loan is a financial assistance provided by banks and NBFCs to help businesses meet working capital needs, expansion, and other operational expenses.",
  },
  {
    question: "What documents are required for a business loan?",
    answer:
      "You need identity proof, address proof, business registration documents, bank statements, and financial reports to apply for a business loan.",
  },
  {
    question: "How long does it take to get a business loan approved?",
    answer:
      "Approval time varies, but most lenders process business loans within 5-7 working days if all documents are in order.",
  },
  {
    question: "Can I prepay my business loan?",
    answer:
      "Yes, you can prepay your loan, but some lenders may charge a prepayment penalty. It is advisable to check with your lender for exact terms.",
  },
];

const faqs = [
  {
    question: "How can I apply for a business loan?",
    answer:
      "You can apply for a business loan online or at a bank by submitting necessary documents such as business registration, income proof, and credit history.",
    category: "Application Process",
  },
  {
    question: "What is the interest rate on a business loan?",
    answer:
      "Business loan interest rates vary based on factors such as credit score, loan amount, business turnover, and lender policies. Typically, they range from 8% to 20% per annum.",
    category: "Interest Rate & EMI",
  },
  {
    question: "What is the eligibility criteria for a business loan?",
    answer:
      "Eligibility is determined by factors such as business age, turnover, credit score, and financial stability.",
    category: "Eligibility",
  },
  {
    question: "Which bank offers the best business loan rates?",
    answer:
      "The best bank depends on interest rates, loan tenure, processing fees, and customer service. Compare different lenders before applying.",
    category: "Application Process",
  },
  {
    question: "What is the minimum credit score required for a business loan?",
    answer:
      "A credit score of 700 or above is usually preferred for easy approval and lower interest rates.",
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
        FAQs on Business Loans
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
