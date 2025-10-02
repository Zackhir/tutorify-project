import styles from "./TeacherCardItem.module.css"
import  stars  from "../../assets/review-stars.svg";
import play from "../../assets/play.svg"
import play2 from "../../assets/play2.svg"
import profile from "../../assets/profile.svg"
import React, {useState} from "react";
import Skeleton from "@mui/material/Skeleton";

function TeacherCardItem({tutor, loading }) {
    const [activeTab,setActiveTab] = useState("profile")

  return (
    <div>
        <div className={styles.teacher_card}>
          <div className={styles.main_card}>
            <div className={styles.profile}>
               {loading ? (<Skeleton variant="rounded" width="100%" height={"40vh"} />) :
              (<><img src={tutor.avatar.large} className={styles.profile_image} alt="teacher profile pic" />
              <img src={tutor.flag} className={styles.flag} alt="language" /></>)}
            </div>
            <div className={styles.lessons}>
                {loading ? (<Skeleton variant="rounded" width="20%" height={24} />
                ) :(<><img src={play} alt="play_icon" />
                <p>20 Lessons</p></>)}
            </div>
            <div className={styles.tutor_name}>
              {loading ? (<Skeleton variant="rounded" width={"100%"} height={34} />
                ) : (<><h2>{tutor.name}</h2>
                <p>4.9 Rating</p></>)}
            </div>
            <div className={styles.rating}>
                {loading ? (<Skeleton variant="rounded" width={"100%"} height={23} style={{marginTop:"1vh"}} />
                ) : (<><p>Community Tutor</p>
                <img src={stars} alt="rating_stars" /></>)}
            </div>
            <div className={styles.languages}>
              {loading ? (<Skeleton variant="rounded" width={"20%"} height={27} />
              ) : (<><h3>Speaks</h3>
              <p>{tutor.languages} - <span className="orange">Native</span></p></>)}
            </div>
            <div className={styles.price_header}>
              {loading ? (<Skeleton variant="rounded" width={"100%"} height={24} />
              ) :(<><h4>30 Min Trial</h4>
              <h4>Hourly Rate From</h4></>)}
            </div>
            <div className={styles.pricing}>
              {loading ? (<Skeleton variant="rounded" width={"100%"} height={24} />
              ) :(<><p>{tutor.trial_price}$</p>
              <p>{tutor.price_per_hour}$</p></>)}
            </div>
            <div className={styles.grey_line}></div>
            <div className={styles.book}>
              {loading ? (<Skeleton variant="rounded" width={"100%"} height={40} />
              ) :(<>
              <div className={styles.students}>
                <img src={profile} alt="" />
              <p>{tutor.students} Students</p>
              </div>
              <button>Book</button></>)}
            </div>
          </div>
              <div className={styles.schedule_card}>
        <div className={styles.about_buttons}>
          <div>
            {loading ? (<Skeleton variant="rounded" width={"100%"} height={30} />
            ) : (<>
            <button className={activeTab === "profile" ? `${styles.active}` : `${styles.about_buttons_btns}`} onClick={() => setActiveTab("profile")}>Profile</button>
            <button className={activeTab === "schedule" ? `${styles.active}`  : `${styles.about_buttons_btns}`} onClick={() => setActiveTab("schedule")}>Schedule</button></>)}
          </div>
        </div>
        {/*Profile Tab*/}
        {activeTab ==="profile" && (
          <>
        <div className={styles.desc_image}>
            {loading ? (<Skeleton variant="rounded" width={"100%"} height={416} />
            ) : (<><img src={tutor.avatar.large}  className={styles.desc_image_avatar} alt="" />
            <img src={play2} className={styles.desc_image_play} alt="" /></>)}
        </div>
        <div className={styles.desc_info}>
            {loading ? (<Skeleton variant="rounded" width={"100%"} height={70} />
            ) : (<><h4>Description</h4>
            <p>{tutor.about}</p></>)}
        </div>
        <div className={styles.desc_btn}>
            {loading ? (<Skeleton variant="rounded" width={"30%"} height={40}/>
            ) : (<button>Read more</button>)}
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