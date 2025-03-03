import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [click, setClick] = useState(false);
  const [showClick, setShowClick] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) return;
    if (!click) {
      setShowClick(true);
    } else {
      console.log("Newsletter email => ", email);
      setEmail("");
      setShowClick(false);
      setClick(false);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 p-4'>
      <div className='w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-lg text-white p-8 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-3xl'></div>
        
        <h1 className='text-4xl font-extrabold text-center tracking-wide relative z-10'>Stay Updated!</h1>
        <p className='text-gray-300 text-center mt-2 relative z-10'>Subscribe for the latest updates & exclusive content.</p>
        
        <form className='mt-6 relative z-10' onSubmit={submitHandler}>
          <label htmlFor='email' className='block text-lg mb-2 font-medium'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email' id='email' type='email' placeholder='Enter your email' 
            className='w-full px-4 py-2 rounded-lg text-black outline-none bg-gray-200 focus:ring-2 focus:ring-blue-400' />
          {email === "" && <p className='text-red-400 text-sm mt-1'>Please enter an email</p>}

          <div className='flex items-center mt-4 gap-2'>
            <input
              onClick={() => setClick((prev) => !prev)}
              type='checkbox' className='w-5 h-5 accent-blue-500 transition-all duration-200 hover:scale-110' />
            <label className='text-gray-300 cursor-pointer'>Yes, subscribe me to the newsletter</label>
          </div>
          {showClick && !click && <p className='text-red-400 text-sm mt-1'>Please tick the checkbox</p>}

          <button
            type='submit'
            className='w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

