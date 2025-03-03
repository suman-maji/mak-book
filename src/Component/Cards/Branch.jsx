import React from 'react'

const Branch = ({elem,selectedBranch}) => {
  return (
    <div>
      <div className={`oveflow-hidden relative group cursor-pointer hover:opacity-80 `}>
        <img src={elem.image} alt="" className='h-[100%] w-[100%] rounded-2xl' />
        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
          <button className='bg-white text-xs sm:text-sm text-black sm:px-3 p-2 sm:py-2 rounded-full group-hover:bg-black group-hover:text-white duration-200'>{selectedBranch==elem.name ? "selected" : "select"}
          </button>
        </div>
      </div>
      <p className='text-center text-sm sm:text-xl font-bold mt-1' >{elem.name}</p>
      
      
    </div>
    
  )
}

export default Branch