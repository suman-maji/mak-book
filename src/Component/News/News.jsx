import React, { useEffect, useState } from 'react'
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
                console.log("Error occured while fetching the news");
                console.log(error);
            }
            setLoading(false);
        }
        getData();

    }, [])

    if (loading) {
        return <Spinner />
    }
    return (
        <div className='bg-gradient-to-br relative from-gray-900 via-gray-800 to-gray-900 -my-3'>
            <div className='hidden sm:block'>
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>

            </div>
            <div className='w-[96%] md:w-[80%] mx-auto border-2  m-4 text-white rounded-2xl'>
                <h1 className='text-center text-3xl font-semibold m-4 text-cyan-400'>Latest Notifications</h1>
                <hr />

                <div className='flex flex-col gap-3 justify-center p-4'>
                    {
                        news.length > 0 && news.map((eachNews) => {
                            const truncatedTitle = eachNews.notice_title.length > 90
                                ? eachNews.notice_title.substring(0, 90) + '...'
                                : eachNews.notice_title;

                            return (
                                <a
                                    key={eachNews.id}
                                    href={eachNews.file_path}
                                    className=' p-2 px-4 rounded-full bg-white/20 flex-1 hover:bg-gray-300 hover:text-black text-xs sm:text-lg'>
                                    <span className='text-black font-semibold'>{eachNews.notice_date}</span> : {truncatedTitle}
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default News
