import { useState } from "react";

const allTopicsFaqs = [
  {
    question: "What is a Home Loan?",
    answer:
      "A home loan is a secured loan provided by financial institutions to help individuals purchase, construct, or renovate a house.",
  },
  {
    question: "What documents are required for a home loan?",
    answer:
      "You need identity proof, address proof, income proof, property documents, and bank statements to apply for a home loan.",
  },
  {
    question: "How long does it take to get home loan approval?",
    answer:
      "Home loan approval usually takes 5-7 working days, depending on document verification and lender processing time.",
  },
  {
    question: "Can I prepay my home loan?",
    answer:
      "Yes, you can prepay your home loan partially or fully, but some banks may charge a prepayment penalty. Check with your lender for details.",
  },
];

const faqs = [
  {
    question: "How can I apply for a home loan?",
    answer:
      "You can apply for a home loan online or at a bank by submitting required documents and fulfilling eligibility criteria.",
    category: "Application Process",
  },
  {
    question: "What is the interest rate on a home loan?",
    answer:
      "Home loan interest rates vary based on factors such as credit score, loan tenure, and lender policies. It typically ranges between 7-10% per annum.",
    category: "Interest Rate & EMI",
  },
  {
    question: "What is the eligibility criteria for a home loan?",
    answer:
      "Eligibility is determined by factors such as age, income, credit score, employment type, and the property's value.",
    category: "Eligibility",
  },
  {
    question: "Which bank offers the best home loan rates?",
    answer:
      "The best bank depends on interest rates, processing fees, loan tenure, and customer service. Compare different lenders before applying.",
    category: "Application Process",
  },
  {
    question: "What is the minimum credit score required for a home loan?",
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

function Section2() {
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
        FAQs on Home Loans
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

export default Section2;
