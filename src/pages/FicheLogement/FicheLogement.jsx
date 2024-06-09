import React from "react";
import styles from "./FicheLogement.module.scss";
import { useLocation } from "react-router-dom";
import Collapsible from "/src/components/Collapsible/Collapsible";

function FicheLogement() {
  const location = useLocation();
  const data = location.state.data;

  return (
    <section className={styles.section}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={data.cover} alt={data.title} />
      </div>
      <h1 className={styles.title}>{data.title}</h1>

      <div className={styles.location}>{data.location}</div>

      <span className={styles.tags}>
        {data.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </span>

      <span className={styles.rating}>{data.rating}</span>

      <div className={styles.hostProfile}>
        <span className={styles.hostName}>{data.host.name}</span>
        <img src={data.host.picture} alt={`Photo de ${data.host.name}`} />
      </div>

      <Collapsible title="Description" pageClass={styles.description}>
        {data.description}
      </Collapsible>

      <Collapsible title="Équipements" pageClass={styles.equipments}>
        <ul>
          {data.equipments.map((equipment, index) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      </Collapsible>
    </section>
  );
}

export default FicheLogement;
