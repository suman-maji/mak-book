import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";


const ProductCard = ({ elem }) => {
    return (
        <div className='group relative max-w-md h-full p-3 sm:p-6 rounded-2xl border border-gray-700 bg-gray-800 bg-opacity-50 backdrop-blur-lg transition-all duration-300 hover:bg-opacity-70 hover:shadow-lg hover:border-indigo-500'>
            <div className='flex flex-col h-full'>
                <h2 className='text-xl font-bold text-indigo-400 mb-2 transition-all duration-300 group-hover:text-indigo-300'>
                    {elem.title}
                </h2>

                <p className='text-gray-300 flex-grow mb-8'>
                    {elem.desc}
                </p>

                <div className='absolute bottom-4 right-4 text-2xl text-gray-400 transition-all duration-300 group-hover:text-indigo-400 group-hover:transform group-hover:translate-x-1'>
                    <FiArrowRightCircle aria-hidden="true" />
                </div>
            </div>

            <span className="sr-only">Read more about {elem.title}</span>
        </div>
    )
}

export default ProductCard

