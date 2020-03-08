import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

 const Icons = (props) => {
    return (
        <div  className={['icon-container', props.showMenu?'show': null ].join(" ")}>
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
    )
}

export default Icons