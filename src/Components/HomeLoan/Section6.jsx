import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Section6 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-6 md:px-14 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between shadow-md h-auto md:h-36 gap-6 text-center md:text-left">
      {/* Trusted Platform */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
        <MdVerified className="text-green-500 text-5xl" />
        <div>
          <p className="text-gray-700 text-lg">We are India’s</p>
          <p className="font-bold text-xl">Most Trusted Platform</p>
        </div>
      </div>

      {/* Rating */}
      <div className="w-full md:w-auto">
        <p className="text-3xl font-bold">
          4.2<span className="text-gray-500 text-lg">/5</span>
        </p>
        <div className="flex justify-center text-yellow-500 text-xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>

      {/* Satisfied Customers */}
      <div className="w-full md:w-auto">
        <p className="text-3xl font-bold">45M+</p>
        <p className="text-gray-500 text-lg">Satisfied Customers</p>
      </div>

      {/* Lending Partners */}
      <div className="w-full md:w-auto">
        <p className="text-3xl font-bold">65+</p>
        <p className="text-gray-500 text-lg">Lending Partners</p>
      </div>

      {/* Cities Covered */}
      <div className="w-full md:w-auto">
        <p className="text-3xl font-bold">800+</p>
        <p className="text-gray-500 text-lg">Cities across India</p>
      </div>
    </div>
  );
};

export default Section6;
