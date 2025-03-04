import React from "react";

const PyqCard = ({ pyqData }) => {
  // Transforming pyqData into an array of [year, link]
  const dataArray = pyqData.map((item) => {
    const year = parseInt(Object.keys(item)[0]);
    const link = item[year];
    return [year, link];
  });

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {dataArray.map((pyq, index) => (
        <a
          key={index}
          href={pyq[1]}
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {pyq[0]}
        </a>
      ))}
    </div>
  );
};

export default PyqCard;
