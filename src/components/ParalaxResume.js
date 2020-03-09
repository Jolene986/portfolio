import React from 'react'
import diploma from '../images/cv.pdf'
import cv from '../images/cv.pdf'

export const ParalaxResume = () => {
    return (
        <div className="paralax" id="paralax">
            <p className="text">My previous work experience consists of freelance web development in Wordpress.While attending a <a href={diploma} target="_blank">JavaScript course </a> I fell in love with React.I have a couple of non-comercial projects behind me, including my graduation project and comtrade internship project.
            Feel free to chek them out on my <a href="https://github.com/Jolene986" target="_blank">Github page.</a></p>
            <div className="resume">
                <h2>My Resume</h2>
                <a href={cv} target="_blank"><button className='neon-btn neon-btn-dark' > View</button></a>
                <p>OR</p>
                <a href={cv} download={cv}><button className='neon-btn neon-btn-dark' > Download</button></a>
            </div>
            
        </div>
    )
}
