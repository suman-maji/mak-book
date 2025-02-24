import React, { useEffect, useState } from 'react'
import Fag from '../Component/Faqs/Faq'
import Social from '../Component/Cards/Social'
import { useParams } from 'react-router-dom'
import UploadedSoon from '../Component/Error/UploadedSoon'
import Spinner from '../Component/Error/Spinner'

const Subject = () => {
    //fetch the data
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);

    const {semId}=useParams();
    const {branchId}=useParams();
   // console.log(branchId);
    const url=process.env.REACT_APP_API_URL+branchId+`.json`;

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch(url);
                const result= await response.json();
                if(result[semId].length!==0)
                    setData(result[semId]);
                //console.log(result[semId])
            }
            catch(err){
                setError(err);
                console.log("Can't fetch the data");
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
        window.scroll(0,0);
    },[semId])

    if(loading){
        return <div className='text-white text-4xl text-center'>
            <Spinner/>
        </div>
    }

  return (
        <>
            <div className='text-white'>
                {
                    loading ? <div><Spinner/></div> : 
                        !data ? <div>
                            <UploadedSoon/>
                        </div>:
                    <div className='text-white pt-2 sm:pt-10 bg-gradient-to-br from-indigo-900/40 via-gray-800 to-indigo-900 p-2 sm:p-4 '>
                        <h1 className='text-3xl sm:text-5xl p-4 sm:p-6 sm:ml-[10%] font-bold'>Subject Name</h1>
                        <div className='flex flex-col gap-3'>
                            {
                                data && data.map((elem,ind)=>{
                                    return (
                                        <div key={ind}>
                                            <Fag  elem={elem} />
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                        <h1 className='mt-8 text-2xl text-center'>Thanks for using our website</h1>
                        <h2 className='my-3 text-sm text-center'>Please share to your friends</h2>

                        <Social/>
                    </div>
                }
            </div>
        </>
  )
}

export default Subject