import React from "react";
import { NavLink } from "react-router-dom";

const UploadedSoon = () => {
  return (
    <div className="w-full h-[65vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 dark:from-gray-900 dark:to-black transition-all px-4">
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 sm:p-12 text-center border border-white/20 max-w-xl">
        <h2
          className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Uploading Soon!
        </h2>
        <p className="text-white/90 mt-5 text-base sm:text-lg leading-relaxed tracking-wide font-medium">
          This page isn't ready yet, but great things are coming. Stay tuned for updates!
        </p>
        <NavLink to="/" className="mt-8 inline-block">
          <button className="px-7 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-white to-gray-200 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
            ← Back to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default UploadedSoon;
