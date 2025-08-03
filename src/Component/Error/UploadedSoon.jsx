import React from "react";
import { NavLink } from "react-router-dom";

const UploadedSoon = () => {
  return (
    // Main container with a vibrant, animated gradient background
    // Height changed from min-h-screen to h-[60vh] for a less dominating presence.
    // Background gradient adjusted for a lighter, less intense blue and more professional feel.
    <div className="w-full h-[60vh] flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-gray-100 to-indigo-100 dark:from-gray-950 dark:via-gray-800 dark:to-black animate-gradient-shift">
      {/* Define keyframe animation for the gradient shift */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>

      {/* Content card with glassmorphism effect and subtle animation */}
      <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 sm:p-12 text-center border border-white/80 max-w-lg w-full transform transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-3xl opacity-0 animate-fade-in">
        {/* Define keyframe animation for fade-in */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
        `}</style>

        {/* Heading text - color changed for better contrast on a light background */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-900 drop-shadow-lg leading-tight">
          <span className="block animate-pulse-text">Uploading Soon!</span>
        </h2>
        {/* Define keyframe animation for pulse text */}
        <style jsx>{`
          @keyframes pulse-text {
            0% {
              text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            }
            50% {
              text-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            }
            100% {
              text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            }
          }
          .animate-pulse-text {
            animation: pulse-text 2s infinite;
          }
        `}</style>

        {/* Descriptive paragraph - color changed for better contrast on a light background */}
        <p className="text-gray-700 mt-6 text-lg sm:text-xl leading-relaxed">
          This page is under construction and will be available shortly. Thank you for your patience!
        </p>

        {/* Navigation link for the button */}
        <NavLink to="/" className="mt-8 inline-block">
          {/* Button with enhanced styling and hover effects */}
          <button className="px-8 py-4 rounded-full font-bold text-lg bg-blue-700 text-white shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
            Back to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default UploadedSoon;
