import React from "react";

const Section13 = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 via-blue-50 to-white py-10 px-5 md:px-20 lg:px-40">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold text-blue-800 mb-8">
        <span className="text-green-600">Home loan</span> Interest Rate
      </h1>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg text-left border-separate border-spacing-0 border border-gray-500">
          <thead>
            <tr className="bg-green-50">
              <th className="px-6 py-4 font-semibold text-black border-r border-b border-gray-500 rounded-tl-lg">
                Bureau Score
              </th>
              <th className="px-6 py-4 font-semibold text-black border-r border-b border-gray-500">
                Self-employed
              </th>
              <th className="px-6 py-4 font-semibold text-black border-b border-gray-500 rounded-tr-lg">
                Salaried
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-green-50 transition-colors duration-200">
              <td className="px-6 py-4 text-black border-r border-gray-500">
                751 and above
              </td>
              <td className="px-6 py-4 text-black border-r border-gray-500">
                9.10% p.a
              </td>
              <td className="px-6 py-4 text-black border-gray-500">8.75% p.a</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Section13;