import React from 'react';

const Semester = ({ ind }) => {
  return (
    <div className='px-6 py-6 sm:py-9 sm:px-9 text-xs sm:text-base font-semibold tracking-wider bg-gradient-to-r from-gray-700 to-gray-500 rounded-3xl flex justify-center items-center border border-gray-400 shadow-lg hover:bg-transparent hover:border-gray-300 hover:shadow-xl transition-all duration-300 cursor-pointer'>
      {`SEMESTER-${ind + 1}`}
    </div>
  );
};

export default Semester;
