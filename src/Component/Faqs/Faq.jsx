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
        <div className='sm:max-w-[70%] mx-auto p-4'>
            <a href={elem[id]} className='block'>
                <div 
                    onClick={setPyq} 
                    className='text-xl sm:text-2xl flex justify-between items-center group cursor-pointer rounded-2xl sm:rounded-full bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-lg p-3 sm:p-6 sm:px-8 hover:scale-105 active:scale-95'
                >
                    <h2 className='group-hover:ml-4 duration-300 text-sm sm:text-2xl'>{elem.subject ? elem.subject : elem.Ques}</h2>
                    <div className='sm:mr-5 group-hover:rotate-45 duration-300 text-2xl sm:text-5xl'>
                        <BsArrowRightCircle />
                    </div>
                </div>
            </a>
            
            <div 
                className={`mx-2 sm:mx-8 mt-2 text-xs opacity-80 sm:text-xl overflow-hidden transition-all duration-500 ${click ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                {elem.Ans ? elem.Ans : id === "pyq" ? <PyqCard pyqData={pyqData} /> : ""}
            </div>
        </div>
    );
};

export default Fag;
