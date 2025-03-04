import React from "react";
import { NavLink } from "react-router-dom";

const UploadedSoon = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col items-center justify-center text-center px-4 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-all">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
        Uploading Soon!
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg sm:text-xl max-w-lg mx-auto">
        This page is not available right now, but it will be soon. Stay tuned!
      </p>
      <NavLink to="/" className="mt-6">
        <button className="bg-black dark:bg-white text-white dark:text-black px-5 py-3 sm:px-6 sm:py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300">
          Back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default UploadedSoon;
