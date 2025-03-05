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
        <div className='sm:max-w-[90%] mx-auto p-2'>
            <a href={elem[id]} className='block'>
                <div 
                    onClick={setPyq} 
                    className='text-lg sm:text-xl flex justify-between items-center group cursor-pointer rounded-3xl sm:rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-lg p-2 sm:p-3 sm:px-16 hover:scale-105 active:scale-95 font-[Inter,sans-serif] min-h-[60px] sm:min-h-[70px]'
                >
                    <h2 className='group-hover:ml-4 duration-300 text-sm sm:text-xl font-[Poppins,sans-serif]'>{elem.subject ? elem.subject : elem.Ques}</h2>
                    <div className='sm:mr-4 group-hover:rotate-45 duration-300 text-xl sm:text-4xl'>
                        <BsArrowRightCircle />
                    </div>
                </div>
            </a>
            
            <div 
                className={`mx-2 sm:mx-6 mt-1 text-sm sm:text-lg opacity-80 sm:text-md overflow-hidden transition-all duration-500 ${click ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                {elem.Ans ? <p className='text-base sm:text-lg'>{elem.Ans}</p> : id === "pyq" ? <PyqCard pyqData={pyqData} /> : ""}
            </div>
        </div>
    );
};

export default Fag;
