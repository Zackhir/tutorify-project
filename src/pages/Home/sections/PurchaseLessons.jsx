import React from "react";
import "./PurchaseLessons.css";
import { Link } from 'react-router-dom'
import icon2 from '../../../assets/icon2.svg'
import { motion } from "framer-motion";

function PurchaseLessons() {
  return (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
    <section className="section3">
      <div className="container3">
        <h3>Purchase your awesome lessons and find your tutors </h3>
        <p>
          Buy the perfect lessons for you and discover skilled tutors worldwide
          to enhance your language learning journey with flexibility and
          support.
        </p>
        <div>
          <Link to={"/lessons"} className="lessonBtn">
            Book Your Lessons
          </Link>
          <Link to={"/findtutors"} className="tutorBtn">
            Find Your Tutors
          </Link>
        </div>
      </div>
      <div className="container3-right">
        <img src={icon2} alt="icon2" className="icon2" />
      </div>
    </section>
    </motion.section>
  );
}

export default PurchaseLessons;
