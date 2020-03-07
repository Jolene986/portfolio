import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
 const HeroText = () => {
  return (
    <div className='heroText'>
      <h3 className="h3h">Hello! I am</h3>
      <h1 className="h1h">Jovana</h1>
      <h2 className="h2h">Web Developer</h2>
      <div>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/Jolene986'
      >
        <FaLinkedinIn className='hero-icon' />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/jovana-jovanovic-dev/'
      >
        <FaGithub className='hero-icon' />
      </a>
      </div>
     
    </div>
  );
};
export default HeroText