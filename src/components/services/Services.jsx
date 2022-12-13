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
              <p>I create applications that are both esthetically pleasing, while also easy to navigate for the end user. Blending design and functionality are a passion of mine and I enjoy exploring my creative side. Applications that I create are always fast & responsive, to operate on any size device.</p>
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
              <p>Websites are a fundamental way to attract new customers while also supporting returning ones. My site designs include designing the layout, user interface, defining the site's architecture and more. All of which are catered to the unique needs of my clients.</p>
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
              <p>It is one thing for a website or an application to function properly, but it also has to both attract the user to want to use it as well as stand out from the rest! I have a keen eye for colour schemes and pallettes which I use in harmony with my ability to organize and display information.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services