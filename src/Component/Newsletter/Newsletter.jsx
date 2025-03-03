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
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4'>
      <div className='w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-lg text-white p-6 rounded-3xl shadow-xl border border-gray-700'>
        <h1 className='text-4xl font-bold text-center tracking-wide'>Stay Updated!</h1>
        <p className='text-gray-300 text-center mt-2'>Subscribe for the latest updates & exclusive content.</p>
        
        <form className='mt-6' onSubmit={submitHandler}>
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
            className='w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
