import React, { useEffect } from 'react'
import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";
import Donate from "../Component/Donate/Donate";
import Faqs from "../Component/Faqs/Faqs";
import Hero from "../Component/Hero/Hero";
import Newsletter from "../Component/Newsletter/Newsletter";
import Products from "../Component/Product/Products";
import Team from "../Component/Team/Team";

const Home = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Products/>
        <About/>
        <Donate/>
        <Faqs/>
        <Contact/>
        <Team/>
        <Newsletter/>
    </div>
  )
}

export default Home