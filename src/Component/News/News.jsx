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
        <div
            className="min-h-screen w-full bg-cover bg-center py-10 px-2 sm:px-6"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1695653422435-7f8683ac1b5b?auto=format&fit=crop&w=1400&q=80')`,
            }}
        >
            <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-4 sm:p-8 text-white">
                <h1 className="text-center text-4xl font-bold mb-6 text-violet-300">
                    📢 Latest Notifications
                </h1>
                <div className="flex flex-col gap-4">
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
                                    className="flex items-center justify-start gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 p-4 rounded-xl backdrop-blur-md shadow hover:scale-[1.01]"
                                >
                                    <span className="bg-violet-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                                        {eachNews.notice_date}
                                    </span>
                                    <span className="text-sm sm:text-lg text-white font-medium">
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

