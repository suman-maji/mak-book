import React from 'react'

const PyqCard = ({pyqData}) => {
    const dataArray = pyqData.map(item => {
        const year = parseInt(Object.keys(item)[0]);
        const link = item[year];
        return [year, link];
    });

  return (
    <div className='flex flex-wrap gap-4'>
       {
        dataArray.map((pyq)=>{
            return (
                <a 
                className='border-[1px] bg-indigo-950 hover:bg-transparent rounded-full px-6 py-2'
                href={pyq[1]}>
                    {pyq[0]}
                </a>
            )
        })
       }
        
    </div>
  )
}

export default PyqCard