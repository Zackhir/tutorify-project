import React,{useState} from "react";
import searchIcon from "../../assets/search.svg";
import styles from "./Filter.module.css";

function Filter() {
  return (
    <>
      <div className={styles.filter_container}>
        <div className={styles.search_bar}>
          <input
            type="search"
            placeholder="Lessons Name               | Tutor Name"
          />
          <button>
            <img src={searchIcon} alt="" />
            Search
          </button>
        </div>
        <div className={styles.mobile_filters_wrapper} >
        <button className={styles.mobile_filters}>Filter</button>
        <select name="" id="">
          <option value="" disabled defaultValue>
            Popular Lesson
          </option>
          <option value="basics">Conversational Basics</option>
          <option value="travel">Travel & Survival</option>
          <option value="numbers">Numbers & Time</option>
          <option value="daily">Daily Life</option>
          <option value="culture">Culture & Traditions</option>
          <option value="business">Business & Professional</option>
          <option value="grammar">Grammar Essentials</option>
          <option value="exam">Exam Preparation</option>
          <option value="speaking">Listening & Speaking Practice</option>
        </select>
        </div>
      </div>
      <div className={styles.tags}>
        <button className={styles.tag}>Also Speaks</button>

        <button className={styles.tag}>From</button>
        <button className={styles.tag}>Price</button>
        <button className={styles.tag}>Native Speaker</button>
        <button className={styles.tag}>Teacher types</button>
        <button className={styles.tag}>Category</button>
        <button className={styles.tag}>Instant lesson</button>
        <button className={styles.tag}>Auto-accept</button>
      </div>
    </>
  );
}

export default Filter;
