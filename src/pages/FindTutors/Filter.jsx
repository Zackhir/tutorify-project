import React from "react";
import searchIcon from "../../assets/search.svg";
import styles from "./Filter.module.css";

function Filter() {
  return (
    <>
      <div className={styles.filter_container}>
        <div className={styles.search_bar}>
          <input
            type="search"
            value=""
            placeholder="  Lessons Name               | Tutor Name"
          />
          <button>
            <img src={searchIcon} alt="" />
            Search
          </button>
        </div>
        <select name="" id="">
          <option value="" disabled selected style={{color:'#cccccc'}}>
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
      <div class={styles.tags}>
        <span class={styles.tag}>Also Speaks</span>
        <span class={styles.tag}>From</span>
        <span class={styles.tag}>Price</span>
        <span class={styles.tag}>Native Speaker</span>
        <span class={styles.tag}>Teacher types</span>
        <span class={styles.tag}>Category</span>
        <span class={styles.tag}>Instant lesson</span>
        <span class={styles.tag}>Auto-accept</span>
      </div>
    </>
  );
}

export default Filter;
