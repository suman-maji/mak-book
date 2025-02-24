import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const productData = [
        {
            route: "news",
            title: "Latest News",
            desc: "Stay updated with all the latest news related to Makaut University."
        },
        {
            route: "playlist",
            title: "Chapterwise Video Playlist",
            desc: "Access curated video lectures for each chapter in one convenient playlist."
        },
        {
            route: "organiser",
            title: "Latest Organiser",
            desc: "One-stop solution for all your organiser needs. Download now!"
        },
        {
            route: "pyq",
            title: "Yearwise Subject PYQ",
            desc: "Boost your preparation with past year question papers categorized by subject."
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-8 sm:px-12 lg:px-20'>
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-700 rounded-full filter blur-[140px] opacity-40"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500 rounded-full filter blur-[140px] opacity-30"></div>
            </div>

            <div className='relative z-10 text-center'>
                <h1 className='text-5xl font-bold mb-4 text-white drop-shadow-md'>Main Highlights</h1>
                <p className='text-lg sm:text-xl font-light text-gray-300 max-w-3xl mx-auto mb-12'>Explore our key features and elevate your learning experience.</p>
            </div>

            <div className='mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {productData.map((elem, ind) => (
                    <NavLink key={ind} to={`/choice/${elem.route}`} className="transform transition duration-300 hover:scale-105">
                        <div className="p-6 bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-gray-700 transition-all duration-300">
                            <ProductCard elem={elem} />
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Products;
