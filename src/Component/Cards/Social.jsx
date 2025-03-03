import React from 'react';
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

const Social = () => {
    const websiteUrl = "https://snapstudy-makaut.vercel.app/";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(websiteUrl);
        alert("Link copied to clipboard!");
    };

    return (
        <div className="grid justify-center items-center">
            <div className="p-2 text-2xl sm:text-4xl grid grid-cols-5 gap-2 sm:gap-4">
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${websiteUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500"
                >
                    <SiFacebook />
                    <p className="text-sm">Facebook</p>
                </a>
                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${websiteUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500"
                >
                    <FaLinkedin />
                    <p className="text-sm">LinkedIn</p>
                </a>
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(websiteUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500"
                >
                    <FaSquareWhatsapp />
                    <p className="text-sm">Whatsapp</p>
                </a>
                <a
                    href={`https://discord.com/channels/@me`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500"
                >
                    <IoLogoDiscord />
                    <p className="text-sm">Discord</p>
                </a>
                <button
                    onClick={copyToClipboard}
                    className="flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500"
                >
                    <FaCopy />
                    <p className="text-sm">Copy link</p>
                </button>
            </div>
        </div>
    );
};

export default Social;