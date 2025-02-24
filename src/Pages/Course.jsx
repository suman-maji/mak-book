import React, { useEffect, useState } from 'react'
import Branch from '../Component/Cards/Branch'
import Semester from '../Component/Cards/Semester'
import { useNavigate, useParams } from 'react-router-dom'

//importing image
import cse_img from "../Assets/cse_img.jpg"
import it_img from "../Assets/it_img.jpg"
import ece_img from "../Assets/ece_img.jpg"
import aiml_img from "../Assets/aiml_img.jpg"
import me_img from "../Assets/mech_img.jpg"
import civil_img from "../Assets/civil_img.jpg"
import News from '../Component/News/News'

const Course = () => {
    const [branchRoute, setBranchRoute] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const [isNavigating, setNavigating] = useState(false);

    const branchName = [
        {
            name: "CSE",
            image: cse_img,
        },
        {
            name: "IT",
            image: it_img,
        },
        {
            name: "ECE",
            image: ece_img,
        },
        {
            name: "AIML",
            image: aiml_img,
        },
        {
            name: "ME",
            image: me_img,
        },
        {
            name: "CIVIL",
            image: civil_img
        },
    ]
    const sem = [1, 2, 3, 4, 5, 6, 7, 8];

    const selectSem = (ind) => {
        if (!branchRoute) {
            alert("Please Select the Branch firstt")
        }
        else {

            navigate(`${branchRoute}/sem${ind + 1}`);
        }


    }
    const selectBranch = (elem) => {
        if (!isNavigating) {
            setBranchRoute(`/choice/${id}/${elem.name.toLowerCase()}`);
            setSelectedBranch(elem.name.toUpperCase());
            setNavigating(false);
            window.scrollTo(0, 500);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (id === "news")
        return <News />

    return (
        <div className='text-white relative overflow-hidden bg-gradient-to-br from-indigo-900/40 via-gray-800 to-indigo-900 py-6 px-[4%]'>
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            <div className="absolute bottom-[40%] right-16 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>

            <h1 className='text-center text-2xl sm:text-3xl text-cyan-400 font-semibold'>Get Your <span>{id}</span> </h1>
            <div>
                <h1 className='text-xl sm:text-4xl '>Select Your Branch</h1>
                <div className='my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 justify-center '>
                    {
                        branchName.map((elem, ind) => {
                            return (
                                <div key={ind} onClick={() => selectBranch(elem)} className={`${elem.name === selectedBranch ? " opacity-50 " : ""} `}>
                                    <Branch elem={elem} selectedBranch={selectedBranch} />
                                </div>
                            )
                        })
                    }
                </div>

                <br /><br />
            </div>

            {/* semeseter */}
            <div className='w-full'>
                <h1 className='text-xl sm:text-4xl '>Select Your Semester</h1>
                <div className='my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-10 justify-center flex-wrap'>
                    {
                        sem.map((elem, ind) => {
                            return (
                                <div key={ind}>
                                    <div
                                        onClick={() => selectSem(ind)}
                                    >
                                        <Semester ind={ind} />
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>

                <br /><br />
            </div>
        </div>
    )
}

export default Course
