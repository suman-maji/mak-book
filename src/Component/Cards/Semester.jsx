import React from 'react'

const Semester = ({ind}) => {
  return (
    <div className='px-6 py-6 sm:py-9 sm:px-9 text-xs sm:text-base bg-gray-600 rounded-3xl flex justify-center items-center border-[1px] hover:bg-transparent cursor-pointer'>
        {
            `SEMESTER-${ind+1}`
        }
    </div>
  )
}

export default Semester