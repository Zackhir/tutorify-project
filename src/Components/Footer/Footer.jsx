// src/components/Footer.jsx
import { useState } from "react";
import google from "../../assets/google.svg";
import twitter from "../../assets/twitter.svg";
import insta from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";
import styles from "./Footer.module.css"; // ✅ fixed import
import { Link } from "react-router-dom";
import dropArrow from "../../assets/drop-arrow.svg";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: "teacher",
      title: "Find Teacher",
      links: [
        "English Teachers",
        "Chinese Teachers",
        "French Teachers",
        "Spanish Teachers",
        "Other Teachers",
      ],
    },
    {
      id: "lessons",
      title: "Lessons",
      links: [
        "Learn English",
        "Learn Chinese",
        "Learn French",
        "Learn Spanish",
        "Learn More Languages",
      ],
    },
    {
      id: "company",
      title: "Company",
      links: ["About", "How it Works", "Term", "Privacy Policy"],
    },
    {
      id: "more",
      title: "More",
      links: ["Documentation", "License"],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        {/* Logo Section */}
        <div className={styles.logo_container}>
          <Link className={styles.heading}>Tutorify</Link>
          <p>Learn more than just a language</p>
          <div className={styles.socials}>
            <Link>
              <img src={google} alt="google" />
            </Link>
            <Link>
              <img src={twitter} alt="twitter" />
            </Link>
            <Link>
              <img src={insta} alt="insta" />
            </Link>
            <Link>
              <img src={linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.id} className={styles.section}>
            <button
              className={styles.heading_btn}
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
              <span
                className={`${styles.arrow} ${
                  openSection === section.id ? styles.rotate : ""
                }`}
              >
                <img src={dropArrow} alt="dropArrow" />
              </span>
            </button>
            <div
              className={`${styles.mobile_collapse} ${
                openSection === section.id ? styles.show : ""
              }`}
            >
              {section.links.map((link, i) => (
                <Link key={i}>{link}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className={styles.copy}>Copyright © 2021. Created with love.</p>
    </footer>
  );
}
