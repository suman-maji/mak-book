import React, { useState } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import PyqCard from '../Common/PyqCard';

const Fag = ({ elem }) => {
    const [click, setClick] = useState(false);
    const { id } = useParams();
    const [pyqData, setPyqData] = useState([]);

    const setPyq = () => {
        setClick(prev => !prev);
        setPyqData(elem.pyqLink);
    };

    return (
        <div className='w-full max-w-md mx-auto p-2'>
            <div 
                onClick={setPyq} 
                className='flex justify-between items-center bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-3 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform'
            >
                <h2 className='text-sm font-medium truncate'>{elem.subject ? elem.subject : elem.Ques}</h2>
                <BsArrowRightCircle className={`text-lg transition-transform ${click ? 'rotate-90' : 'rotate-0'}`} />
            </div>
            <div 
                className={`overflow-hidden transition-all duration-500 ${click ? 'max-h-40 opacity-100 mt-2 p-2 bg-gray-800 text-white text-xs rounded-md' : 'max-h-0 opacity-0'}`}
            >
                {elem.Ans ? elem.Ans : id === "pyq" ? <PyqCard pyqData={pyqData} /> : ""}
            </div>
        </div>
    );
};

export default Fag;
