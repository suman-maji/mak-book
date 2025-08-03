import React, { useEffect } from 'react';

const DonateDetails = () => {
  // Scrolls to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='text-white flex flex-col gap-10 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto py-16 px-4'>
      {/* Section for YouTube Lecture Contributions */}
      <section className='p-8 sm:p-10 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1'>
        <h1 className='text-cyan-300 font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight'>
          🎥 Contribute YouTube Lectures
        </h1>
        <p className='text-gray-300 font-inter text-base sm:text-lg mb-6'>
          Help us expand our valuable video library by adding relevant lecture links. Your contributions make a significant difference!
        </p>
        <h2 className='font-montserrat font-semibold text-indigo-400 text-xl sm:text-2xl mb-4'>
          📜 Guidelines
        </h2>
        <ul className='list-disc pl-6 text-sm sm:text-base space-y-3 text-gray-300 font-inter'>
          <li>
            **Fork** our repository on GitHub.{' '}
            <a
              className='text-blue-400 underline hover:text-blue-300 transition-colors duration-200'
              href="https://github.com/suman-maji/MAK-book"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fork here
            </a>
          </li>
          <li>
            Select the **department** you wish to contribute to.
          </li>
          <li>
            Update the appropriate **JSON file** with new lecture links, ensuring correct formatting.
          </li>
          <li>
            Submit a **pull request** with a clear and detailed description of your changes and their purpose.
          </li>
        </ul>
      </section>

      {/* Section for PDF Contributions (Organizers/PYQs) */}
      <section className='p-8 sm:p-10 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1'>
        <h1 className='text-cyan-300 font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight'>
          📄 Contribute PDFs (Organizers/PYQs)
        </h1>
        <p className='text-gray-300 font-inter text-base sm:text-lg mb-6'>
          Submit previous year questions (PYQs) and organizers to enrich our student resources and support academic success.
        </p>
        <h2 className='font-montserrat font-semibold text-indigo-400 text-xl sm:text-2xl mb-4'>
          📜 Guidelines
        </h2>
        <ul className='list-disc pl-6 text-sm sm:text-base space-y-3 text-gray-300 font-inter'>
          <li>
            Ensure all **PDFs are accurate**, legible, and properly formatted for easy access.
          </li>
          <li>
            Include essential **metadata**: your name, the relevant semester, and the subject for proper categorization.
          </li>
          <li>
            Fill out our dedicated **submission form**:{' '}
            <a
              className='text-blue-400 underline hover:text-blue-300 transition-colors duration-200'
              href="https://forms.gle/cbqW6mT53qqXq1Dm6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit here
            </a>
          </li>
          <li>
            All submissions will be thoroughly **reviewed for quality and relevance** before being published.
          </li>
        </ul>
      </section>

      {/* Section for Bug Reporting */}
      <section className='p-8 sm:p-10 bg-gray-900 rounded-2xl shadow-xl border border-gray-700 hover:border-red-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1'>
        <h1 className='text-red-400 font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight'>
          🐞 Found a Bug?
        </h1>
        <p className='text-gray-300 font-inter text-base sm:text-lg mb-6'>
          Your help is crucial! Please report any issues or bugs you find with the website to help us improve.
        </p>
        <h2 className='font-montserrat font-semibold text-xl sm:text-2xl'>
          <a
            href="https://github.com/suman-maji/MAK-book"
            target="_blank"
            rel="noopener noreferrer"
            className='underline text-red-400 hover:text-red-300 transition-colors duration-200'
          >
            Report an issue on GitHub
          </a>
        </h2>
      </section>
    </div>
  );
};

export default DonateDetails;
