import React from 'react'
import './HeroSection.css'
import icon1 from '../../../assets/icon1.svg'
import { Link } from 'react-router-dom'


function HeroSection() {
  return (
    <section className='section1'>
          <div className='container1'>
            <div className='graphic-box'>
              <p>We are The Best </p>
              <div className='orange-line'></div>
            </div>
            <h1>Learn From Home With <span className='orange'>The Best</span> Online Languange Tutors</h1>
            <p>Start speaking confidently with top tutors. Try free lessons today and see the difference:</p>
            <Link to={"/lessons"}>Try Free Lessons</Link>
          </div>
          <div className='icon1Div'>
            <img src={icon1} className='icon1' alt='Component1'/>
          </div>
      </section>
      

  )
}

export default HeroSection