import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>BRIAN LOCKERBIE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className=".footer__socials">
        <a href="https://facebook.com/brianlockerbie1"><FaFacebookF/></a>
        <a href="https://linkedin.com/in/brian-lockerbie"><FaLinkedin/></a>
        <a href="https://twitter.com/BrianLockerbie"><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; BRIAN LOCKERBIE. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer