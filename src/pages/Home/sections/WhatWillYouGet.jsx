import React from 'react'
import './WhatWillYouGet.css'
import icon3 from '../../../assets/icon3.svg'
import checkbox from '../../../assets/checkbox.svg'
import { motion } from "framer-motion";

function WhatWillYouGet() {
  return (
                        <motion.section
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                        >
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
          </motion.section>
  )
}

export default WhatWillYouGet