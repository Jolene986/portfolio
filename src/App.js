import React, {useState,useEffect} from 'react';
//sections
import Hero from './sections/Hero'
import About from './sections/About'
//extra


import './scss/app.scss';
import Skills from './sections/Skills';
import { Button } from 'react-scroll';

function App() {
  const [show, setShow]= useState(false)
//add scrol to top 
const goToTop=()=> {
  window.scrollTo({top: 0, behavior: "smooth"})
}
const handeleScroll=()=> {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    setShow(true)
  } else {
    setShow(false)
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
  scrollBtn = (<button  className="top" onClick={goToTop}>UP</button>)
}
  return (
    <div className="App">
     <Hero />
      <About /> 
       <Skills/> 
       {scrollBtn}
    </div>
  );
}

export default App;
