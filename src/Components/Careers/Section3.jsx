import React from "react";
import graduates from "../images/graduates.jpg";
import students from "../images/students.jpg";

export default function Section3() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-2">
          Explore Opportunities
        </h1>
      </div>

      {/* Grid Items */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Students */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-1">
          <img
            src={students}
            alt="Students"
            className="object-cover w-full h-64"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-2">Students</h3>
            <p className="text-sm text-gray-200">
              Our internships, working student and rotational programs offer
              students opportunities to work on real projects that make a big
              impact on our business.
            </p>
          </div>
        </div>

        {/* Graduates */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-1">
          <img
            src={graduates}
            alt="Graduates"
            className="object-cover w-full h-64"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-2">Graduates</h3>
            <p className="text-sm text-gray-200">
              Take the first step of your professional career by exploring
              graduate programs or applying for entry-level roles in sales,
              consulting, development, and more.
            </p>
          </div>
        </div>

        {/* Professionals */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-1">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Professionals"
            className="object-cover w-full h-64"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-white mb-2">Professionals</h3>
            <p className="text-sm text-gray-200">
              Use your ideas, experience, and ambition to unlock financial
              possibilities. Explore opportunities to grow, invest, and achieve
              more with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
