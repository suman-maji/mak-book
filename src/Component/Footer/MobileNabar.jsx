import React from 'react';
import logo from '../../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import { RiCloseCircleFill } from "react-icons/ri";

const MobileNavbar = ({ navMenu, setNav }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center p-5 z-50">
      
      {/* Logo Section */}
      <div className="w-full flex justify-center mb-6">
        <img src={logo} alt="SnapStudy Logo" className="w-40 rounded-lg shadow-lg" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col w-full items-center gap-4">
        {navMenu?.map((nav, ind) => (
          <NavLink
            key={ind}
            to={nav.route}
            onClick={() => setNav(false)}
            className="w-4/5 text-lg font-semibold text-white bg-gray-800 px-4 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:scale-105"
          >
            {nav.name}
          </NavLink>
        ))}
      </div>

      {/* Close Button */}
      <div className="absolute bottom-8">
        <button
          onClick={() => setNav(false)}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-lg shadow-lg hover:bg-white/20 transition-all duration-300"
        >
          <RiCloseCircleFill className="text-3xl text-red-500" />
          <span>Close Menu</span>
        </button>
      </div>
      
    </div>
  );
};

export default MobileNavbar;

