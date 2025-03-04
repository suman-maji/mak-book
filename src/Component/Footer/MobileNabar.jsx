import React from 'react';
import logo from '../../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import { RiCloseCircleFill } from "react-icons/ri";
import { motion } from "framer-motion"; // Import for animations

const MobileNavbar = ({ navMenu, setNav }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-end z-50">
      {/* Sidebar with Animation */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-[80vw] h-full bg-gray-900 text-white shadow-xl flex flex-col p-6"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="snapstudy logo" className="w-[50%] rounded-lg" />
        </div>

        {/* Navigation Links */}
        <nav className="mt-8 flex flex-col space-y-4">
          {navMenu?.map((nav, ind) => (
            <NavLink
              onClick={() => setNav(false)}
              key={ind}
              className="text-lg font-medium hover:bg-blue-600 p-3 rounded-lg transition-all duration-300"
              to={nav.route}
            >
              {nav.name}
            </NavLink>
          ))}
        </nav>

        {/* Close Button */}
        <div className="mt-auto flex justify-center">
          <button
            onClick={() => setNav(false)}
            className="bg-red-600 p-3 rounded-full text-white text-4xl transition-all duration-300 hover:bg-red-700"
          >
            <RiCloseCircleFill />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;

