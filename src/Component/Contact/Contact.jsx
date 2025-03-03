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
    if (!formData.firstname || !formData.lastname || !formData.email || formData.phone.length !== 10 || !formData.message) {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="hidden lg:block relative">
          <img src={doubt} alt="Contact" className="rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 w-full h-[450px] object-cover" />
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-xl shadow-lg w-full">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-center mb-6">We are here to help! Fill in the form below and we will get back to you.</p>

          <form className="space-y-4" onSubmit={submitHandler}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <label className="text-sm text-gray-400">First Name</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John" />
                <User className="absolute right-3 top-9 w-5 h-5 text-gray-400" />
              </div>

              <div className="relative">
                <label className="text-sm text-gray-400">Last Name</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Doe" />
                <User className="absolute right-3 top-9 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="relative">
              <label className="text-sm text-gray-400">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@example.com" />
              <Mail className="absolute right-3 top-9 w-5 h-5 text-gray-400" />
            </div>

            <div className="relative">
              <label className="text-sm text-gray-400">Phone</label>
              <input type="number" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="98XXXXXXXX" />
              <Phone className="absolute right-3 top-9 w-5 h-5 text-gray-400" />
            </div>

            <div className="relative">
              <label className="text-sm text-gray-400">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" placeholder="Your message here..." />
              <MessageSquare className="absolute right-3 top-9 w-5 h-5 text-gray-400" />
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

