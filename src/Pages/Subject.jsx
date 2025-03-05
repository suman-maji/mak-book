import React, { useEffect, useState } from "react";
import Fag from "../Component/Faqs/Faq";
import Social from "../Component/Cards/Social";
import { useParams } from "react-router-dom";
import UploadedSoon from "../Component/Error/UploadedSoon";
import Spinner from "../Component/Error/Spinner";

const Subject = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { semId, branchId } = useParams();
  const url = `${process.env.REACT_APP_API_URL}/${branchId}.json`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching from:", url);
        const response = await fetch(url);
        const result = await response.json();
        console.log("API Response:", result);
        console.log("Subjects for semId:", semId, result[semId]);

        if (result[semId] && result[semId].length > 0) {
          setData(result[semId]);
        } else {
          setData([]);  // Set empty array instead of null
        }
      } catch (err) {
        setError(err);
        console.error("Can't fetch the data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [semId, branchId]); // Added branchId

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white px-4 sm:px-8 py-6">
      {error ? (
        <div className="text-center text-red-500 text-lg font-semibold">
          Unable to load data. Please try again later.
        </div>
      ) : data.length === 0 ? ( 
        <UploadedSoon />
      ) : (
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-6 sm:mb-10 text-indigo-400 font-playfair tracking-wide">
            Subject List
          </h1>

          <div className="space-y-3">
            {data.map((elem, ind) => (
              <div key={ind}>
                <Fag elem={elem} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-300">
              Thanks for using our website!
            </h1>
            <h2 className="mt-2 text-lg text-gray-400">
              Please share with your friends 💜
            </h2>
          </div>

          <div className="mt-8 flex justify-center">
            <Social />
          </div>
        </div>
      )}
    </div>
  );
};

export default Subject;

