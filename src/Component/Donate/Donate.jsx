import React from 'react';
import books from "../../Assets/snap-study.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Donate = () => {
  return (
    <div className='relative text-white bg-gradient-to-br from-indigo-900/50 via-gray-900 to-indigo-900 flex flex-col md:flex-row justify-center items-center w-full p-4 md:p-10 overflow-hidden'>
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-700 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-700 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-10 left-20 w-80 h-80 bg-indigo-700 rounded-full filter blur-3xl opacity-30"></div>
      
      {/* Content Section */}
      <div className='relative sm:w-[50%] p-4 md:p-6 text-center md:text-left'>
        <h1 className='text-3xl sm:text-5xl font-semibold sm:my-6 leading-tight'>
          Join Our Community & Make a Difference
        </h1>
        <p className='w-[95%] sm:w-[80%] my-4 text-lg font-light'>
          Help us expand our resources and create a vast library accessible to all students.
        </p>
        
        {/* Donate Button */}
        <NavLink 
          to={'/donate'}
          className="hover:bg-white hover:text-gray-900 bg-indigo-600 text-white font-medium mt-6 px-5 py-3 sm:px-8 sm:py-4 rounded-full duration-300 flex gap-2 hover:gap-4 items-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          <h1>Donate Now</h1>
          <MdKeyboardDoubleArrowRight size={24} />
        </NavLink>
      </div>
      
      {/* Image Section */}
      <div className='hidden md:flex justify-center items-center w-[35%]'>
        <img 
          src={books} 
          alt="snapstudy makaut study material" 
          className='w-[90%] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300'
        />
      </div>
    </div>
  );
};

export default Donate;
