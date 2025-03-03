import React from 'react';
import Faq from './Faq'; // Fixed the import name from 'Fag' to 'Faq'

const Faqs = () => {
    const faqs = [
        {
            Ques: "What subjects are covered on this platform?",
            Ans: "Our platform offers a comprehensive collection of study resources tailored for MAKAUT University students. Navigate to the 'Subjects' section to explore materials relevant to your course."
        },
        {
            Ques: "Can I download previous year question papers, or are they only available for online viewing?",
            Ans: "You have complete flexibility! Our past exam papers can be either viewed online or downloaded via Google Drive for offline access."
        },
        {
            Ques: "Are answer keys or explanations available for past exam questions?",
            Ans: "We recognize the importance of detailed explanations for effective learning. While we're actively working on providing comprehensive solutions, many questions already have solutions included within the subject organizers."
        },
        {
            Ques: "Is access to this website completely free?",
            Ans: "Yes! All resources on our platform are freely accessible, ensuring that students can prepare effectively without any financial burden."
        },
        {
            Ques: "How often are new resources added to the platform?",
            Ans: "We regularly update our resources to ensure you have access to the most recent materials. New content is typically added within 48 hours of becoming available."
        },
        {
            Ques: "Can I contribute study materials to the platform?",
            Ans: "Absolutely! We welcome contributions from students and faculty. Please use the 'Contribute' button in the navigation menu to submit your materials for review."
        },
    ];
    
    return (
        <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20 px-4 sm:px-12 rounded-xl shadow-2xl mx-auto my-12 max-w-6xl">
            <div className="container mx-auto">
                <header className="mb-16 text-center">
                    <h2 className="text-sm uppercase tracking-wider font-semibold text-blue-300 mb-3">Got Questions?</h2>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Frequently Asked Questions</h1>
                    <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
                </header>
                
                <div className="grid gap-6 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <Faq 
                            key={index} 
                            elem={faq} 
                            isLast={index === faqs.length - 1}
                        />
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-blue-200 mb-6">Still have questions? We're here to help!</p>
                    <button className="px-8 py-3 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-blue-100 transition-colors duration-300 shadow-lg">
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Faqs;
