import React, { useState } from 'react';

import axios from 'axios';
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';

import bgimg from '../images/bgimg.png';
import plogo1 from '../images/plogo1.png';
import plogo2 from '../images/plogo2.png';
import plogo3 from '../images/plogo3.png';

export default function Section2({ section3Ref }) {
  const [mode, setMode] = useState("partner"); // "partner" or "customer"
  const [step, setStep] = useState("login"); // "login" or "signup"

  // Partner states
  const [partnerLogin, setPartnerLogin] = useState({ username: "", password: "" });
  const [partnerSignup, setPartnerSignup] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  // Customer states
  const [customerLogin, setCustomerLogin] = useState({ username: "", password: "" });
  const [customerSignup, setCustomerSignup] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const inputStyle =
    "border border-gray-300 px-3 py-2 rounded-md w-72 focus:ring-2 focus:ring-green-700";

  // Partner Handlers
  // const handlePartnerLogin = async () => {
  //   const { username, password } = partnerLogin;
  //   if (!username || !password) {
  //     alert("Please fill all fields");
  //     return;
  //   }
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/partner/login", { username, password });
  //     alert(res.data.message);
  //   } catch (err) {
  //     alert(err.response?.data?.message || "Login failed");
  //   }
  // };

  const handlePartnerLogin = async (e) => {
  e.preventDefault();

  if (!partnerLogin.username || !partnerLogin.password) {
    alert("Please enter username and password");
    return;
  }

  try {
    const res = await axios.post("http://localhost:5000/api/partners/login", {
      username: partnerLogin.username,
      password: partnerLogin.password,
    });

    if (res.data.message === "Login successful") {
      alert("Login successful!");
      setTimeout(() => {
        window.open("https://oneassist.net.in/crmconnect/#", "_blank");
      }, 300);
    } else {
      alert("Invalid credentials");
    }
  } catch (err) {
    console.error("Login failed:", err);
    alert("Server error");
  }
};


  //partner login for signup

  const handlePartnerSignup = async (e) => {
  e.preventDefault(); // prevent page reload

  const { name, username, password, confirmPassword } = partnerSignup;

  // Validation
  if (!name || !username || !password || !confirmPassword) {
    alert("Please fill all required fields (*)");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // <-- Axios POST request to backend API
    const res = await axios.post("http://localhost:5000/api/partner/signup", {
      name,
      username,
      password,
    });

    // Success message
    alert(res.data.message);
    setStep("login"); // move to login page
  } catch (err) {
    alert(err.response?.data?.message || "Signup failed");
  }
};


  // Customer Handlers
  const handleCustomerLogin = () => {
    const { username, password } = customerLogin;
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }
    alert("Customer login successful!");
  };

  //customer signup 

  const handleCustomerSignup = async (e) => {
  e.preventDefault();
  const { name, username, password, confirmPassword } = customerSignup;

  // Validation
  if (!name || !username || !password || !confirmPassword) {
    alert("Please fill all required fields (*)");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // Send only name, username, and password to backend
    const res = await axios.post("http://localhost:5000/api/customers/signup", {
      name,
      username,
      password
    });

    alert(res.data.message);  // Success message
    setStep("login");         // Move to login page
  } catch (err) {
    alert(err.response?.data?.message || "Signup failed");
  }
};

  return (
    <div className="relative text-black py-16 px-4 text-center">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>

      {/* Section Title */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white">Our Partners</h1>
      </div>

      {/* Partner Cards */}
      <div className="relative z-10 max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {[{ title: "Submit the details of your customers", icon: plogo1 },
            { title: "Apply for pre-approved offers with consent", icon: plogo2 },
            { title: "Get paid per subscription and loan disbursal", icon: plogo3 }].map((item, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center gap-4 w-80">
              <img src={item.icon} alt="Logo" className="w-12 h-12" />
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Login/Signup */}

      <div className="relative z-10 mt-16 flex flex-col items-center">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-3xl p-8">
          {/* Toggle */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-6 py-2 rounded-md font-semibold ${mode === "partner" ? "bg-[#15803D] text-white" : "border border-[#15803D] text-[#15803D]"}`}
              onClick={() => { setMode("partner"); setStep("login"); }}
            >
              Already a Partner?
            </button>
            <button
              className={`px-6 py-2 rounded-md font-semibold ${mode === "customer" ? "bg-[#15803D] text-white" : "border border-[#15803D] text-[#15803D]"}`}
              onClick={() => { setMode("customer"); setStep("login"); }}
            >
              Are you a Customer?
            </button>
          </div>

          {/* Partner */}
          
          {mode === "partner" && (
            <div className="border-t-4 border-[#15803D] rounded-lg p-6 bg-green-50">
              {step === "login" ? (
                <div className="text-center flex flex-col items-center gap-4">
                  <h2 className="text-xl font-bold text-[#15803D] mb-2">Partner Login</h2>
                  <input type="text" placeholder="Username" value={partnerLogin.username} onChange={(e) => setPartnerLogin({ ...partnerLogin, username: e.target.value })} className={inputStyle} />
                  <input type="password" placeholder="Password" value={partnerLogin.password} onChange={(e) => setPartnerLogin({ ...partnerLogin, password: e.target.value })} className={inputStyle} />
                  <button onClick={handlePartnerLogin} className="bg-[#15803D] text-white px-5 py-2 rounded-md hover:bg-green-700 w-72">Login</button>
                  <p className="text-gray-500 text-sm">(Or)</p>
                  <button onClick={() => setStep("signup")} className="border border-[#15803D] text-[#15803D] px-5 py-2 rounded-md hover:bg-green-100 w-72">Signup</button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSignup} className="text-center flex flex-col items-center gap-4">
                  <h2 className="text-2xl font-semibold text-[#15803D]">Partner Signup</h2>
                  <input type="text" placeholder="Name *" value={partnerSignup.name} onChange={(e) => setPartnerSignup({ ...partnerSignup, name: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Username *" value={partnerSignup.username} onChange={(e) => setPartnerSignup({ ...partnerSignup, username: e.target.value })} className={inputStyle} />
                  <input type="email" placeholder="Email *" value={partnerSignup.email} onChange={(e) => setPartnerSignup({ ...partnerSignup, email: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Phone Number *" value={partnerSignup.phone} onChange={(e) => setPartnerSignup({ ...partnerSignup, phone: e.target.value })} className={inputStyle} />

                  {/* Password */}
                  <div className="relative w-72">
                    <input
                      type={partnerSignup.showPassword ? "text" : "password"}
                      placeholder="Create Password *"
                      value={partnerSignup.password}
                      onChange={(e) => setPartnerSignup({ ...partnerSignup, password: e.target.value })}
                      className={`${inputStyle} pr-10`}
                    />
                    <span
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                      onClick={() => setPartnerSignup({ ...partnerSignup, showPassword: !partnerSignup.showPassword })}
                    >
                      {partnerSignup.showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </span>
                  </div>
                  <div className="relative w-72">
                    <input
                      type={partnerSignup.showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password *"
                      value={partnerSignup.confirmPassword}
                      onChange={(e) => setPartnerSignup({ ...partnerSignup, confirmPassword: e.target.value })}
                      className={`${inputStyle} pr-10`}
                    />
                    <span
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                      onClick={() => setPartnerSignup({ ...partnerSignup, showConfirmPassword: !partnerSignup.showConfirmPassword })}
                    >
                      {partnerSignup.showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </span>
                  </div>

                  <button type="submit" className="bg-[#15803D] text-white px-5 py-2 rounded-md hover:bg-green-700 w-72 mt-4">Register</button>
                  <button type="button" onClick={() => setStep("login")} className="text-gray-500 hover:text-[#15803D] mt-2">Back to Login</button>
                </form>
              )}
            </div>
          )}

          {/* Customer */}
          {mode === "customer" && (
            <div className="border-t-4 border-[#15803D] rounded-lg p-6 bg-green-50">
              {step === "login" ? (
                <div className="text-center flex flex-col items-center gap-4">
                  <h2 className="text-xl font-bold text-[#15803D] mb-2">Customer Login</h2>
                  <input type="text" placeholder="Username" value={customerLogin.username} onChange={(e) => setCustomerLogin({ ...customerLogin, username: e.target.value })} className={inputStyle} />
                  <input type="password" placeholder="Password" value={customerLogin.password} onChange={(e) => setCustomerLogin({ ...customerLogin, password: e.target.value })} className={inputStyle} />
                  <button onClick={handleCustomerLogin} className="bg-[#15803D] text-white px-5 py-2 rounded-md hover:bg-green-700 w-72">Login</button>
                  <p className="text-gray-500 text-sm">(Or)</p>
                  <button onClick={() => setStep("signup")} className="border border-[#15803D] text-[#15803D] px-5 py-2 rounded-md hover:bg-green-100 w-72">Signup</button>
                </div>
              ) : (
                <form onSubmit={handleCustomerSignup} className="text-center flex flex-col items-center gap-4">
                  <h2 className="text-2xl font-semibold text-[#15803D]">Customer Signup</h2>
                  <input type="text" placeholder="Name *" value={customerSignup.name} onChange={(e) => setCustomerSignup({ ...customerSignup, name: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Username *" value={customerSignup.username} onChange={(e) => setCustomerSignup({ ...customerSignup, username: e.target.value })} className={inputStyle} />
                  <input type="email" placeholder="Email *" value={customerSignup.email} onChange={(e) => setCustomerSignup({ ...customerSignup, email: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Phone Number *" value={customerSignup.phone} onChange={(e) => setCustomerSignup({ ...customerSignup, phone: e.target.value })} className={inputStyle} />
                  <input type="date" placeholder="DOB *" value={customerSignup.dob} onChange={(e) => setCustomerSignup({ ...customerSignup, dob: e.target.value })} className={inputStyle} />
                  {/* Gender */}
<div className="flex flex-col w-72 items-start gap-2">
  <span className="font-semibold text-gray-700">Gender *</span>
  <div className="flex gap-4 justify-start items-center">
    <label className="flex items-center gap-1">
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={customerSignup.gender === "Male"}
        onChange={(e) => setCustomerSignup({ ...customerSignup, gender: e.target.value })}
        className="accent-green-700"
      />
      Male
    </label>
    <label className="flex items-center gap-1">
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={customerSignup.gender === "Female"}
        onChange={(e) => setCustomerSignup({ ...customerSignup, gender: e.target.value })}
        className="accent-green-700"
      />
      Female
    </label>
    <label className="flex items-center gap-1">
      <input
        type="radio"
        name="gender"
        value="Other"
        checked={customerSignup.gender === "Other"}
        onChange={(e) => setCustomerSignup({ ...customerSignup, gender: e.target.value })}
        className="accent-green-700"
      />
      Other
    </label>
  </div>
</div>

                  {/* Password */}
                  <div className="relative w-72">
                    <input
                      type={customerSignup.showPassword ? "text" : "password"}
                      placeholder="Create Password *"
                      value={customerSignup.password}
                      onChange={(e) => setCustomerSignup({ ...customerSignup, password: e.target.value })}
                      className={`${inputStyle} pr-10`}
                    />
                    <span
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                      onClick={() => setCustomerSignup({ ...customerSignup, showPassword: !customerSignup.showPassword })}
                    >
                      {customerSignup.showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </span>
                  </div>
                  <div className="relative w-72">
                    <input
                      type={customerSignup.showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password *"
                      value={customerSignup.confirmPassword}
                      onChange={(e) => setCustomerSignup({ ...customerSignup, confirmPassword: e.target.value })}
                      className={`${inputStyle} pr-10`}
                    />
                    <span
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                      onClick={() => setCustomerSignup({ ...customerSignup, showConfirmPassword: !customerSignup.showConfirmPassword })}
                    >
                      {customerSignup.showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </span>
                  </div>

                  <button type="submit" className="bg-[#15803D] text-white px-5 py-2 rounded-md hover:bg-green-700 w-72 mt-4">Register</button>
                  <button type="button" onClick={() => setStep("login")} className="text-gray-500 hover:text-[#15803D] mt-2">Back to Login</button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
