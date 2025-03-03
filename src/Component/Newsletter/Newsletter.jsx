import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!email) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!isChecked) {
      newErrors.checkbox = 'Please agree to subscribe';
    }
    return newErrors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Newsletter email =>', email);
      setSubmitted(true);
      setEmail('');
      setIsChecked(false);
      setErrors({});
    }
  };

  return (
    <div className='text-white bg-gradient-to-b from-gray-800 to-black p-4 md:p-8 sm:py-10'>
      <div className='sm:max-w-lg mx-auto text-sm sm:text-base rounded-2xl my-10 bg-gray-900 p-6 shadow-lg'>
        <h1 className='text-2xl sm:text-3xl font-semibold text-center mb-4 text-blue-400'>Subscribe to our Newsletter</h1>
        <p className='text-gray-400 text-center mb-6'>Stay updated with our latest news and updates.</p>

        {submitted && (
          <div className='text-green-400 text-center mb-4'>Thank you for subscribing!</div>
        )}

        <form onSubmit={submitHandler} className='space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-lg font-medium mb-1'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='text-black outline-none px-3 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400'
              placeholder='Enter your email'
            />
            {errors.email && <p className='text-red-400 text-sm mt-1'>{errors.email}</p>}
          </div>

          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              id='subscribe'
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className='w-5 h-5 cursor-pointer accent-blue-500'
            />
            <label htmlFor='subscribe' className='cursor-pointer'>Yes, subscribe me to your newsletter</label>
          </div>
          {errors.checkbox && <p className='text-red-400 text-sm'>{errors.checkbox}</p>}

          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 transition duration-200 text-white w-full py-3 rounded-full font-semibold'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
