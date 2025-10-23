// import React, { forwardRef } from "react";

// const Section3 = forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="min-h-screen flex flex-col justify-center items-center bg-white py-12"
//     >
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-blue-900 mb-4">Register Here</h2>

//       <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-3xl">
//         <form className="grid grid-cols-2 gap-4">
//           {/* First Name */}
//           <div>
//             <label className="block text-gray-700 font-semibold">
//               First Name
//             </label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-400 rounded-md"
//               placeholder="Enter first name"
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="block text-gray-700 font-semibold">
//               Last Name
//             </label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-400 rounded-md"
//               placeholder="Enter last name"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block text-gray-700 font-semibold">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               className="w-full p-2 border border-gray-400 rounded-md"
//               placeholder="Enter phone number"
//             />
//           </div>

//           {/* PAN */}
//           <div>
//             <label className="block text-gray-700 font-semibold">PAN</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-400 rounded-md"
//               placeholder="Enter PAN"
//             />
//           </div>

//           {/* DOB */}
//           <div>
//             <label className="block text-gray-700 font-semibold">DOB</label>
//             <input
//               type="date"
//               className="w-full p-2 border border-gray-400 rounded-md"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-semibold">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border border-gray-400 rounded-md"
//               placeholder="Enter email"
//             />
//           </div>

//           {/* Employment Type */}
//           <div>
//             <label className="block text-gray-700 font-semibold">
//               Profession
//             </label>
//             <select className="w-full p-2 border border-gray-400 rounded-md">
//               <option>Select</option>

//               <option>Salaried</option>
//               <option>Self-employed</option>
//             </select>
//           </div>

//           {/* Pincode */}
//           <div>
//             <label className="block text-gray-700 font-semibold">Pincode</label>
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-400 rounded-md"
//               placeholder="Enter pincode"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="col-span-2 flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-950 hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-md w-1/2"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// });

// export default Section3;
import React, { forwardRef, useState } from "react";

const Section3 = forwardRef((props, ref) => {
  const [profession, setProfession] = useState("");
  const [subProfession, setSubProfession] = useState("");
  const [customProfession, setCustomProfession] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pan, setPan] = useState("");
  const [errors, setErrors] = useState({});

  const salariedOptions = [
    "Software Engineer",
    "Doctor",
    "Teacher",
    "Banker",
    "Others",
  ];
  const selfEmployedOptions = [
    "Freelancer",
    "Business Owner",
    "Consultant",
    "Shop Owner",
    "Others",
  ];

  const validateForm = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
      newErrors.pan = "Enter a valid 10-character PAN (e.g., ABCDE1234F).";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-white py-12"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Register Here</h2>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-3xl">
        <form className="grid grid-cols-2 gap-4" onSubmit={validateForm}>
          {/* First Name */}
          <div>
            <label className="block text-gray-700 font-semibold">
              First Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter first name"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter last name"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>

          {/* PAN */}
          <div>
            <label className="block text-gray-700 font-semibold">PAN</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter PAN"
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              maxLength={10}
              required
            />
            {errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}
          </div>

          {/* DOB */}
          <div>
            <label className="block text-gray-700 font-semibold">DOB</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-400 rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Profession */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Profession
            </label>
            <select
              className="w-full p-2 border border-gray-400 rounded-md"
              value={profession}
              onChange={(e) => {
                setProfession(e.target.value);
                setSubProfession("");
                setCustomProfession("");
              }}
              required
            >
              <option value="">Select</option>
              <option value="Salaried">Salaried</option>
              <option value="Self-employed">Self-employed</option>
            </select>
          </div>

          {/* Sub-profession Dropdown */}
          {profession && (
            <div>
              <label className="block text-gray-700 font-semibold">
                Select Your Field
              </label>
              <select
                className="w-full p-2 border border-gray-400 rounded-md"
                value={subProfession}
                onChange={(e) => {
                  setSubProfession(e.target.value);
                  if (e.target.value !== "Others") {
                    setCustomProfession("");
                  }
                }}
                required
              >
                <option value="">Select</option>
                {profession === "Salaried" &&
                  salariedOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                {profession === "Self-employed" &&
                  selfEmployedOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
          )}

          {/* Custom Profession Input */}
          {subProfession === "Others" && (
            <div>
              <label className="block text-gray-700 font-semibold">
                Enter Your Profession
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded-md"
                placeholder="Type your profession"
                value={customProfession}
                onChange={(e) => setCustomProfession(e.target.value)}
                required
              />
            </div>
          )}

          {/* Pincode */}
          <div>
            <label className="block text-gray-700 font-semibold">Pincode</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md"
              placeholder="Enter pincode"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-950 hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-md w-1/2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Section3;
