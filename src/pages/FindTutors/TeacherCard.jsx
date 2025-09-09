import { div } from "framer-motion/client";
import  stars  from "../../assets/review-stars.svg";
import React from "react";

function TeacherCard({ techers }) {
  return (
    <div>
      {techers.map((teacher) => (
        <div key={teacher.id}>
          <div>
            <div>
              <img src={teacher} alt="teacher profile pic" />
              <img src={teacher} alt="language" />
            </div>
            <div>
                <img src="" alt="" />
                <p></p>
            </div>
            <div>
                <h2>{teacher.name}</h2>
                <p></p>
            </div>
            <div>
                <p></p>
                <img src={stars} alt="" />
            </div>
            <div className={StyleSheet.grey_line}></div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default TeacherCard;
