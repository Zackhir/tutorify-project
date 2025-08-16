import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Testimonials.css'
import stars from '../../../assets/review-stars.svg'
import quotation from '../../../assets/quotation.svg'


function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=6");

        const positions = [
          "Law Student",
          "Business Student",
          "Freelancer",
          "Traveler",
          "Family Therapist",
          "Marketing Executive",
          "Entrepreneur",
          "Training Nomad",
          "Volunteer"
        ];

        const reviews = [
          "This platform made learning so much fun!",
          "I improved my speaking skills in just 2 months.",
          "Such friendly tutors and engaging lessons!",
          "I never thought online learning could be this interactive.",
          "The variety of languages is amazing.",
          "I found the perfect tutor for my needs.",
          "Highly recommend to anyone wanting to learn quickly!"
        ];

        const data = res.data.results.map(user => ({
          fullName: `${user.name.first} ${user.name.last}`,
          picture: user.picture.large,
          position: positions[Math.floor(Math.random() * positions.length)],
          review: reviews[Math.floor(Math.random() * reviews.length)]
        }));

        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchData();
  }, []);

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
         {testimonials.slice(0, 5).map((t, i) => (
            <SwiperSlide key={i}>
              <div className="review-container">
                <img src={quotation} alt="quotation mark" />
                <div className="review">
                  <img src={stars} alt="review stars" />
                  <p>"{t.review}"</p>
                  <div className="review-user">
                    <img src={t.picture} alt={t.fullName}/>
                    <div className="review-user-info">
                      <h6>{t.fullName}</h6>
                      <p>{t.position}</p>
                    </div>
                  </div>
                </div>
                </div>
            </SwiperSlide>
         ))}
      </Swiper>
      </section>
  )
}

export default Testimonials