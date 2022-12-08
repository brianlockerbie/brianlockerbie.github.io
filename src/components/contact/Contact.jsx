import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail/>
          <h4>Email</h4>
          <h5>brian.lockerbie@gmail.com</h5>
          <a href="mailto:brian.lockerbie@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine/>
          <h4>Messenger</h4>
          <h5>Brian Lockerbie Developer</h5>
          <a href="https://m.me/brianlockerbie1" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp/>
          <h4>Whatsapp</h4>
          <h5>+123456789</h5>
          <a href="https://api.whatsapp.com/send?phone=6479195145" target="_blank">Send a message</a>
        </article>
      </div>
      {/* End of Contact Options */}
      <form action=""></form>
    </div>
    </section>
  )
}

export default Contact