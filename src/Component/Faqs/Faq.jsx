import React, { useState } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import PyqCard from '../Common/PyqCard';

const Fag = ({ elem }) => {
  const [active, setActive] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState([]);
  
  const toggleActive = () => {
    setActive(prev => !prev);
    if (!active) {
      if (id === "pyq") {
        setData(elem.pyqLink);
      } else if (id === "organiser") {
        setData(elem.organiserLink);
      } else if (id === "lecture") {
        setData(elem.lectureLink);
      }
    }
  };
  
  return (
    <div className="my-3 mx-auto w-full max-w-2xl">
      <div className={`overflow-hidden rounded-xl shadow-lg transition-all duration-500 ${active ? 'bg-white' : 'bg-gradient-to-r from-blue-600 to-indigo-800'}`}>
        {/* Card Header */}
        <div 
          onClick={toggleActive}
          className="relative cursor-pointer"
        >
          <div className={`p-4 transition-all duration-300 ${active ? 'pb-0 border-b border-gray-100' : 'hover:bg-opacity-90'}`}>
            <div className="flex justify-between items-center">
              <h2 className={`font-bold text-lg transition-all duration-300 ${active ? 'text-indigo-900' : 'text-white'}`}>
                {elem.subject ? elem.subject : elem.Ques}
              </h2>
              
              <div className={`transition-all duration-500 ml-3 ${active ? 'rotate-90 text-indigo-600' : 'text-white'}`}>
                <BsArrowRightCircle 
                  className={`text-2xl transition-transform duration-300 ${active ? '' : 'hover:scale-110'}`}
                />
              </div>
            </div>
            
            {!active && (
              <div className="mt-1 text-indigo-100 text-xs">
                Click to reveal
              </div>
            )}
          </div>
        </div>
        
        {/* Card Content */}
        <div 
          className={`transition-all duration-500 overflow-hidden ${active ? 'max-h-screen opacity-100 p-4 pt-3' : 'max-h-0 opacity-0 p-0'}`}
        >
          <div className="text-gray-700">
            {elem.Ans ? (
              <div className="prose max-w-none">{elem.Ans}</div>
            ) : id === "pyq" ? (
              <PyqCard pyqData={data} />
            ) : id === "organiser" || id === "lecture" ? (
              <div className="text-blue-500 underline">
                {data ? <a href={data} target="_blank" rel="noopener noreferrer">Open Link</a> : "No content available"}
              </div>
            ) : (
              <div className="text-gray-400 italic">No content available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fag;
