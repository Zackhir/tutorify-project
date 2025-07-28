import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import icon1 from '../assets/icon1.svg'
import flag0 from '../assets/flag0.svg'
import flag1 from '../assets/flag1.svg'
import flag2 from '../assets/flag2.svg'
import flag3 from '../assets/flag3.svg'
import flag4 from '../assets/flag4.svg'
import flag5 from '../assets/flag5.svg'
import flag6 from '../assets/flag6.svg'
import arrow from '../assets/arrow.svg'
import icon2 from '../assets/icon2.svg'


function Home() {
  return (
    <div>
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

      <section className='section2'>
            <div className='container2'>
              <p>What do you want to learn ?</p>
                <h2>What We Offer</h2>
                <div>
                  <p>I want to learn </p>
                  <div className='orange-line'></div>
                </div>
            </div>
            <div className='container2-right'>
                <p>We offer a wide variety of language lessons in many different languages, designed for all levels to support your learning and communication goals.</p>
                <div>
                  <div>
                    <img src={flag0} width={64} height={64} alt="flag" />
                    <img src={flag1} width={64} height={64} alt="flag" />
                    <img src={flag2} width={64} height={64} alt="flag" />
                    <img src={flag3} width={64} height={64} alt="flag" />
                    <img src={flag4} width={64} height={64} alt="flag" />
                    <img src={flag5} width={64} height={64} alt="flag" />
                    <img src={flag6} width={64} height={64} alt="flag" />
                    <Link to={'/lessons'}>View All 
                    <img src={arrow} alt="arrow" />  
                    </Link>
                    </div>
                </div>
            </div>
      </section>
      <section className='section3'>
            <div className='container3'>
              <h3>Purchase your awesome lessons and find your tutors </h3>
              <p>Buy the perfect lessons for you and discover skilled tutors worldwide to enhance your language learning journey with flexibility and support.</p>
              <div>
                <Link to={"/lessons"} className='lessonBtn'>Book Your Lessons</Link>
                <Link to={"/findtutors"} className='tutorBtn'>Find Your Tutors</Link>
              </div>
            </div>
            <div className='container3-right'>
              <img src={icon2} alt="icon2" className='icon2' />
            </div>
      </section>
      <section className='section4'>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3></h3>
              <p></p>
              <ul>
                <li>
                  <img src="" alt="" />
                 <dl>
                    <dt></dt>
                  <dd></dd>
                  </dl>
                </li>
                <li>
                  <img src="" alt="" />
                   <dl>
                    <dt></dt>
                  <dd></dd>
                  </dl>
                </li>
                <li>
                  <img src="" alt="" />
                  <dl>
                    <dt></dt>
                  <dd></dd>
                  </dl>
                </li>
              </ul>
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
    </div>
  )
}

export default Home