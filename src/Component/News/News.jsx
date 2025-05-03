import React, { useEffect, useState } from 'react';
import Spinner from '../Error/Spinner';

const News = () => {
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://makaut1.ucanapply.com/smartexam/public/api/notice-data");
                const data = await response.json();
                setNews(data.data);
            }
            catch (error) {
                console.log("Error occurred while fetching the news");
                console.log(error);
            }
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className='relative min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black py-10'>
            <div className='w-[96%] md:w-[80%] mx-auto backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl text-white shadow-lg'>
                <h1 className='text-center text-3xl font-semibold mb-6 text-cyan-400'>Latest Notifications</h1>
                <hr className='border-gray-500 mb-6' />

                <div className='flex flex-col gap-4'>
                    {
                        news.length > 0 && news.map((eachNews) => {
                            const truncatedTitle = eachNews.notice_title.length > 90
                                ? eachNews.notice_title.substring(0, 90) + '...'
                                : eachNews.notice_title;

                            return (
                                <a
                                    key={eachNews.id}
                                    href={eachNews.file_path}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='p-3 px-5 rounded-full bg-white/20 hover:bg-cyan-500 hover:text-black text-sm sm:text-lg transition-colors duration-200'>
                                    <span className='text-gray-200 font-semibold'>{eachNews.notice_date}</span> : {truncatedTitle}
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default News;

