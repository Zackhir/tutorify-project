import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Testimonials from './sections/Testimonials'
import HeroSection from './sections/HeroSection'
import CallToAction from './sections/CallToAction'
import WhatWeOffer from './sections/WhatWeOffer'
import PurchaseLessons from './sections/PurchaseLessons'
import WhatWillYouGet from './sections/WhatWillYouGet'
import HowItWorks from './sections/HowItWorks'



function Home() {
  return (
    <div>
      <HeroSection/>
      <WhatWeOffer/>
      <PurchaseLessons/>
      <WhatWillYouGet/>
      <HowItWorks/>
      <Testimonials/>
      <CallToAction/>
    </div>
  )
}

export default Home