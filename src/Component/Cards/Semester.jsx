import React from 'react';

const Semester = ({ ind }) => {
  return (
    <div className="px-6 py-6 sm:py-9 sm:px-9 text-xs sm:text-base font-semibold tracking-wider 
        bg-blue-500 text-white rounded-3xl flex justify-center items-center 
        border border-blue-700 shadow-lg hover:bg-blue-400 hover:border-blue-500 
        hover:shadow-xl active:scale-95 transition-all duration-300 cursor-pointer">
      {`SEMESTER-${ind + 1}`}
    </div>
  );
};

export default Semester;
