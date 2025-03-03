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
                className='relative w-full max-w-2xl p-6 sm:p-10 bg-gradient-to-br from-purple-600 to-indigo-800 shadow-2xl rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-110 hover:rotate-2 active:scale-95 hover:shadow-purple-500'
            >
                <div className='absolute inset-0 bg-white opacity-10 blur-2xl rounded-2xl'></div>
                <div className='relative flex justify-between items-center'>
                    <h2 className='text-lg sm:text-3xl text-white font-bold tracking-wider drop-shadow-lg'>{elem.subject ? elem.subject : elem.Ques}</h2>
                    <div className={`text-4xl text-pink-400 transition-transform duration-500 ${click ? 'rotate-[135deg]' : 'rotate-0'}`}>
                        <BsArrowRightCircle />
                    </div>
                </div>
            </div>
            
            <div 
                className={`relative overflow-hidden transition-all duration-700 ease-in-out mt-5 w-full max-w-2xl bg-white/10 backdrop-blur-lg text-white p-6 rounded-2xl shadow-xl ${click ? 'max-h-[500px] opacity-100 scale-105' : 'max-h-0 opacity-0 scale-95'}`}
            >
                {elem.Ans ? elem.Ans : id === "pyq" ? <PyqCard pyqData={pyqData} /> : ""}
            </div>
        </div>
    );
};

export default Fag;
