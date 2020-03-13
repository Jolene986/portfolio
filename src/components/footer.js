import React from 'react'
import {FaHeart} from 'react-icons/fa'

 const Footer = () => {
    return (
        <footer>
           <p> developed with <FaHeart className="footer-icon"/> by <a href="https://github.com/Jolene986" target="_blank" rel="noopener noreferrer" >Jolene986</a></p>
           <div className="heart">&#x2665;</div>
        </footer>
    )

}

export default Footer