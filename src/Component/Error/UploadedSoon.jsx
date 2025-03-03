import React from 'react'
import { NavLink } from 'react-router-dom'

const UploadedSoon = () => {
  return (
    <div className="text-center w-full h-[40vh] flex flex-col items-center justify-center mx-auto px-2 lg:px-8 z-20">
        <h2 className="text-xl font-extrabold  text-white sm:text-4xl">
            <span className="block">
              Uploading Soon!
            </span>
        </h2>
        <p className="text-normal sm:text-xl mt-4 max-w-md mx-auto ">
            This page is not available right now, but it will be soon. Stay tuned!
        </p>
        <div className='mt-5'>
            <NavLink 
            to={"/"}
            className="bg-white text-black px-3 py-2 sm:px-5 sm:py-3  rounded-full font-semibold ">
                <button className=''>Back to Home</button>
            </NavLink>
        </div>
    </div>
  )
}

export default UploadedSoon