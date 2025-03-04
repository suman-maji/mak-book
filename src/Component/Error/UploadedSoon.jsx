import React from "react";
import { NavLink } from "react-router-dom";

const UploadedSoon = () => {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 dark:from-gray-900 dark:to-black transition-all px-4">
      <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 sm:p-12 text-center border border-white/20 max-w-lg">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-lg">
          Uploading Soon!
        </h2>
        <p className="text-white/90 mt-4 text-lg sm:text-xl">
          This page is not available right now, but it will be soon. Stay tuned!
        </p>
        <NavLink to="/" className="mt-6 inline-block">
          <button className="mt-6 px-6 py-3 rounded-full font-semibold bg-white text-black shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            Back to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default UploadedSoon;
