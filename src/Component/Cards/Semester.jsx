import React from 'react'

const Semester = ({ind}) => {
  return (
    <div className='px-6 py-6 sm:py-9 sm:px-9 text-xs sm:text-base font-semibold tracking-wider bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-3xl flex justify-center items-center border border-white shadow-md hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer'>
        {
            `SEMESTER-${ind+1}`
        }
    </div>
  )
}

export default Semester
