import React, { useEffect, useState } from 'react';
import Spinner from '../Error/Spinner';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

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

    // Calculate the items to display based on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="min-h-screen bg-black py-10 px-2">
            <div className="w-[96%] md:w-[80%] mx-auto bg-white/10 border border-white/20 p-6 sm:p-10 rounded-2xl shadow-2xl text-white">
                <h1 className="text-center text-4xl font-bold mb-6 text-cyan-400">
                    📢 Latest Notifications
                </h1>
                <div className="flex flex-col gap-3">
                    {
                        currentItems.length > 0 && currentItems.map((eachNews) => {
                            const truncatedTitle = eachNews.notice_title.length > 90
                                ? eachNews.notice_title.substring(0, 90) + '...'
                                : eachNews.notice_title;

                            return (
                                <a
                                    key={eachNews.id}
                                    href={eachNews.file_path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 p-4 rounded-xl backdrop-blur-md shadow-lg hover:scale-[1.03]"
                                >
                                    <span className="bg-cyan-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full shrink-0">
                                        {eachNews.notice_date}
                                    </span>
                                    <span className="text-sm sm:text-lg font-semibold text-white">
                                        {truncatedTitle}
                                    </span>
                                </a>
                            );
                        })
                    }
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-cyan-600 text-white rounded-lg disabled:bg-gray-600 transition-all duration-200"
                    >
                        Previous
                    </button>
                    <span className="text-white text-lg font-semibold">Page {currentPage}</span>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage * itemsPerPage >= news.length}
                        className="px-4 py-2 bg-cyan-600 text-white rounded-lg disabled:bg-gray-600 transition-all duration-200"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;
