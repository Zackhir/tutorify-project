import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import icon1 from '../assets/icon1.svg'

function Home() {
  return (
    <div>
      <section className='section1'>
          <div className='container1'>
            <div className='graphic-box'>
              <p>We are The Best </p>
              <div className='orange-line'></div>
            </div>
            <h1>Learn From Home With <div className='orange'>The Best</div> Online Languange Tutors</h1>
            <p>Start speaking confidently with top tutors. Try free lessons today and see the difference:</p>
            <Link>Try Free Lessons</Link>
          </div>
          <div className='icon1Div'>
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