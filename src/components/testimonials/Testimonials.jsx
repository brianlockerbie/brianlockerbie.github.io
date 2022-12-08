import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Scott Grove',
    review: 'Nulla non adipisicing amet ut anim. Ad laborum laboris veniam deserunt eiusmod. Dolor pariatur sit eiusmod adipisicing excepteur duis fugiat laborum occaecat cupidatat sit sint ex.'
  },
  {
    avatar: AVTR1,
    name: 'Scott Grove',
    review: 'Nulla non adipisicing amet ut anim. Ad laborum laboris veniam deserunt eiusmod. Dolor pariatur sit eiusmod adipisicing excepteur duis fugiat laborum occaecat cupidatat sit sint ex.'
  },
  {
    avatar: AVTR1,
    name: 'Scott Grove',
    review: 'Nulla non adipisicing amet ut anim. Ad laborum laboris veniam deserunt eiusmod. Dolor pariatur sit eiusmod adipisicing excepteur duis fugiat laborum occaecat cupidatat sit sint ex.'
  },
  {
    avatar: AVTR1,
    name: 'Scott Grove',
    review: 'Nulla non adipisicing amet ut anim. Ad laborum laboris veniam deserunt eiusmod. Dolor pariatur sit eiusmod adipisicing excepteur duis fugiat laborum occaecat cupidatat sit sint ex.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </article>
          )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials