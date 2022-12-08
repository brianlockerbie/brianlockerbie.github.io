import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Scott Grove',
    review: 'Nulla non adipisicing amet ut anim. Ad laborum laboris veniam deserunt eiusmod. Dolor pariatur sit eiusmod adipisicing excepteur duis fugiat laborum occaecat cupidatat sit sint ex.'
  },
  {
    avatar: AVTR1,
    name: 'Marc Jacobs',
    review: 'Nulla non adipisicing amet ut anim. Ad laborum laboris veniam deserunt eiusmod. Dolor pariatur sit eiusmod adipisicing excepteur duis fugiat laborum occaecat cupidatat sit sint ex.'
  },
  {
    avatar: AVTR1,
    name: 'Amber Dawn',
    review: 'Nulla non adipisicing amet ut anim. Ad laborum laboris veniam deserunt eiusmod. Dolor pariatur sit eiusmod adipisicing excepteur duis fugiat laborum occaecat cupidatat sit sint ex.'
  },
  {
    avatar: AVTR1,
    name: 'Jamie E.',
    review: 'Nulla non adipisicing amet ut anim. Ad laborum laboris veniam deserunt eiusmod. Dolor pariatur sit eiusmod adipisicing excepteur duis fugiat laborum occaecat cupidatat sit sint ex.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              </SwiperSlide>
          )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials