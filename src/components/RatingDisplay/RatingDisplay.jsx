import React from "react";
import styles from "./RatingDisplay.module.scss";

function RatingDisplay({ rating, pageClass }) {
  return (
    <div className={`${pageClass}`}>
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`fa-solid fa-star ${
            i < rating ? styles.colored : styles.empty
          }`}
        ></i>
      ))}
    </div>
  );
}

export default RatingDisplay;