import React from 'react';
import useGithub from '../../CustomHooks/useGithub';
import DeveloperCard from './DeveloperCard';

const Team = () => {
    const { githubProfile } = useGithub("suman-maji");

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                        Designed and Devloped by
                    </h1>
                </div>

                <div className="flex justify-center">
                    <DeveloperCard
                        profile={githubProfile}
                        linkedinUrl="https://www.linkedin.com/in/suman09/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;
