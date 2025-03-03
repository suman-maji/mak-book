import React from 'react';
import Fag from './Faq';

const Faqs = () => {
    const faqs = [
        {
            Ques: `What subjects are covered on this platform?`,
            Ans: `Our platform offers a comprehensive collection of study resources tailored for MAKAUT University students. Navigate to the "Subjects" section to explore materials relevant to your course.`
        },
        {
            Ques: `Can I download previous year question papers, or are they only available for online viewing?`,
            Ans: `You have complete flexibility! Our past exam papers can be either viewed online or downloaded via Google Drive for offline access.`
        },
        {
            Ques: `Are answer keys or explanations available for past exam questions?`,
            Ans: `We recognize the importance of detailed explanations for effective learning. While we're actively working on providing comprehensive solutions, many questions already have solutions included within the subject organizers.`
        },
        {
            Ques: `Is access to this website completely free?`,
            Ans: `Yes! All resources on our platform are freely accessible, ensuring that students can prepare effectively without any financial burden.`
        },
    ];
    
    return (
        <div className='bg-gradient-to-tr from-indigo-900/50 via-gray-800 to-indigo-900 text-white py-16 px-4 sm:px-8 rounded-lg shadow-lg'>
            <h1 className='text-4xl sm:text-6xl font-extrabold text-center mb-8'>Frequently Asked Questions</h1>
            <div className='flex flex-col gap-6'>
                {
                    faqs.map((elem, ind) => (
                        <Fag key={ind} elem={elem} />
                    ))
                }
            </div>
        </div>
    );
}

export default Faqs;

