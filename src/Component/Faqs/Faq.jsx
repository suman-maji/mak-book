import React, { useState } from 'react';

const Faq = ({ elem }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      {/* Question Bar with purple-indigo gradient */}
      <button 
        className="w-full text-left px-10 py-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg sm:text-xl focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {elem.Ques}
      </button>
      
      {/* Answer area with a solid indigo background */}
      {open && (
        <div className="px-6 py-4 bg-indigo-700 text-white">
          {elem.Ans}
        </div>
      )}
    </div>
  );
};

export default Faq;

