import React, {useState,useEffect} from 'react';
//sections $ components
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills';
import { ParalaxResume } from './components/ParalaxResume';
//css
import './scss/app.scss';
//extra

import {AiOutlineRocket} from 'react-icons/ai'
import Work from './sections/Work';
import Footer from './components/footer';
import Contact from './sections/Contact';


function App() {
  const [show, setShow]= useState(0)
//add scrol to top 
const goToTop=()=> {
  window.scrollTo({top: 0, behavior: "smooth"})
}
const handeleScroll=()=> {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    setShow(1)
  } else {
    setShow(0)
  }
}
useEffect(() => {
  window.addEventListener('scroll', handeleScroll);

  return () => {
    window.removeEventListener('scroll', handeleScroll);
  };
}, []);

let scrollBtn = null;
if(show){
  scrollBtn = (<AiOutlineRocket  className="top" style={{opacity: show}} onClick={goToTop}/>)
}
  return (
    <div className="App">
     <Hero />
      <About /> 
      <ParalaxResume/>
      <Work/>
       <Skills/> 
       <Contact/>
      <Footer/>
       {scrollBtn}
    </div>
  );
}

export default App;
