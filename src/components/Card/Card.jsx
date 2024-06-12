import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Card.module.scss";

// Card est un composant sous la forme d'une carte cliquable qui affiche la photo de cover 
// et le titre du logement
function Card({ data }) {
  const navigate = useNavigate();

  return (
    <>
    {/* Carte cliquable, nous évitons de placer tous les éléments dans une balise <a> 
    pour ne pas nuire à l'accessibilité. 
    Actuellement, la carte est uniquement utilisée dans une liste, la balise <ul> 
    se trouve dans le composant parent. */}
      <li
        className={styles.card}
        onClick={() => navigate(`logement/${data.id}`, { state: { data } })}
      >
        <img src={data.cover} alt={data.title} className={styles.img} />
        <Link
          to={{ pathname: `logement/${data.id}`, state: { data } }}
          className={styles.link}
        >
          {data.title}
        </Link>
      </li>
    </>
  );
}

export default Card;
