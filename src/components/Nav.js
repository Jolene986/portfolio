import React, {useState} from 'react';
import { Link } from 'react-scroll';

import {FaEnvelope} from 'react-icons/fa' 
 
import cv from '../images/cv.pdf'

const Nav = () => {
  const [showMenu, setShowMenu]= useState(false);
 
 
  return (
  
  <>
  <div className={['menu-btn', showMenu?'close': null ].join(" ")} onClick={()=>{setShowMenu(!showMenu)}}>
    {/*HAMBURGER LINES */}
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>
  
  
      {/*MENU */}
      <nav className={['menu', showMenu?'show': null ].join(" ")}>
        <div className={['menu-image', showMenu?'show': null ].join(" ")}>
          <div className="portrait"></div>
        </div>
      <ul className={['menu-nav', showMenu?'show': null ].join(" ")}>
        <li className={['nav-item', showMenu?'show': null ].join(" ")}  >
          <Link
            className='nav-link'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={()=>{setShowMenu(!showMenu)}}
            
          >
            Home
          </Link>
        </li>
        <li className={['nav-item', showMenu?'show': null ].join(" ")} >
          <Link
            className='nav-link'
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={()=>{setShowMenu(!showMenu)}}
          >
            About Me
          </Link>
        </li>
        <li className={['nav-item', showMenu?'show': null ].join(" ")}>
          <Link
            className='nav-link'
            activeClass='active'
            to='work'
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={()=>{setShowMenu(!showMenu)}}
          >
            My Work
          </Link>
        </li>
        <li className={['nav-item', showMenu?'show': null ].join(" ")}>
          <Link
            className='nav-link'
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onClick={()=>{setShowMenu(!showMenu)}}
          >
            Skills
          </Link>
        </li>
        <li className={['nav-item', showMenu?'show': null ].join(" ")}>
          <Link
            className='nav-link'
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true} 
            offset={0}
            duration={800}
            onClick={()=>{setShowMenu(!showMenu)}}
          >
            Contact Me
          </Link>
        </li>
         {/*DOWNLOAD BUTTON */}
<li className={['nav-item', showMenu?'show': null ].join(" ")}><a href={cv} download={cv}><button className={['neon-btn', showMenu?'show': null ].join(" ")} > Download Resume</button></a></li>

 {/*CONTACT INFO */}
  <li className={['nav-item', showMenu?'show': null ].join(" ")}>{<FaEnvelope className="icon"/>}<span>EMAIL ME</span></li>

 <li className={['nav-item', showMenu?'show': null ].join(" ")}><a className='nav-mail' href="mailto:jojovanovic86@gmail.com">jojovanovic86@gmail.com</a></li>

        
      </ul>
    
     

   

    
    
  
  </nav>
    </>
  );
};
export default Nav;
