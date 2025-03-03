import React from 'react';
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

const Social = () => {
    const websiteUrl = "https://mak-book.vercel.app/";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(websiteUrl);
        alert("Link copied to clipboard!");
    };

    return (
        <div className="flex justify-center items-center p-4">
            <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center w-full max-w-sm">
                <h2 className="text-lg font-semibold mb-3 text-gray-800">Share This Page</h2>
                <div className="grid grid-cols-5 gap-3 text-2xl">
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${websiteUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                        <div className="p-2 bg-blue-100 rounded-full">
                            <SiFacebook />
                        </div>
                        <p className="text-xs text-gray-600">Facebook</p>
                    </a>
                    <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${websiteUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors duration-200"
                    >
                        <div className="p-2 bg-blue-200 rounded-full">
                            <FaLinkedin />
                        </div>
                        <p className="text-xs text-gray-600">LinkedIn</p>
                    </a>
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(websiteUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 text-green-500 hover:text-green-700 transition-colors duration-200"
                    >
                        <div className="p-2 bg-green-100 rounded-full">
                            <FaSquareWhatsapp />
                        </div>
                        <p className="text-xs text-gray-600">Whatsapp</p>
                    </a>
                    <a
                        href={`https://discord.com/channels/@me`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1 text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                    >
                        <div className="p-2 bg-indigo-100 rounded-full">
                            <IoLogoDiscord />
                        </div>
                        <p className="text-xs text-gray-600">Discord</p>
                    </a>
                    <button
                        onClick={copyToClipboard}
                        className="flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    >
                        <div className="p-2 bg-gray-200 rounded-full">
                            <FaCopy />
                        </div>
                        <p className="text-xs text-gray-600">Copy link</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Social;
