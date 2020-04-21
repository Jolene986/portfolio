import React from 'react'
import Nav from '../components/Nav'
import  HeroText  from '../components/HeroText'
import hero from '../images/hero.jpg'



 const Hero = () => {
  return (<>
   
    <header id="home" style={{backgroundImage: `url(${hero})`}}>
  <Nav/>
     
      <HeroText />
      
   

    </header></>
  )
}
export default Hero