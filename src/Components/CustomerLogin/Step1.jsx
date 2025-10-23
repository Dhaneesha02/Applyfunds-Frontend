import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Step1() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [pincode, setPincode] = useState("");

  const handleProceed = (e) => {
    e.preventDefault();
    if (!fullName || !gender || !email || !dob || !pincode) return;
    const payload = { fullName, gender, email, dob, pincode };
    sessionStorage.setItem("customerLoginCompleted", JSON.stringify(payload));
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Customer Login</h2>
        <form onSubmit={handleProceed} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Gender</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Pincode</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="e.g. 560001"
              pattern="^[0-9]{6}$"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-lg mt-2 shadow-md hover:bg-blue-700"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}


