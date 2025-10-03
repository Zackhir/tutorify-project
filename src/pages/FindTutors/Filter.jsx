import React,{useState} from "react";
import searchIcon from "../../assets/search.svg";
import styles from "./Filter.module.css";

function Filter({ onSearch, onCategoryChange}) {
    const [term, setTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("")

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value); // send search term up to TeacherCard
  };
    const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value); // send selected category up
  };
    //  handle tag click
 const handleTagClick = (tag) => {
  if (activeFilter.includes(tag)) {
    setActiveFilter(activeFilter.filter((t) => t !== tag));
  } else {
    setActiveFilter([...activeFilter, tag]);
  }
};
  return (
    <>
      <div className={styles.filter_container}>
        <div className={styles.search_bar}>
          <input
            type="search"
            placeholder="Lessons Name               | Tutor Name"
             value={term}
            onChange={handleChange}
          />
          <button>
            <img src={searchIcon} alt="" />
            Search
          </button>
        </div>
        <div className={styles.mobile_filters_wrapper} >
        <button className={styles.mobile_filters}>Filter</button>
        <select name="category" id="category" onChange={handleCategoryChange}>
          <option value=""  defaultValue>
            Popular Lessons
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
        <button className={styles.tag} >Also Speaks</button>

        <button className={`${styles.tag} ${activeFilter.includes("From") ? styles.active : ""}`}
            onClick={() => handleTagClick("From")}>From</button>
        <button className={`${styles.tag} ${activeFilter.includes("Price") ? styles.active : ""}`}
            onClick={() => handleTagClick("Price")}>Price</button>
        <button className={`${styles.tag} ${activeFilter.includes("Native Speaker") ? styles.active : ""}`}
            onClick={() => handleTagClick("Native Speaker")}>Native Speaker</button>
        <button className={`${styles.tag} ${activeFilter.includes("Teacher types") ? styles.active : ""}`}
            onClick={() => handleTagClick("Teacher types")}>Teacher types</button>
        <button className={`${styles.tag} ${activeFilter.includes("Category") ? styles.active : ""}`}
            onClick={() => handleTagClick("Category")}>Category</button>
        <button className={`${styles.tag} ${activeFilter.includes("Instant lesson") ? styles.active : ""}`}
            onClick={() => handleTagClick("Instant lesson")}>Instant lesson</button>
        <button className={`${styles.tag} ${activeFilter.includes("Auto-accept") ? styles.active : ""}`}
            onClick={() => handleTagClick("Auto-accept")}>Auto-accept</button>
      </div>
    </>
  );
}

export default Filter;
