import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import img from '../images/about.jpg'

 const About = () => {
   return (
     <section className='about' id='about'>
       <div className='about-container'>
         <div className='about-text' id='about-text'>
           <p>
             Highly <span>organized</span>, passionate and driven. I enjoy games
             and puzzles. I am a <span>problem solver</span>, so naturally I
             like a good challenge.
           </p>
           <p>
             <span>JavaScript</span> is my language of choice,{' '}
             <span>React</span> is my passion. I just love
             <span> coding</span>. It keeps me interested, I always have
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