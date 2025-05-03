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
        <div className="min-h-screen w-full bg-gradient-to-tr from-[#1f005c] via-[#5b0060] to-[#870160] py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-10 text-white">
                <h1 className="text-center text-4xl font-bold mb-8 text-cyan-300">📢 Latest Notifications</h1>
                <div className="flex flex-col gap-5">
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
                                    className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-all duration-300 p-4 rounded-xl backdrop-blur-md shadow hover:scale-[1.02]"
                                >
                                    <span className="bg-cyan-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full mr-4">
                                        {eachNews.notice_date}
                                    </span>
                                    <span className="text-sm sm:text-lg text-white font-medium flex-1">
                                        {truncatedTitle}
                                    </span>
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

