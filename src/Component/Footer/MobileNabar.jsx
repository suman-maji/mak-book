import React from 'react';
import logo from '../../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from "react-icons/ri";

const MobileNavbar = ({ navMenu, setNav }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 text-white flex flex-col items-center p-6 backdrop-blur-md">
      {/* Logo Section */}
      <div className="w-full flex justify-center mb-6">
        <img src={logo} alt="SnapStudy Logo" className="w-40 md:w-48 rounded-lg shadow-lg" />
      </div>

      {/* Navigation Links */}
      <nav className="w-full flex flex-col items-center gap-4">
        {navMenu?.map((nav, ind) => (
          <NavLink
            key={ind}
            to={nav.route}
            onClick={() => setNav(false)}
            className="w-3/4 text-center text-lg font-medium py-3 rounded-xl transition-all duration-300 bg-gray-800 hover:bg-blue-600 hover:scale-105 shadow-md"
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>

      {/* Close Button */}
      <div className="absolute bottom-8">
        <button
          onClick={() => setNav(false)}
          className="bg-white bg-opacity-20 p-3 rounded-full shadow-lg hover:bg-opacity-40 transition-all duration-300"
        >
          <RiCloseLine className="text-3xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
