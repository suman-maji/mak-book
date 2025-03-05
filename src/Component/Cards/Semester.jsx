import React from "react";

const Semester = ({ ind }) => {
  return (
    <div className="px-8 py-6 sm:py-10 sm:px-12 text-sm sm:text-lg font-bold tracking-wide uppercase bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl flex justify-center items-center border border-transparent shadow-md hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
      {`Semester ${ind + 1}`}
    </div>
  );
};

export default Semester;
