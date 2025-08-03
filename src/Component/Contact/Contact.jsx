import doubt from "../../Assets/doubt.jpg";
import React, { useEffect, useState } from "react";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      formData.phone.length !== 10 ||
      !formData.message
    ) {
      alert("Please fill out all details carefully");
      return;
    }
    console.log("form data => ", formData);
    setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-800 to-gray-950 py-12 px-6">
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-10 bg-gray-900/50 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10">
          <img
            src={doubt}
            alt="Contact Us"
            className="rounded-xl shadow-xl w-full h-auto max-h-[500px] object-cover border border-gray-700 transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 bg-gray-800/70 backdrop-blur-md p-8 lg:p-12 rounded-r-2xl lg:rounded-l-none rounded-b-2xl shadow-inner flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-white text-center mb-4 leading-tight">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-center mb-8 text-lg">
            Reach out to us for any inquiries or support. We're here to help!
          </p>

          <form className="space-y-6" onSubmit={submitHandler}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="John"
                  aria-label="First Name"
                />
                <User className="absolute right-3 top-1/2 mt-1 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              <div className="relative">
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Doe"
                  aria-label="Last Name"
                />
                <User className="absolute right-3 top-1/2 mt-1 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="john@example.com"
                aria-label="Email Address"
              />
              <Mail className="absolute right-3 top-1/2 mt-1 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone
              </label>
              <input
                type="tel" // Changed to tel for semantic correctness
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="98XXXXXXXX"
                aria-label="Phone Number"
                maxLength="10" // Added max length for phone number
              />
              <Phone className="absolute right-3 top-1/2 mt-1 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} // Increased rows for better initial view
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-y" // Allow vertical resizing
                placeholder="Your message here..."
                aria-label="Your Message"
              />
              <MessageSquare className="absolute right-3 top-4 w-5 h-5 text-gray-400" />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg font-semibold text-xl tracking-wide hover:from-blue-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-400 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
