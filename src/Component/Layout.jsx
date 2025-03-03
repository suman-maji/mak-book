import React from 'react'
import Navbar from './Footer/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout