import React from 'react'
import './HowItWorks.css'
import icon4 from '../../../assets/icon4.svg'
import ellipse1 from '../../../assets/ellipse1.svg'
import ellipse2 from '../../../assets/ellipse2.svg'
import ellipse3 from '../../../assets/ellipse3.svg'
import { motion } from "framer-motion";

function HowItWorks() {
  return (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
      </motion.section>
  )
}

export default HowItWorks