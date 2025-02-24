import React from 'react'
import bgVideo from "../../Assets/bg-video.mp4"

const Hero = () => {
  const readnowHandler = () => {
    window.scrollTo(0, 600);
  };

  return (
    <div className="relative text-white">
      {/* Background Video */}
      <video
        className="w-[100vw] h-[30vh] md:h-[80vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-xs sm:text-2xl my-2 animate-fadeIn">
          Explore latest MAKAUT study material
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4 animate-fadeInSlow">
          Organised with Ease
        </h2>
        <button
          onClick={readnowHandler}
          className="bg-gray-800 text-white px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-lg rounded-full hover:text-gray-800 hover:bg-white duration-200 transform hover:scale-105 shadow-lg"
        >
          Read Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
