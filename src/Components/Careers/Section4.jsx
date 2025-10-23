import React from "react";

const steps = [
  {
    number: 1,
    title: "Preparation",
    subtitle: "Get to know us better",
    content: [
      "Learn if Apply Funds is the right fit for you. Read about our company, job areas, and how we innovate. Follow Apply Funds on Facebook, Instagram, LinkedIn, Glassdoor, and check out what our employees are saying.",
      "Set up your Apply Funds profile and job alerts",
     "Create your profile and apply — when a job matches, we’ll reach out to you!"
    ],
  },
  {
    number: 2,
    title: "Application",
    subtitle: "Tailor your CV",
    content: [
      "Study the requirements in the job description and tailor your CV accordingly. In crisp bullet points, highlight your past responsibilities, skills, and accomplishments. You may include school or personal projects that demonstrate relevant skills and knowledge.",
      "Cover letters",
      "Including a cover letter in your application is optional. If you write one, tailor it to the role and share why you're interested."
    ],
  },
  {
    number: 3,
    title: "Interviews & Assessments",
    subtitle: "Screening",
    content: [
      "If there’s a match, our recruiters will contact you about the opportunity. After reviewing your profile with the hiring manager, we will inform you if you will be moving forward in the hiring process.",
      "Assessments",
      "To provide more insight into your skills and capabilities, some positions may invite you to complete an online or in-person assessment."
    ],
  },
  {
    number: 4,
    title: "Offer",
    subtitle: "Welcome to Apply Funds",
    content: [
      "If you received an offer, congratulations! Your recruiter will work with you on all the details, including your contract and start date.",
      "Unsuccessful? Don’t give up!",
      "If you didn’t get the job this time, try again! Many of our candidates are reconsidered for other opportunities at Apply Funds. We encourage you to further your skills and keep applying."
    ],
  },
];

export default function Section4() {
  return (
    <section className="bg-white px-6 py-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-2">
        4 steps to your career at Apply Funds
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col space-y-3">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 text-black rounded-full text-xl font-semibold">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <h4 className="text-blue-950 font-medium">{step.subtitle}</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              {step.content.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
