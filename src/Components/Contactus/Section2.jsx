import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Section2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //  const response = await fetch("http://%PUBLIC_URL%/api/email/send", {
      const response = await fetch("http://localhost:5000/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="text-left mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                Ask for your query
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Phone className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Call Anytime
                </h4>
                <p className="text-gray-600">+91 9894978394 </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Mail className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Write Email
                </h4>
                <p className="text-gray-600">info@oneassist.net</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <MapPin className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Visit Office
                </h4>
                <p className="text-gray-600">
                  553 NVN Layout, Tatabad, Gandhipuram, Tamil Nadu-641012
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="p-3 border rounded-md w-full"
                  required
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="p-3 border rounded-md w-full"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="homeloan">Home Loan</option>
                  <option value="personalloan">Personal Loan</option>
                  <option value="vehicleloan">Vehicle Loan</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message"
                className="w-full p-3 border rounded-md mt-4 h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send A Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
