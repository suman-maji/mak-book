import React from "react";
import { NavLink } from "react-router-dom";

const UploadedSoon = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-900 dark:to-gray-800 transition-all px-4">
      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-8 sm:p-12 text-center border border-white/30 max-w-lg">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white drop-shadow-md">
          Uploading Soon!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg sm:text-xl">
          This page is not available right now, but it will be soon. Stay tuned!
        </p>
        <NavLink to="/" className="mt-6 inline-block">
          <button className="mt-6 px-6 py-3 rounded-full font-semibold bg-black dark:bg-white text-white dark:text-black shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            Back to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default UploadedSoon;
