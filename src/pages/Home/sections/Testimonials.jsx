import React from 'react'
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Testimonials.css'


function Testimonials() {
  return (
    <section className='testimonials'>
            <div className="container">
              <h3>Edu Smart it's about mastering a timeless skill</h3>
              <p>cultivating new perspectives, and connecting with fascinating people from around the world.</p>
            </div>
             <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
      </section>
  )
}

export default Testimonials