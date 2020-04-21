import React from 'react'

import certificate from '../images/certificate.pdf'
import cv from '../images/cv.pdf'

export const ParalaxResume = () => {
    return (
      <div className='paralax' id='paralax'>
        <p className='text'>
          My previous work experience consists of freelance web development in{' '}
          <span className='bold'>Wordpress</span>.<br></br> My overall goal is to help clients to
          improve their business and represent themselves as they feel they
          should and to offer more to their customers.<br></br>
          While attending a{' '}
          <a
            href={certificate}
            target='_blank'
            className='bold-link'
            rel='noopener noreferrer'
          >
            JavaScript course{' '}
          </a>{' '}
          I fell in love with React. I have a couple of non-comercial projects
          behind me, including my graduation project and comtrade internship
          project. Feel free to chek them out on my{' '}
          <a
            href='https://github.com/Jolene986'
            target='_blank'
            rel='noopener noreferrer'
            className='bold-link'
          >
            Github page.
          </a>
        </p>

        <div className='resume'>
          <h2>My Resume</h2>
          <a
            href={cv}
            target='_blank'
            className='neon-btn neon-btn-dark'
            rel='noopener noreferrer'
          >
            {' '}
            View
          </a>
          <p>OR</p>
          <a
            href={cv}
            download={cv}
            className='neon-btn neon-btn-dark'
            rel='noopener noreferrer'
          >
            {' '}
            Download
          </a>
        </div>
      </div>
    );
}
