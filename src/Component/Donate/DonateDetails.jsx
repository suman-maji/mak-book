import React, { useEffect } from 'react';
import { FaYoutube, FaFilePdf, FaBug } from 'react-icons/fa';

const Section = ({ icon, title, description, guidelines, children }) => (
  <section className="p-6 bg-gray-900 rounded-2xl shadow-md border border-gray-700">
    <header className="flex items-center gap-3 mb-4">
      <span className="text-cyan-400 text-2xl sm:text-4xl">{icon}</span>
      <h1 className="font-rubik text-cyan-400 text-2xl sm:text-4xl font-extrabold">
        {title}
      </h1>
    </header>
    <p className="text-gray-300 text-sm sm:text-lg mb-4">{description}</p>
    <h2 className="text-indigo-400 font-semibold italic text-base sm:text-lg border-b border-gray-600 pb-1 mb-3">
      📜 Guidelines
    </h2>
    <ul className="list-disc px-6 text-gray-300 space-y-2 text-sm sm:text-base">
      {guidelines.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {children}
  </section>
);

const DonateDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white flex flex-col gap-10 max-w-[90%] sm:max-w-[70%] mx-auto py-10">
      <Section
        icon={<FaYoutube />}
        title="🎥 Contribute YouTube Lectures"
        description="Help expand our video library by adding relevant lecture links."
        guidelines={[
          <>Fork our repository on GitHub. <a href="https://github.com/suman-maji/MAK-book" className="text-blue-400 underline">Fork here</a></>,
          'Select the department you wish to contribute to.',
          'Update the JSON file with new lecture links.',
          'Submit a pull request with a detailed description of your changes.'
        ]}
      />

      <Section
        icon={<FaFilePdf />}
        title="📄 Contribute PDFs (Organizers/PYQs)"
        description="Submit previous year questions and organizers to enrich student resources."
        guidelines={[
          'Ensure PDFs are accurate and properly formatted.',
          'Include metadata: Your name, semester, and subject.',
          <>Fill out the submission form: <a className="text-blue-400 underline" href="https://forms.gle/cbqW6mT53qqXq1Dm6">Submit here</a></>,
          'Submissions will be reviewed for quality before publishing.'
        ]}
      />

      <section className="p-6 bg-gray-900 rounded-2xl shadow-md border border-gray-700">
        <header className="flex items-center gap-3 mb-4">
          <span className="text-red-400 text-2xl sm:text-4xl"><FaBug /></span>
          <h1 className="font-orbitron text-red-300 font-extrabold text-xl sm:text-3xl">
            🐞 Found a Bug?
          </h1>
        </header>
        <p className="text-gray-300 text-sm sm:text-lg mb-3">Help us improve by reporting any issues with the website.</p>
        <a
          href="https://github.com/suman-maji/MAK-book"
          className="inline-block text-sm sm:text-base text-red-400 underline italic mt-2"
        >
          🐛 Report on GitHub
        </a>
      </section>
    </div>
  );
};

export default DonateDetails;

