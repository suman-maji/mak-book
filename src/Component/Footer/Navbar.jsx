import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../Assets/logo.png";
import MobileNavbar from './MobileNabar';

const Navbar = () => {
  const navMenu = [
    { name: "Home", route: "/" },
    { name: "Notice", route: "choice/news" },
    { name: "Organiser", route: "choice/organiser" },
    { name: "PYQ", route: "choice/pyq" },
    { name: "Lectures", route: "choice/playlist" }
  ];

  const [nav, setNav] = useState(false);
  
  return (
    <div className="sticky top-0 z-50 shadow-md bg-gradient-to-r from-gray-900 to-gray-800">
      {nav ? (
        <MobileNavbar navMenu={navMenu} setNav={setNav} />
      ) : (
        <nav className="bg-transparent">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <NavLink to={"/"} className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto rounded-md shadow-lg" />
              </NavLink>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-4">
                {navMenu.map((menu, ind) => (
                  <NavLink 
                    key={ind}
                    to={menu.route}
                    className={({ isActive }) => 
                      `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 
                      ${isActive 
                        ? "bg-indigo-600 text-white shadow-md" 
                        : "text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg"}`
                    }
                  >
                    {menu.name}
                  </NavLink>
                ))}
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setNav(true)}
                  className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
