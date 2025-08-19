import React from "react";
import "./CallToAction.css";
import icon6 from "../../../assets/icon6.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section className="section7">
        <div className="container7">
          <h3>
            Learn more than just a language <span>&#128525;</span>
          </h3>
          <p>Over 100,000 students join us monthly</p>
          <div>
            <img src={icon6} alt="icon6" />
            <p>and others</p>
          </div>
        </div>
        <Link>Get your free lessons now</Link>
      </section>
    </motion.section>
  );
}

export default CallToAction;
