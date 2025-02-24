import React, { useEffect } from 'react'
import Products from '../Component/Product/Products'

const Services = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <Products/>
  )
}

export default Services