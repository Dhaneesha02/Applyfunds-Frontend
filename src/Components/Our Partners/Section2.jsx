import React, { useState } from 'react';

import axios from 'axios';

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
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    pan: "",
    dob: "",
    profession: "",
    pincode: "",
  });

  // Customer states
  const [customerLogin, setCustomerLogin] = useState({ username: "", password: "" });
  const [customerSignup, setCustomerSignup] = useState({
    firstname: "",
    lastname: "",
    contactNumber: "",
    email: "",
    location: "",
    dob: "",
    contactSource: "",
    referenceName: "", // optional
  });

  const inputStyle = "border border-gray-300 px-3 py-2 rounded-md w-72 focus:ring-2 focus:ring-green-700";

  // Partner Login
  const handlePartnerLogin = async (e) => {
    e.preventDefault();
    if (!partnerLogin.username || !partnerLogin.password) {
      alert("Please enter username and password");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/partners/login", partnerLogin);
      if (res.data.message === "Login successful") {
        alert("Login successful!");
        setTimeout(() => window.location.href = "https://oneassist.net.in/crmconnect/#", 300);
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Server error");
    }
  };

  // Partner Signup
  const handlePartnerSignup = async (e) => {
    e.preventDefault();
    const { firstname, lastname, phone, email, pan, dob, profession, pincode } = partnerSignup;
    if (!firstname || !lastname || !phone || !email || !pan || !dob || !profession || !pincode) {
      alert("Please fill all required fields (*)");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/partners/signup", partnerSignup);
      if (res.status === 201) {
        alert("Partner registered successfully!");
        setStep("login");
        setPartnerSignup({
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          pan: "",
          dob: "",
          profession: "",
          pincode: "",
        });
      }
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err.message);
      alert("Signup failed: " + (err.response?.data?.message || "Server error"));
    }
  };

  // Customer Login
  // const handleCustomerLogin = () => {
  //   const { username, password } = customerLogin;
  //   if (!username || !password) {
  //     alert("Please fill all fields");
  //     return;
  //   }
  //   alert("Customer login successful!");
  // };

  // Customer Login
const handleCustomerLogin = async (e) => {
  e.preventDefault();
  if (!customerLogin.username || !customerLogin.password) {
    alert("Please enter username and password");
    return;
  }

  try {
    const res = await axios.post("http://localhost:5000/api/customers/login", customerLogin);

    if (res.data.message === "Login successful") {
      alert("Login successful!");
      // Navigate to dashboard after a short delay
      setTimeout(() => {
        window.location.href = "http://localhost:4200/dashboard";
      }, 300);
    } else {
      alert("Invalid credentials");
    }
  } catch (err) {
    console.error("Login failed:", err);
    alert("Server error");
  }
};


  // Customer Signup
  const handleCustomerSignup = async (e) => {
    e.preventDefault();
    const { firstname, lastname, contactNumber, email, location, dob, contactSource } = customerSignup;

    // Only required fields validation (referenceName is optional)
    if (!firstname || !lastname || !contactNumber || !email || !location || !dob || !contactSource) {
      alert("Please fill all required fields (*)");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/customers/signup", customerSignup);

      if (res.status === 201) {
        alert("Customer registered successfully!");
        setStep("login");
        setCustomerSignup({
          firstname: "",
          lastname: "",
          contactNumber: "",
          email: "",
          location: "",
          dob: "",
          contactSource: "",
          referenceName: "",
        });
      }
    } catch (err) {
      // console.error("Customer signup failed:", err.response?.data || err.message);
      // alert("Signup failed: " + (err.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="relative text-black py-16 px-4 text-center">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white">Our Partners</h1>
      </div>

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

      <div className="relative z-10 mt-16 flex flex-col items-center">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-3xl p-8">
          <div className="flex justify-center gap-4 mb-6">
            <button className={`px-6 py-2 rounded-md font-semibold ${mode === "partner" ? "bg-[#15803D] text-white" : "border border-[#15803D] text-[#15803D]"}`} onClick={() => { setMode("partner"); setStep("login"); }}>Already a Partner?</button>
            <button className={`px-6 py-2 rounded-md font-semibold ${mode === "customer" ? "bg-[#15803D] text-white" : "border border-[#15803D] text-[#15803D]"}`} onClick={() => { setMode("customer"); setStep("login"); }}>Are you a Customer?</button>
          </div>

          {mode === "partner" && (
            <div className="border-t-4 border-[#15803D] rounded-lg p-6 bg-green-50">
              {step === "login" ? (
                <div className="text-center flex flex-col items-center gap-4">
                  <h2 className="text-xl font-bold text-[#15803D] mb-2">Partner Login</h2>
                  <input type="text" placeholder="Username" value={partnerLogin.username} onChange={e => setPartnerLogin({ ...partnerLogin, username: e.target.value })} className={inputStyle} />
                  <input type="password" placeholder="Password" value={partnerLogin.password} onChange={e => setPartnerLogin({ ...partnerLogin, password: e.target.value })} className={inputStyle} />
                  <button onClick={handlePartnerLogin} className="bg-[#15803D] text-white px-5 py-2 rounded-md hover:bg-green-700 w-72">Login</button>
                  <p className="text-gray-500 text-sm">(Or)</p>
                  <button onClick={() => setStep("signup")} className="border border-[#15803D] text-[#15803D] px-5 py-2 rounded-md hover:bg-green-100 w-72">Signup</button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSignup} className="text-center flex flex-col items-center gap-4">
                  <h2 className="text-2xl font-semibold text-[#15803D]">Partner Signup</h2>
                  <input type="text" placeholder="First Name *" value={partnerSignup.firstname} onChange={e => setPartnerSignup({ ...partnerSignup, firstname: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Last Name *" value={partnerSignup.lastname} onChange={e => setPartnerSignup({ ...partnerSignup, lastname: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Phone *" value={partnerSignup.phone} onChange={e => setPartnerSignup({ ...partnerSignup, phone: e.target.value })} className={inputStyle} />
                  <input type="email" placeholder="Email *" value={partnerSignup.email} onChange={e => setPartnerSignup({ ...partnerSignup, email: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="PAN *" value={partnerSignup.pan} onChange={e => setPartnerSignup({ ...partnerSignup, pan: e.target.value })} className={inputStyle} />
                  <label className="text-left w-72 text-gray-700 text-sm">Date of Birth *</label>
                  <input type="date" value={partnerSignup.dob} onChange={e => setPartnerSignup({ ...partnerSignup, dob: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Profession *" value={partnerSignup.profession} onChange={e => setPartnerSignup({ ...partnerSignup, profession: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Pincode *" value={partnerSignup.pincode} onChange={e => setPartnerSignup({ ...partnerSignup, pincode: e.target.value })} className={inputStyle} />
                  <button type="submit" className="bg-[#15803D] text-white px-5 py-2 rounded-md hover:bg-green-700 w-72 mt-4">Register</button>
                  <button type="button" onClick={() => setStep("login")} className="text-gray-500 hover:text-[#15803D] mt-2">Back to Login</button>
                </form>
              )}
            </div>
          )}

          {mode === "customer" && (
            <div className="border-t-4 border-[#15803D] rounded-lg p-6 bg-green-50">
              {step === "login" ? (
                <div className="text-center flex flex-col items-center gap-4">
                  <h2 className="text-xl font-bold text-[#15803D] mb-2">Customer Login</h2>
                  <input type="text" placeholder="Username" value={customerLogin.username} onChange={e => setCustomerLogin({ ...customerLogin, username: e.target.value })} className={inputStyle} />
                  <input type="password" placeholder="Password" value={customerLogin.password} onChange={e => setCustomerLogin({ ...customerLogin, password: e.target.value })} className={inputStyle} />
                  <button onClick={handleCustomerLogin} className="bg-[#15803D] text-white px-5 py-2 rounded-md hover:bg-green-700 w-72">Login</button>
                  <p className="text-gray-500 text-sm">(Or)</p>
                  <button onClick={() => setStep("signup")} className="border border-[#15803D] text-[#15803D] px-5 py-2 rounded-md hover:bg-green-100 w-72">Signup</button>
                </div>
              ) : (
                <form onSubmit={handleCustomerSignup} className="text-center flex flex-col items-center gap-4">
                  <h2 className="text-2xl font-semibold text-[#15803D]">Customer Signup</h2>
                  <input type="text" placeholder="First Name *" value={customerSignup.firstname} onChange={e => setCustomerSignup({ ...customerSignup, firstname: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Last Name *" value={customerSignup.lastname} onChange={e => setCustomerSignup({ ...customerSignup, lastname: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Contact Number *" value={customerSignup.contactNumber} onChange={e => setCustomerSignup({ ...customerSignup, contactNumber: e.target.value })} className={inputStyle} />
                  <input type="email" placeholder="Email *" value={customerSignup.email} onChange={e => setCustomerSignup({ ...customerSignup, email: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Location *" value={customerSignup.location} onChange={e => setCustomerSignup({ ...customerSignup, location: e.target.value })} className={inputStyle} />
                  <label className="text-left w-72 text-gray-700 text-sm">Date of Birth (DOB) *</label>
                  <input type="date" value={customerSignup.dob} onChange={e => setCustomerSignup({ ...customerSignup, dob: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Contact Source *" value={customerSignup.contactSource} onChange={e => setCustomerSignup({ ...customerSignup, contactSource: e.target.value })} className={inputStyle} />
                  <input type="text" placeholder="Reference Name (Optional)" value={customerSignup.referenceName} onChange={e => setCustomerSignup({ ...customerSignup, referenceName: e.target.value })} className={inputStyle} />
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
