import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const API_BASE = process.env.REACT_APP_API_URL || ""; // use CRA proxy in dev
import { FcGoogle } from "react-icons/fc";

const Section1 = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ————— Hit "/" on component load —————
  useEffect(() => {
    const pingRoot = async () => {
      try {
        const res = await fetch("http://localhost:5000/");
        const text = await res.text();
        console.log("Pinged root:", text);
      } catch (err) {
        console.error("Root ping failed:", err);
      }
    };
    pingRoot();
  }, []);

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
  };

  const sendOtp = async () => {
    // Persist phone for later steps and navigate immediately
    sessionStorage.setItem("loginPhone", phone);
    navigate("/customer-login");

    // Attempt OTP send in the background; failures won't block navigation
    try {
      const response = await fetch(`${API_BASE}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setOtpSent(true);
      } else {
        console.warn("OTP send failed:", data?.message || response.status);
      }
    } catch (error) {
      console.warn("OTP Request Failed:", error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch(
        `${API_BASE}/api/auth/verify-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, otp }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        alert("Login Successful!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("OTP Verification Failed:", error);
    }
  };

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isAuthenticated ? "Welcome Back!" : "Login to your account"}
        </h2>

        {!isAuthenticated ? (
          <>
         
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full border px-6 py-3 rounded-lg shadow-md hover:bg-gray-100"
            >
              <FcGoogle size={24} className="mr-2" />
              Continue with Google
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-500 text-sm">
                or continue with mobile number
              </span>
              <hr className="flex-grow border-gray-300" />
            </div>

            
            <div className="flex items-center border px-4 py-2 rounded-lg w-full">
              <span className="mr-2">🇮🇳 +91</span>
              <input 
                type="text"
                className="outline-none flex-1"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {!otpSent ? (
              <button
                onClick={sendOtp}
                className="bg-blue-600 text-white w-full py-3 rounded-lg mt-4 shadow-md hover:bg-blue-700"
              >
                Send OTP
              </button>
            ) : (
              <>
                <div className="flex items-center border px-4 py-2 rounded-lg w-full mt-4">
                  <input
                    type="text"
                    className="outline-none flex-1"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <button
                  onClick={verifyOtp}
                  className="bg-green-600 text-white w-full py-3 rounded-lg mt-4 shadow-md hover:bg-green-700"
                >
                  Verify OTP
                </button>
              </>
            )}
              
            <p className="text-xs text-gray-500 mt-4 text-center">
              By logging in, you agree to the following{" "}
              <a href="/" className="text-blue-600">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/" className="text-blue-600">
                Privacy Policy
              </a>
            </p>
            <div className="mt-2 flex justify-center space-x-4 text-xs">
              <a href="/" className="text-gray-500 hover:text-blue-600">
                Disclaimer
              </a>
              <a href="/" className="text-gray-500 hover:text-blue-600">
                Privacy Policy
              </a>
              <a href="/" className="text-gray-500 hover:text-blue-600">
                Terms of Use
              </a>
            </div>
          </>
        ) : (
          <p className="text-green-600 text-center">You are logged in!</p>
        )}
      </div>
    </div>
  );
};

export default Section1;
