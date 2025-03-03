import React, {useEffect} from 'react'
import Products from '../Component/Product/Products'
import Team from '../Component/Team/Team'
import AboutDetails from '../Component/About/AboutDetails'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-gradient-to-r from-pink-900/30 via-black to-blue-800/30 '>
        <AboutDetails/>
        <Products/>
        <Team/>
    </div>
  )
}

export default About