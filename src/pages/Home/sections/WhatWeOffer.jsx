import React from 'react'
import './WhatWeOffer.css'
import { Link } from 'react-router-dom'
import icon1 from '../../../assets/icon1.svg'
import flag0 from '../../../assets/flag0.svg'
import flag1 from '../../../assets/flag1.svg'
import flag2 from '../../../assets/flag2.svg'
import flag3 from '../../../assets/flag3.svg'
import flag4 from '../../../assets/flag4.svg'
import flag5 from '../../../assets/flag5.svg'
import flag6 from '../../../assets/flag6.svg'
import arrow from '../../../assets/arrow.svg'
import { motion } from "framer-motion";

function WhatWeOffer() {
  return (
                    <motion.section
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
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
          </motion.section>
  )
}

export default WhatWeOffer