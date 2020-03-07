import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

 const NavLarge = () => {
  return (
    <nav className='nav-large'>
   
      <ul className='menu-nav'>
        <li className='nav-item'>
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
        <li className='nav-item'>
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
        <li className='nav-item'>
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
        <li className='nav-item'>
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
        <li className='nav-item'>
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
  )
}
export default NavLarge
