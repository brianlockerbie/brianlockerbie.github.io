import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Note Taker',
    github: 'https://github.com/brianlockerbie/note-taker',
    demo: 'https://web-production-048a.up.railway.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tech Blog',
    github: 'https://github.com/brianlockerbie/tech-blog',
    demo: 'https://shrouded-headland-93448.herokuapp.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather Dashboard',
    github: 'https://github.com/brianlockerbie/weather-dashboard',
    demo: 'https://brianlockerbie.github.io/weather-dashboard'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Population Density Checker',
    github: 'https://github.com/project01team10/population-density-checker',
    demo: 'https://project01team10.github.io/population-density-checker'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Password Generator',
    github: 'https://github.com/brianlockerbie/password-generator-app',
    demo: 'https://brianlockerbie.github.io/password-generator-app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Work Day Scheduler',
    github: 'https://github.com/brianlockerbie/work-day-scheduler',
    demo: 'https://brianlockerbie.github.io/work-day-scheduler'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio