import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wkkq2gw', 'template_rgn6z6x', form.current, 'vTdzGCSWQXi1gppOM')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>What's Next?</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>brian.lockerbie@gmail.com</h5>
          <a href="mailto:brian.lockerbie@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Brian Lockerbie Developer</h5>
          <a href="https://m.me/brianlockerbie1" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+123456789</h5>
          <a href="https://api.whatsapp.com/send?phone=6479195145" target="_blank">Send a message</a>
        </article>
      </div>
      {/* End of Contact Options */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Say Hello!</button>
      </form>
    </div>
    </section>
  )
}

export default Contact