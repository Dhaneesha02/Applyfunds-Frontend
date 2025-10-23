import React, { useState } from "react";

const Section5 = () => {
  const [showJobs, setShowJobs] = useState(false);

  const jobList = [
    {
      title: "Telecaller - Loan Process (Fresher)",
      description:
        "Assist clients in the loan application process. Strong communication skills required.",
    },
    {
      title: "Telecaller - Loan Process (Experienced)",
      description:
        "Minimum 1 year of experience in loan or credit calling. Target-driven approach preferred.",
    },
    {
      title: "Team Lead - Telecalling",
      description:
        "Manage a team of telecallers. Should have leadership and reporting experience.",
    },
    {
      title: "Full Stack Developer - Fresher",
      description:
        "Knowledge of MERN or MEAN stack. Must have basic project experience or internships.",
    },
    {
      title: "Full Stack Developer - Experienced",
      description:
        "Proficient in MERN or MEAN stack with 1-3 years of experience. Strong debugging skills required.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-green-100 to-blue-100 text-black text-center py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        See what opportunities await you
      </h2>
      <button
        onClick={() => setShowJobs(!showJobs)}
        className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition"
      >
        Our latest vacancies
      </button>

      {showJobs && (
        <div className="mt-10 space-y-6 max-w-3xl mx-auto text-left">
          {jobList.map((job, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md text-black"
            >
              <h3 className="text-xl font-bold mb-1">{job.title}</h3>
              <p className="text-sm">{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Section5;
