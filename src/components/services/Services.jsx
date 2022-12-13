import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Ways that I can help</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Applications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I enjoy developing web applications using multiple languages such as: HTML5, CSS, JavaScript & React.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Applications that I create are always fast & responsive, to operate on any size device.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p>Non consectetur fugiat proident reprehenderit.</p>
            </li> */}
          </ul>
        </article>
        {/* End of Web Applications */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Non consectetur fugiat proident reprehenderit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Non consectetur fugiat proident reprehenderit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Non consectetur fugiat proident reprehenderit.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Devvelopmnt */}
        <article className="service">
          <div className="service__head">
            <h3>Creative Content</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Non consectetur fugiat proident reprehenderit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Non consectetur fugiat proident reprehenderit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Non consectetur fugiat proident reprehenderit.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services