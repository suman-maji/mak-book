import React from "react";

const Branch = ({ elem, selectedBranch }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="overflow-hidden relative group cursor-pointer hover:opacity-90 transition duration-300 rounded-2xl">
        <img
          src={elem.image}
          alt={elem.name}
          className="h-full w-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-white text-sm sm:text-base text-black px-4 py-2 rounded-full transition-all duration-300 group-hover:bg-black group-hover:text-white">
            {selectedBranch === elem.name ? "Selected" : "Select"}
          </button>
        </div>
      </div>
      <p className="text-center text-sm sm:text-lg font-semibold mt-2">
        {elem.name}
      </p>
    </div>
  );
};

export default Branch;
