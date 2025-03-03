import React, { useEffect, useState } from 'react';
import Branch from '../Component/Cards/Branch';
import Semester from '../Component/Cards/Semester';
import { useNavigate, useParams } from 'react-router-dom';
import cse_img from "../Assets/cse_img.jpg";
it_img from "../Assets/it_img.jpg";
import ece_img from "../Assets/ece_img.jpg";
import aiml_img from "../Assets/aiml_img.jpg";
import me_img from "../Assets/mech_img.jpg";
import civil_img from "../Assets/civil_img.jpg";
import News from '../Component/News/News';

const Course = () => {
    const [branchRoute, setBranchRoute] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    
    const branchName = [
        { name: "CSE", image: cse_img },
        { name: "IT", image: it_img },
        { name: "ECE", image: ece_img },
        { name: "AIML", image: aiml_img },
        { name: "ME", image: me_img },
        { name: "CIVIL", image: civil_img }
    ];
    const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

    const selectSem = (index) => {
        if (!branchRoute) {
            alert("Please select a branch first!");
        } else {
            navigate(`${branchRoute}/sem${index + 1}`);
        }
    };

    const selectBranch = (elem) => {
        setBranchRoute(`/choice/${id}/${elem.name.toLowerCase()}`);
        setSelectedBranch(elem.name.toUpperCase());
        window.scrollTo({ top: 500, behavior: "smooth" });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    if (id === "news") return <News />;

    return (
        <div className='text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen py-10 px-6 sm:px-12'>
            <h1 className='text-center text-3xl sm:text-4xl text-cyan-400 font-bold mb-10'>Get Your <span className='text-green-400'>{id}</span></h1>
            
            <div>
                <h2 className='text-2xl sm:text-3xl font-semibold text-gray-300 mb-5'>Select Your Branch</h2>
                <div className='grid grid-cols-3 gap-6 sm:gap-8'>
                    {branchName.map((elem, index) => (
                        <div key={index} onClick={() => selectBranch(elem)} 
                             className={`cursor-pointer transition-transform transform hover:scale-110 ${elem.name === selectedBranch ? "opacity-50" : ""}`}>
                            <Branch elem={elem} selectedBranch={selectedBranch} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-12'>
                <h2 className='text-2xl sm:text-3xl font-semibold text-gray-300 mb-5'>Select Your Semester</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6'>
                    {semesters.map((_, index) => (
                        <div key={index} className='cursor-pointer transition-transform transform hover:scale-105'>
                            <div onClick={() => selectSem(index)}>
                                <Semester ind={index} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Course
