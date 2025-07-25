import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import icon1 from '../assets/icon1.svg'

function Home() {
  return (
    <div>Home
      <section className='section1'>
          <div>
            <div className='graphic-box'>
              <p>We are The Best </p>
              <div className='orange-line'></div>
            </div>
            <h1>Learn Frome Home With The Best Online Languange Tutors</h1>
            <p></p>
            <Link>Try Free Lessons</Link>
          </div>
          <div>
            <img src={icon1} className='icon1' alt='Component1'/>
          </div>
      </section>

      <section>

      </section>
      <section>

      </section>
      <section>

      </section>
      <section>

      </section>
      <section>

      </section>
      <section>

      </section>
      <section>

      </section>
    </div>
  )
}

export default Home