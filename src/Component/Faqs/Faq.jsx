import React, { useState } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import PyqCard from '../Common/PyqCard';

const Fag = ({ elem }) => {
  const [active, setActive] = useState(false);
  const { id } = useParams();
  const [pyqData, setPyqData] = useState([]);
  
  const toggleActive = () => {
    setActive(prev => !prev);
    if (!active && id === "pyq") {
      setPyqData(elem.pyqLink);
    }
  };
  
  return (
    <div className="my-6 mx-auto w-full max-w-3xl">
      <div className={`overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${active ? 'bg-white' : 'bg-gradient-to-r from-blue-600 to-indigo-800'}`}>
        {/* Card Header */}
        <div 
          onClick={toggleActive}
          className="relative cursor-pointer"
        >
          <div className={`p-5 transition-all duration-300 ${active ? 'pb-0 border-b border-gray-100' : 'hover:bg-opacity-90'}`}>
            <div className="flex justify-between items-center">
              <h2 className={`font-bold text-xl transition-all duration-300 ${active ? 'text-indigo-900' : 'text-white'}`}>
                {elem.subject ? elem.subject : elem.Ques}
              </h2>
              
              <div className={`transition-all duration-500 ${active ? 'rotate-90 text-indigo-600' : 'text-white'}`}>
                <BsArrowRightCircle 
                  className={`text-3xl transition-transform duration-300 ${active ? '' : 'hover:scale-110'}`}
                />
              </div>
            </div>
            
            {!active && (
              <div className="mt-2 text-indigo-100 text-sm">
                Click to reveal answer
              </div>
            )}
          </div>
        </div>
        
        {/* Card Content */}
        <div 
          className={`transition-all duration-500 overflow-hidden ${active ? 'max-h-screen opacity-100 p-5 pt-4' : 'max-h-0 opacity-0 p-0'}`}
        >
          <div className="text-gray-700">
            {elem.Ans ? (
              <div className="prose max-w-none">{elem.Ans}</div>
            ) : id === "pyq" ? (
              <PyqCard pyqData={pyqData} />
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
