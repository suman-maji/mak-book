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
    <div className='text-white bg-gradient-to-b from-gray-900 to-black p-6 md:p-10 sm:py-12 flex justify-center items-center min-h-screen'>
      <div className='sm:max-w-lg w-full mx-auto text-sm sm:text-base rounded-2xl bg-gray-800 p-8 shadow-2xl border border-gray-700'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-4 text-blue-400'>Subscribe to Our Newsletter</h1>
        <p className='text-gray-300 text-center mb-6'>Stay updated with our latest news and exclusive offers.</p>

        {submitted && (
          <div className='text-green-400 text-center mb-4 bg-green-900 p-3 rounded-lg'>Thank you for subscribing!</div>
        )}

        <form onSubmit={submitHandler} className='space-y-6'>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-lg font-medium mb-2 text-gray-200'>Email Address</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='text-black outline-none px-4 py-3 rounded-lg border border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all duration-200'
              placeholder='Enter your email'
            />
            {errors.email && <p className='text-red-400 text-sm mt-2'>{errors.email}</p>}
          </div>

          <div className='flex items-center gap-3'>
            <input
              type='checkbox'
              id='subscribe'
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className='w-6 h-6 cursor-pointer accent-blue-500 rounded-lg border-2 border-gray-500 focus:ring-2 focus:ring-blue-400'
            />
            <label htmlFor='subscribe' className='text-gray-200 cursor-pointer text-lg'>Yes, subscribe me to your newsletter</label>
          </div>
          {errors.checkbox && <p className='text-red-400 text-sm'>{errors.checkbox}</p>}

          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 transition duration-300 text-white w-full py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg'
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
