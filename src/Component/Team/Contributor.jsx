import React from 'react'
import contr from '../../Assets/contr.jpg'

const Contributor = () => {
    const contributor=[
        {
            img:contr,
            name:"Sam Altman",
        },
        {
            img:contr,
            name:"Sam Altman",
        },
        {
            img:contr,
            name:"Sam Altman",
        },
        {
            img:contr,
            name:"Sam Altman",
        },
    ]

  return (
    <div className='text-white mt-7 sm:mt-14 flex justify-center flex-col items-center '>
        <h1 className='text-center text-2xl sm:text-4xl font-semibold pt-8'>Contributors</h1>
        <div className='my-10 mx-[8%] flex flex-wrap gap-7 justify-center items-center'>
            {
                contributor.map((elem,ind)=>{
                    return (
                        <div key={ind}>
                            <div className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden'>
                                <img src={elem.img} alt="" />
                            </div>
                            <h1 className='text-center'>{elem.name}</h1>
                        </div>
                    )
                })
            }
            <div className='w-full h-[0.5px] bg-gray-500'></div>
        </div>
        
    </div>
  )
}

export default Contributor