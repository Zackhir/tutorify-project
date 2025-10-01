import styles from "./TeacherCardItem.module.css"
import  stars  from "../../assets/review-stars.svg";
import play from "../../assets/play.svg"
import play2 from "../../assets/play2.svg"
import profile from "../../assets/profile.svg"
import React, {useState} from "react";

function TeacherCardItem({tutor}) {
    const [activeTab,setActiveTab] = useState("profile")

  return (
    <div>
        <div className={styles.teacher_card}>
          <div className={styles.main_card}>
            <div className={styles.profile}>
              <img src={tutor.avatar.large} className={styles.profile_image} alt="teacher profile pic" />
              <img src={tutor.flag} className={styles.flag} alt="language" />
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
              <div className={styles.schedule_card}>
        <div className={styles.about_buttons}>
          <div>
            <button className={activeTab === "profile" ? `${styles.active}` : `${styles.about_buttons_btns}`} onClick={() => setActiveTab("profile")}>Profile</button>
            <button className={activeTab === "schedule" ? `${styles.active}`  : `${styles.about_buttons_btns}`} onClick={() => setActiveTab("schedule")}>Schedule</button>
          </div>
        </div>
        {/*Profile Tab*/}
        {activeTab ==="profile" && (
          <>
        <div className={styles.desc_image}>
            <img src={tutor.avatar.large}  className={styles.desc_image_avatar} alt="" />
            <img src={play2} className={styles.desc_image_play} alt="" />
        </div>
        <div className={styles.desc_info}>
            <h4>Description</h4>
            <p>{tutor.about}</p>
        </div>
        <div className={styles.desc_btn}>
            <button>Read more</button>
        </div>
        </>
        )}
        {/*Schedule Tab*/}
        {activeTab === "schedule" && (
          <></>
        )}
    </div>
        </div>
    </div>
  )
}

export default TeacherCardItem