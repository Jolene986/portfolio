import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import img from '../images/about.jpg'

 const About = () => {
   return (
     <section className='about' id='about'>
       <div className='about-container'>
         <div className='about-text' id='about-text'>
           <p>
             Highly <span>organized</span>, dedicated and driven. I enjoy everything <span>web-related</span>, especially creating beautiful and functional web sites and applications.
           </p>
           <p>
             <span>JavaScript</span> is my language of choice,{' '}
             <span>React</span> is my passion. I just love
             <span> creating for the web</span>. It keeps me interested, I always have
             something new to <span>learn</span>, do or explore. I enjoy developing <span>great</span> visual and functional <span>solutions</span>.
           </p>
           <p>
           I am{' '}
             <span>eager</span> to work with and meet new people, exchange
             knowledge and opinions, acquire new <span>skills</span> and learn
             new tricks and techniques.
           </p>
         </div> 
         <div className='about-img'>
           <ScrollAnimation animateIn='fadeIn' duration={2}>
             <img src={img} alt='about' />
           </ScrollAnimation>
         </div>
       </div>
     </section>
   );
 };

 export default About;
