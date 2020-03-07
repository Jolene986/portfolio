import React, {useState} from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';


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
  
  
      {/*MOBILE MENU */}
      <nav className={['menu', showMenu?'show': null ].join(" ")}>
        <div className={['menu-branding', showMenu?'show': null ].join(" ")}>
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
            About
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
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    {/*CONTACT INFO */}
    </>
  );
};
export default Nav;
