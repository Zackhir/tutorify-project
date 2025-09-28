import { div } from "framer-motion/client";
import  stars  from "../../assets/review-stars.svg";
import React, { useEffect, useState } from "react";
import play from "../../assets/play.svg"
import profile from "../../assets/profile.svg"
import flag from "../../assets/flag0.svg"
import tutorsData from '../../data/tutors.json'
import axios from "axios";
import styles from "./TeacherCard.module.css"


function TeacherCard() {

     const [tutors, setTutors] = useState([]);

  useEffect(() => {
    async function loadTutors() {
      try {
        // Fetch random users equal to number of tutors
        const res = await axios.get(
          `https://randomuser.me/api/?results=${tutorsData.length}`
        );

        const randomUsers = res.data.results;

        // Merge: attach avatar + name from RandomUser to Mockaroo tutors
        const mergedTutors = tutorsData.map((tutor, i) => ({
          ...tutor,
          name: `${randomUsers[i].name.first} ${randomUsers[i].name.last}`,
          avatar: randomUsers[i].picture.large,
          country: randomUsers[i].location.country
        }));

        setTutors(mergedTutors.slice(0,12));
      } catch (err) {
        console.error("Error fetching RandomUser:", err);
      }
    }

    loadTutors();
  }, []);

  return (
    <div>
      {tutors.map((tutor) => (
        <div key={tutor.id} className={styles.teacher_card}>
          <div className={styles.main_card}>
            <div className={styles.profile}>
              <img src={tutor.avatar} className={styles.profile_image} alt="teacher profile pic" />
              <img src={flag} className={styles.flag} alt="language" />
            </div>
            <div className={styles.lessons}>
                <img src={play} alt="play_icon" />
                <p>20 Lessons</p>
            </div>
            <div className={styles.tutor_name}>
                <h2>{tutor.name}</h2>
                <p>4.9 Rating</p>
            </div>
            <div className={styles.rating}>
                <p>Community Tutor</p>
                <img src={stars} alt="rating_stars" />
            </div>
            <div className={styles.languages}>
              <h3>Speaks</h3>
              <p>{tutor.languages} - <span className="orange">Native</span></p>
            </div>
            <div className={styles.price_header}>
              <h4>30 Min Trial</h4>
              <h4>Hourly Rate From</h4>
            </div>
            <div className={styles.pricing}>
              <p>{tutor.trial_price}$</p>
              <p>{tutor.price_per_hour}$</p>
            </div>
            <div className={styles.grey_line}></div>
            <div className={styles.book}>
              <div className={styles.students}>
                <img src={profile} alt="" />
              <p>{tutor.students} Students</p>
              </div>
              <button>Book</button>
            </div>
          </div>
          <div className={styles.schedule_card}></div>
        </div>
      ))}
    </div>
  );
}

export default TeacherCard;
