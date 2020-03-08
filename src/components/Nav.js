import React, {useState} from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';
import Icons from './Icons';
import {FaEnvelope} from 'react-icons/fa' 
import {FaCloudDownloadAlt} from 'react-icons/fa' 

const Nav = () => {
  const [showMenu, setShowMenu]= useState(false);
  console.log(showMenu)
  const navItems = document.querySelectorAll('.nav-item');
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
        <li className={['nav-item', showMenu?'show': null ].join(" ")}>
          <Link
            className='nav-link'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className={['nav-item', showMenu?'show': null ].join(" ")}>
          <Link
            className='nav-link'
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
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
            duration={500}
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
            duration={500}
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
            duration={500}
          >
            Contact Me
          </Link>
        </li>
         {/*DOWNLOAD BUTTON */}
<li className={['nav-item', showMenu?'show': null ].join(" ")}><button className={['neon-btn', showMenu?'show': null ].join(" ")} > {<FaCloudDownloadAlt className="btn-icon" />}Download Resume</button></li>

 {/*CONTACT INFO */}
  <li className={['nav-item', showMenu?'show': null ].join(" ")}>{<FaEnvelope className="icon"/>}<span>EMAIL ME</span></li>

 <li className={['nav-item', showMenu?'show': null ].join(" ")}><a className='nav-mail' href="mailto:jojovanovic86@gmail.com">jojovanovic86@gmail.com</a></li>

        
      </ul>
    
     

   

    
    
  
  </nav>
    </>
  );
};
export default Nav;
