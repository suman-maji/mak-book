import React, { useEffect, useState } from 'react';
import Fag from '../Component/Faqs/Faq';
import Social from '../Component/Cards/Social';
import { useParams } from 'react-router-dom';
import UploadedSoon from '../Component/Error/UploadedSoon';
import Spinner from '../Component/Error/Spinner';

const Subject = () => {
    // State for handling API data
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const { semId } = useParams();
    const { branchId } = useParams();

    const url = `${process.env.REACT_APP_API_URL}${branchId}.json`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (result[semId]?.length !== 0) {
                    setData(result[semId]);
                }
            } catch (err) {
                setError(err);
                console.error("Can't fetch the data", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [semId, url]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-indigo-900/50 via-gray-900 to-indigo-900 p-4 sm:p-8 flex flex-col">
            {error ? (
                <UploadedSoon />
            ) : (
                <>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-center sm:text-left sm:ml-[10%] p-4 sm:p-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-fadeIn">
                        Subject Name
                    </h1>

                    <div className="flex-grow">
                        {data?.map((elem, ind) => (
                            <div key={ind} className="mb-4">
                                <Fag elem={elem} />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-6">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-300">
                            Thanks for using our website!
                        </h1>
                        <h2 className="mt-2 text-lg text-gray-400">
                            Please share with your friends 💜
                        </h2>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <Social />
                    </div>
                </>
            )}
        </div>
    );
};

export default Subject;

