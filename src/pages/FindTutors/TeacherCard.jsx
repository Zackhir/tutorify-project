import React, { useEffect, useState } from "react";
import tutorsData from "../../data/tutors.json";
import axios from "axios";
import styles from "./TeacherCard.module.css";
import TeacherCardItem from "./TeacherCardItem";
import flag0 from "../../assets/flag0.svg";
import flag1 from "../../assets/flag1.svg";
import flag2 from "../../assets/flag2.svg";
import flag3 from "../../assets/flag3.svg";
import flag4 from "../../assets/flag4.svg";
import flag5 from "../../assets/flag5.svg";
import flag6 from "../../assets/flag6.svg";
import Filter from "./Filter";

function TeacherCard() {
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = React.useState(true);

  const flags = [flag0, flag1, flag2, flag3, flag4, flag5, flag6];
  const categories = ["basics", "travel", "numbers", "daily", "culture", "business", "grammar", "exam", "speaking"];
  useEffect(() => {
    async function loadTutors() {
      try {
        const res = await axios.get(
          `https://randomuser.me/api/?results=${tutorsData.length}`
        );

        const randomUsers = res.data.results;

        const mergedTutors = tutorsData.map((tutor, i) => ({
          ...tutor,
          name: `${randomUsers[i].name.first} ${randomUsers[i].name.last}`,
          avatar: {
            large: randomUsers[i].picture.large,
            medium: randomUsers[i].picture.medium,
            thumbnail: randomUsers[i].picture.thumbnail,
          },
          flag: flags[Math.floor(Math.random() * 7)],
          category: categories[Math.floor(Math.random() * 10)],
          country: randomUsers[i].location.country,
        }));

        setTutors(mergedTutors);
        setFilteredTutors(mergedTutors); // initial list
      } catch (err) {
        console.error("Error fetching RandomUser:", err);
      } finally {
        setLoading(false);
      }
    }

    loadTutors();
  }, []);

  const handleSearch = (term) => {
    const value = term.toLowerCase();
    const results = tutors.filter(
      (t) =>
        t.name.toLowerCase().includes(value) ||
        t.languages.toLowerCase().includes(value)
    );
    setFilteredTutors(results);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div>
      <Filter onSearch={handleSearch} />
      {(loading ? Array.from(new Array(4)) : filteredTutors.slice(0, visibleCount)).map((tutor) => (
        <TeacherCardItem key={loading ? Math.random() :tutor.id} tutor={tutor} loading={loading} />
      ))}
      <div className={styles.show_more_container}>
        <button onClick={handleShowMore} className={styles.show_more}>
          Show More
        </button>
      </div>
    </div>
  );
}

export default TeacherCard;
