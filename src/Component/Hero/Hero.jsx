import React from "react";
import { motion } from "framer-motion";
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
        <motion.h1
          className="text-sm sm:text-xl lg:text-2xl font-medium tracking-wide text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore the Latest MAKAUT Study Material
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold my-4 text-white drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Organized with Ease
        </motion.h2>

        <motion.button
          onClick={readnowHandler}
          className="bg-blue-600 text-white px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg rounded-full font-semibold tracking-wide shadow-lg transition duration-300 transform hover:scale-105 hover:bg-blue-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Read Now
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
