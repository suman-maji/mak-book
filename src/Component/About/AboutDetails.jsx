import React from 'react';
import vision1 from "../../Assets/snap-study.png";
import vision2 from "../../Assets/vision.jpg";

const AboutDetails = () => {
    return (
        <div className='text-white bg-gradient-to-br from-indigo-900/50 via-gray-900 to-indigo-950 py-10'>
            <div className='px-[6%] max-w-7xl mx-auto'>
                <h1 className='text-3xl sm:text-5xl font-bold text-center mb-10 text-indigo-300'>About Us</h1>
                
                <div className='flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20'>
                    {/* Left Section */}
                    <div className='lg:w-1/2 flex flex-col gap-6'>
                        <div className='p-5 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <h1 className='italic text-2xl text-indigo-400 font-semibold'>Our Inspiration: Recognizing a Student Need</h1>
                            <p className='text-gray-300 mt-3 leading-relaxed'>
                                Our journey began during our first year at university. Like many students, we struggled to find well-organized study materials for exams. Searching through numerous scattered resources was frustrating, leading us to create a platform that simplifies this process.
                            </p>
                        </div>
                        <div className='p-5 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <h1 className='italic text-2xl text-indigo-400 font-semibold'>Creating a Centralized Platform</h1>
                            <p className='text-gray-300 mt-3 leading-relaxed'>
                                This experience inspired us to develop a centralized platform where students can access past exam papers, downloadable organizers, and essential study aids effortlessly, all in one place.
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Section - Image */}
                    <div className='lg:w-1/2 rounded-xl overflow-hidden shadow-lg'>
                        <img src={vision1} alt="Study Illustration" className='w-full rounded-xl hover:scale-105 transition-transform duration-300' />
                    </div>
                </div>
            </div>

            {/* Our Vision Section */}
            <div className='px-[6%] max-w-7xl mx-auto mt-16'>
                <h1 className='text-3xl sm:text-5xl font-bold text-center text-indigo-300 mb-10'>Our Vision</h1>
                
                <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
                    {/* Image Section */}
                    <div className='lg:w-1/3 rounded-xl overflow-hidden shadow-lg'>
                        <img src={vision2} alt="Vision Illustration" className='w-full rounded-xl hover:scale-105 transition-transform duration-300' />
                    </div>
                    
                    {/* Text Section */}
                    <div className='lg:w-2/3 flex flex-col gap-6 text-lg text-gray-300'>
                        <p className='leading-relaxed'>
                            <span className='text-indigo-400 font-semibold'>Our Commitment:</span> Free and Accessible Resources
                        </p>
                        <p className='leading-relaxed'>
                            We understand the financial constraints faced by students.
                        </p>
                        <p className='leading-relaxed'>
                            Therefore, we are committed to making all resources on this website available for free, ensuring every student has equal access to quality exam preparation materials.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;
