import React from "react";
import styles from "./FicheLogement.module.scss";
import { useLocation } from "react-router-dom";
import Collapsible from "/src/components/Collapsible/Collapsible";
import ImageSlider from "/src/components/ImageSlider/ImageSlider";
import RatingDisplay from "/src/components/RatingDisplay/RatingDisplay";

function FicheLogement() {
  const location = useLocation();
  const data = location.state.data;

  return (
    <section className={styles.section}>
      <ImageSlider pictures={data.pictures} pageClass={styles.sliderContainer} />
      <h1 className={styles.title}>{data.title}</h1>

      <div className={styles.location}>{data.location}</div>

      <div className={styles.tags}>
        {data.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <RatingDisplay rating={data.rating} pageClass={styles.rating} />

      <div className={styles.hostProfileContainer}>
        <div className={styles.hostProfile}>
          <div className={styles.hostName}>{data.host.name}</div>
          <img
            className={styles.hostPicture}
            src={data.host.picture}
            alt={`Photo de ${data.host.name}`}
          />
        </div>
      </div>

      <Collapsible title="Description" pageClass={styles.description}>
        {data.description}
      </Collapsible>

      <Collapsible title="Équipements" pageClass={styles.equipments}>
        <ul>
          {data.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      </Collapsible>
    </section>
  );
}

export default FicheLogement;
