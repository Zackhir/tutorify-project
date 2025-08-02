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
import icon3 from '../assets/icon3.svg'
import checkbox from '../assets/checkbox.svg'
import icon4 from '../assets/icon4.svg'
import ellipse1 from '../assets/ellipse1.svg'
import ellipse2 from '../assets/ellipse2.svg'
import ellipse3 from '../assets/ellipse3.svg'



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
              <img src={icon3} className='icon3' alt="icon3" />
            </div>
            <div className='container4'>
              <h3>What Will You  <span className='green'>Get</span> ?</h3>
              <p>Get access to personalized lessons, real conversation practice, and a supportive global language community, including:</p>
              <ul>
                <li>
                  <img src={checkbox} alt="checkbox" />
                 <dl>
                    <dt>1-on-1 lessons in more than 150 languages</dt>
                  <dd>-Learn from certified teachers with proven experience... </dd>
                  </dl>
                </li>
                <li>
                  <img src={checkbox} alt="checkbox" />
                   <dl>
                    <dt>Practice for free with the italki community</dt>
                  <dd>-Develop your language skills by building connections with others...</dd>
                  </dl>
                </li>
                <li>
                  <img src={checkbox} alt="checkbox" />
                  <dl>
                    <dt>Take learning beyond the classroom</dt>
                  <dd>-Learn from certified teachers with proven experience...</dd>
                  </dl>
                </li>
              </ul>
            </div>
      </section>
      <section className='section5'>
            <div className='container5'>
              <h3>Here’s how it <span className='orange'>works</span></h3>
              <p>Get access to personalized lessons, real conversation practice, and a supportive global language community, including:</p>
              <ul>
                <li>
                  <img src={ellipse1} alt="ellipse1" />
                 <dl>
                    <dt>Find a tutor</dt>
                  <dd>Choose your ideal teacher from over 10,000 qualified language tutors.</dd>
                  </dl>
                </li>
                <li>
                  <img src={ellipse2} alt="ellipse2" />
                   <dl>
                    <dt>Book a lesson</dt>
                  <dd>Select a lesson time and add it to their calendar.</dd>
                  </dl>
                </li>
                <li>
                  <img src={ellipse3} alt="ellipse3" />
                  <dl>
                    <dt>Start learning</dt>
                  <dd>Simple as that, you’re learning a language.</dd>
                  </dl>
                </li>
              </ul>
            </div>
            <div>
              <img src={icon4} className='icon4' alt="icon4" />
            </div>
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