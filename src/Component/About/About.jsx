import React from 'react';
import image1 from "../../Assets/aboutImage1.jpg";
import image2 from "../../Assets/aboutImage2.jpg";
import image3 from "../../Assets/aboutImage3.jpg";
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className='relative flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-6 sm:px-12 lg:px-20 overflow-hidden'>
            {/* Background Gradient Bubbles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-700/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-700/30 rounded-full blur-3xl animate-pulse"></div>
            </div>
            
            {/* Title and Description */}
            <h1 className='text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 text-center'>
                About Us
            </h1>
            <p className='mt-4 sm:text-lg text-gray-300 max-w-3xl text-center leading-relaxed'>
                Empowering Students Through Exam Preparation. We understand the stress and pressure students face leading up to exams. Finding relevant and organized study materials can be a time-consuming hassle. That's where <span className="text-indigo-400 font-semibold">MAK-BOOK</span> comes in!
            </p>
            
            {/* Call to Action */}
            <NavLink to="/about">
                <button className="mt-6 px-8 py-3 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                    Learn More
                </button>
            </NavLink>
            
            {/* Image Section */}
            <div className='flex gap-6 sm:gap-10 my-12 relative'>
                <div className='relative w-52 sm:w-64 h-72 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out'>
                    <img src={image1} alt="snapstudy about" className="w-full h-full object-cover" />
                </div>
                <div className='relative w-52 sm:w-64 h-72 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out sm:-mt-8'>
                    <img src={image2} alt="snapstudy about1" className="w-full h-full object-cover" />
                </div>
                <div className='relative w-52 sm:w-64 h-72 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out'>
                    <img src={image3} alt="snapstudy about2" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default About;
