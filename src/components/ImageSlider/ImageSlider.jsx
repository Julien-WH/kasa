import React from "react";
import { useState } from "react";
import styles from "./ImageSlider.module.scss";

// Le composant ImageSlider prend en paramètre un tableau d'images et une classe CSS
// Le tableau d'images provient de la page où le composant est utilisé
function ImageSlider({ pictures, pageClass }) {
  // L'index de l'image actuellement affichée
  // Par défaut, l'index est sur la première image
  const [index, setIndex] = useState(0);

  // Fonction pour afficher l'image suivante
  function showNextImg() {
    // Si l'index est égal à la longueur du tableau, on revient à la première image
    setIndex(index === pictures.length - 1 ? 0 : index + 1);
  }

  // Fonction pour afficher l'image précédente
  function showPrevImg() {
    // Si l'index est égal à 0, on revient à la dernière image
    setIndex(index === 0 ? pictures.length - 1 : index - 1);
  }

  return (
    <div className={`${styles.container} ${pageClass} `}>
      <div className={styles.imgContainer}>
        {/* On mappe sur le tableau d'images pour les afficher */}
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

      {/* Si on a plus d'une image, on affiche les boutons de navigation */}
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

      {/* Si on a plus d'une image, on affiche les points de navigation */}
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
