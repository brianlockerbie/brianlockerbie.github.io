import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className='client__name'>Ryan Banks</h5>
            <small className='client__review'>
              Incididunt esse id dolore exercitation voluptate amet anim enim. Dolore ex deserunt aute est sunt. In culpa incididunt reprehenderit adipisicing eu ex duis esse ullamco officia. Ipsum reprehenderit pariatur amet aliquip veniam quis in.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className='client__name'>Ryan Banks</h5>
            <small className='client__review'>
              Incididunt esse id dolore exercitation voluptate amet anim enim. Dolore ex deserunt aute est sunt. In culpa incididunt reprehenderit adipisicing eu ex duis esse ullamco officia. Ipsum reprehenderit pariatur amet aliquip veniam quis in.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className='client__name'>Ryan Banks</h5>
            <small className='client__review'>
              Incididunt esse id dolore exercitation voluptate amet anim enim. Dolore ex deserunt aute est sunt. In culpa incididunt reprehenderit adipisicing eu ex duis esse ullamco officia. Ipsum reprehenderit pariatur amet aliquip veniam quis in.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className='client__name'>Ryan Banks</h5>
            <small className='client__review'>
              Incididunt esse id dolore exercitation voluptate amet anim enim. Dolore ex deserunt aute est sunt. In culpa incididunt reprehenderit adipisicing eu ex duis esse ullamco officia. Ipsum reprehenderit pariatur amet aliquip veniam quis in.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials