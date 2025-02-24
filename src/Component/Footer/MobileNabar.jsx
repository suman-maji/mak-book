import React from 'react'
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom'
import { RiDeleteBack2Line } from "react-icons/ri";

const MobileNabar = ({navMenu,setNav}) => {

  return (
    <div className='h-[100vh] w-[100vw] absolute bg-black text-white p-2'>
        <div>
            <img src={logo} alt="snapstudy logo" className='w-[40vw] rounded-lg'/>
            <div className='flex flex-col p-2 gap-4'>
                {
                    navMenu?.map((nav,ind)=>{
                        return <NavLink
                        onClick={()=>setNav(false)}
                        key={ind}
                        className={"hover:bg-blue-600 p-2 rounded-lg"}
                        to={nav.route}
                        >{nav.name}</NavLink>
                    })
                }
            </div>
        </div>
        <div className='text-3xl flex justify-center '>
            <div 
            onClick={()=>setNav(false)}
            className='bg-red-600 p-2 rounded-full cursor-pointer hover:bg-red-700'>
            <RiDeleteBack2Line/>
            </div>
            
        </div>
        
    </div>
  )
}

export default MobileNabar