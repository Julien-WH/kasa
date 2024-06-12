import React from "react";
import styles from "./RatingDisplay.module.scss";

// Le composant RatingDisplay affiche une note sous forme d'étoiles
// La note est passée en paramètre par le composant parent
function RatingDisplay({ rating, pageClass }) {
  return (
    <div className={`${pageClass} ${styles.stars}`}>
      {/* On crée un tableau de 5 éléments (pour 5 étoiles) */}
      {[...Array(5)].map((_, i) => (
        // Pour chaque élément, on affiche une étoile
        <i
          key={i}
          // Si l'index de l'étoile est inférieur à la note, l'étoile est colorée, sinon elle est vide
          // Ex : si la note est 3, l'index sera de 0 à 2, donc les étoiles 0, 1 et 2 seront colorées
          className={`fa-solid fa-star  ${
            i < rating ? styles.colored : styles.empty
          }`}
        ></i>
      ))}
    </div>
  );
}

export default RatingDisplay;
