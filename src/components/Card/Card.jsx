import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({ data }) {
  const navigate = useNavigate();

  return (
    <>
      <li
        className={styles.card}
        onClick={() => navigate(`logement/${data.id}`)}
      >
        <img src={data.cover} alt={data.title} className={styles.img} />
        <Link to={`logement/${data.id}`} className={styles.link}>
          {data.title}
        </Link>
      </li>
    </>
  );
}

export default Card;
