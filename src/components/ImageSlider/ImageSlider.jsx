import React from "react";
import { useState } from "react";
import styles from "./ImageSlider.module.scss";

function ImageSlider({ pictures, pageClass }) {
  const [index, setIndex] = useState(0);

  function showNextImg() {
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  }

  function showPrevImg() {
    setIndex(index === 0 ? pictures.length - 1 : index - 1);
  }

  return (
    <div className={`${styles.container} ${pageClass} `}>
      <div className={styles.imgContainer}>
        {pictures.map((picture, i) => (
          <img
            className={styles.img}
            style={{ translate: `${-100 * index}%` }}
            key={i}
            src={picture}
            alt={`Photo du slider ${i + 1}`}
          />
        ))}
      </div>
      {pictures.length > 1 && (
        <>
          <button
            onClick={showPrevImg}
            className={`${styles.button} ${styles.prev}`}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={showNextImg}
            className={`${styles.button} ${styles.next}`}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </>
      )}
      {pictures.length > 1 && (
        <div className={styles.dots}>
          {pictures.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={styles.dot}>
              {index === i ? (
                <i className="fa-solid fa-circle-dot"></i>
              ) : (
                <i className="fa-regular fa-circle"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
