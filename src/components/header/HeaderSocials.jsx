import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/brian-lockerbie" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/brianlockerbie" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/BrianLockerbie"><IoLogoTwitter/></a>
    </div>
  )
}

export default HeaderSocials