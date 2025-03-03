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
        <div className='sm:max-w-[70%] mx-auto p-6 flex flex-col items-center'>
            <div 
                onClick={setPyq} 
                className='relative w-full max-w-2xl p-5 sm:p-8 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl rounded-3xl cursor-pointer transition-all duration-500 transform hover:scale-105 active:scale-95 hover:shadow-2xl'
            >
                <div className='absolute inset-0 bg-white opacity-5 blur-lg rounded-3xl'></div>
                <div className='relative flex justify-between items-center'>
                    <h2 className='text-lg sm:text-2xl text-white font-semibold drop-shadow-md'>{elem.subject ? elem.subject : elem.Ques}</h2>
                    <div className={`text-3xl text-cyan-400 transition-transform duration-300 ${click ? 'rotate-90' : 'rotate-0'}`}>
                        <BsArrowRightCircle />
                    </div>
                </div>
            </div>
            
            <div 
                className={`relative overflow-hidden transition-all duration-700 ease-in-out mt-4 w-full max-w-2xl bg-gray-800 text-white p-5 rounded-3xl shadow-xl ${click ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                {elem.Ans ? elem.Ans : id === "pyq" ? <PyqCard pyqData={pyqData} /> : ""}
            </div>
        </div>
    );
};

export default Fag;
