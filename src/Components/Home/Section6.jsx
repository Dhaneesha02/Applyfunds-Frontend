import React, { forwardRef, useState } from "react";
import female from "../images/female.png";
import male from "../images/male.png";

const Section6 = forwardRef((props, ref) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const testimonials = [
    {
      id: 1,
      text: "Good loan service providers ,Mr Srikanth was guiding me for best bank to get the personal loan with 10.75 ROI ,With in 2 days I got the loan amount , And his response is superb.",
      name: "Om Prakash",
      role: "Muthoot Finance",
      image: male,
    },
    {
      id: 2,
      text: "The loan was approved instantly, and the amount was credited within a day. However, the processing fee was high, and there were a few hidden charges.",
      name: "Udhaya Lakshmi",
      role: "HR",
      image: female,
    },
    {
      id: 3,
      text: "Lingesh give us good guidance and make things more easier to pass loans asap..happy with service",
      name: "Dinesh Kannan",
      role: "Software Engineer",
      image: male,
    },
    {
      id: 4,
      text: "The home loan came with low-interest rates and flexible repayment options. The approval process took longer due to extensive paperwork. However, once approved, the loan disbursement was seamless.",
      name: "Anitha M",
      role: "Product Manager",
      image: male,
    },
    {
      id: 5,
      text: "The loan amount was sufficient for my business expansion at a fair interest rate. The approval process was slow due to heavy documentation. Once approved, the funds were quickly disbursed.",
      name: "Ramesh P",
      role: "Business Analyst",
      image: male,
    },
    {
      id: 6,
      text: "The loan approval was quick with minimal documentation requirements. The interest rate was fair, but pre-closure charges were slightly high. Customer service was responsive, making the experience pleasant.",
      name: "Akash T",
      role: "Marketing Specialist",
      image: female,
    },
  ];

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleViewLess = () => {
    setVisibleCount(3);
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20" ref={ref}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">
            Our Happy Clients Say About Us
          </h3>
        </div>

        <div className="relative mt-10 md:mt-24">
          <div className="grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
            {testimonials.slice(0, visibleCount).map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col overflow-hidden shadow-xl"
              >
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900">
                        {testimonial.text}
                      </p>
                    </blockquote>
                  </div>
                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="mt-0.5 text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {visibleCount < testimonials.length ? (
              <button
                className="px-6 py-3 text-white bg-blue-900 rounded-lg hover:bg-blue-700"
                onClick={handleViewMore}
              >
                View More
              </button>
            ) : (
              <button
                className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-500"
                onClick={handleViewLess}
              >
                View Less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section6;
