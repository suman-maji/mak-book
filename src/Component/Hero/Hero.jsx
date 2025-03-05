import React from "react";
import bgVideo from "../../Assets/bg-video.mp4";

const Hero = () => {
  const readnowHandler = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  return (
    <div className="relative text-white">
      {/* Background Video */}
      <video
        className="w-full h-[30vh] md:h-[80vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-white animate-fadeIn">
          Explore the Latest <span className="text-blue-400">MAKAUT Study Material</span>
        </h1>

        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold my-4 text-white drop-shadow-md animate-fadeInSlow">
          Organized with Ease
        </h2>

        <button
          onClick={readnowHandler}
          className="bg-blue-600 text-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg rounded-full font-semibold tracking-wide shadow-lg transition duration-300 transform hover:scale-105 hover:bg-blue-500 animate-bounceOnce"
        >
          Read Now
        </button>
      </div>

      {/* CSS Animations */}
      <style>
        {
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInSlow {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounceOnce {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }

          .animate-fadeInSlow {
            animation: fadeInSlow 1.2s ease-out;
          }

          .animate-bounceOnce {
            animation: bounceOnce 0.6s ease-out 1;
          }
        }
      </style>
    </div>
  );
};

export default Hero;
