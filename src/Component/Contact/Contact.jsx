import doubt from "../../Assets/doubt.jpg";
import React, { useEffect, useState } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

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
            [name]: value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!formData.firstname || !formData.lastname || !formData.email || formData.phone.length !== 10 || !formData.message) {
            alert("Please fill out all details carefully");
            return;
        }
        console.log("form data => ", formData);
        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className="min-h-screen relative bg-gradient-to-br from-indigo-900/40 via-gray-800 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        Have a Question?
                    </h1>
                    <p className="text-gray-400 text-lg">We're here to help and answer any question you might have</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-12 items-center">
                    <div className="sm:space-y-8">
                        <div className="relative hidden sm:block">
                            <img
                                src={doubt}
                                alt="Contact"
                                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 rounded-2xl"></div>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="sm:bg-gray-800/30 backdrop-blur-sm rounded-2xl sm:p-8 shadow-2xl">
                        <form className="space-y-6" onSubmit={submitHandler}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="relative group">
                                    <label className="text-sm text-gray-400 mb-1 block">First Name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="John"
                                    />
                                    <User className="absolute right-3 top-9 w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                                </div>

                                <div className="relative group">
                                    <label className="text-sm text-gray-400 mb-1 block">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                        placeholder="Doe"
                                    />
                                    <User className="absolute right-3 top-9 w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                                </div>
                            </div>

                            <div className="relative group">
                                <label className="text-sm text-gray-400 mb-1 block">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    placeholder="john@example.com"
                                />
                                <Mail className="absolute right-3 top-9 w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                            </div>

                            <div className="relative group">
                                <label className="text-sm text-gray-400 mb-1 block">Phone</label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    placeholder="98XXXXXXXX"
                                />
                                <Phone className="absolute right-3 top-9 w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                            </div>

                            <div className="relative group">
                                <label className="text-sm text-gray-400 mb-1 block">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                                    placeholder="Your message here..."
                                />
                                <MessageSquare className="absolute right-3 top-9 w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact