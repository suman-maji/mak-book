import React, { useEffect } from 'react';

const DonateDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='text-white flex flex-col gap-8 max-w-[90%] sm:max-w-[70%] mx-auto py-8'>
      <div className='p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700'>
        <h1 className='text-cyan-400 font-extrabold text-xl sm:text-4xl mb-4'>🎥 Contribute YouTube Lectures</h1>
        <p className='text-gray-300 text-sm sm:text-lg mb-3'>Help expand our video library by adding relevant lecture links.</p>
        <h2 className='font-semibold italic text-indigo-400 text-lg'>📜 Guidelines</h2>
        <ul className='list-disc px-6 text-sm sm:text-base mt-3 space-y-2 text-gray-300'>
          <li>Fork our repository on GitHub. <a className='text-blue-400 italic underline' href="https://github.com/suman-maji/MAK-book">Fork here</a></li>
          <li>Select the department you wish to contribute to.</li>
          <li>Update the JSON file with new lecture links.</li>
          <li>Submit a pull request with a detailed description of your changes.</li>
        </ul>
      </div>
      
      <div className='p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700'>
        <h1 className='text-cyan-400 font-extrabold text-xl sm:text-4xl mb-4'>📄 Contribute PDFs (Organizers/PYQs)</h1>
        <p className='text-gray-300 text-sm sm:text-lg mb-3'>Submit previous year questions and organizers to enrich student resources.</p>
        <h2 className='font-semibold italic text-indigo-400 text-lg'>📜 Guidelines</h2>
        <ul className='list-disc px-6 text-sm sm:text-base mt-3 space-y-2 text-gray-300'>
          <li>Ensure PDFs are accurate and properly formatted.</li>
          <li>Include metadata: Your name, semester, and subject.</li>
          <li>Fill out the submission form: <a className='text-blue-400 italic underline' href="https://forms.gle/cbqW6mT53qqXq1Dm6">Submit here</a></li>
          <li>Submissions will be reviewed for quality before publishing.</li>
        </ul>
      </div>
      
      <div className='p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700'>
        <h1 className='text-cyan-400 font-extrabold text-xl sm:text-4xl mb-4'>🐞 Found a Bug?</h1>
        <p className='text-gray-300 text-sm sm:text-lg mb-3'>Help us improve by reporting any issues with the website.</p>
        <h2 className='italic text-red-400 underline text-base sm:text-lg'>
          <a href="https://github.com/suman-maji/MAK-book">Report here</a>
        </h2>
      </div>
    </div>
  );
};

export default DonateDetails;
