import React, { useState } from "react";
import styles from "./FicheLogement.module.scss";
import Collapsible from "/src/components/Collapsible/Collapsible";
import ImageSlider from "/src/components/ImageSlider/ImageSlider";
import RatingDisplay from "/src/components/RatingDisplay/RatingDisplay";
import useFetch from "../../hooks/useFetch";
import { useParams, useLocation } from "react-router-dom";

// FicheLogement est un composant qui affiche les détails d'un logement spécifique.
// Il utilise les données passées en paramètre par le composant parent ou les récupère
function FicheLogement() {
  // Récupération de l'ID du logement à partir des paramètres de l'URL
  const { id } = useParams();
  // Récupération de l'état de l'emplacement actuel
  // pour vérifier si des données ont été passées en paramètre
  const location = useLocation();
  // Récupération des données passées en paramètre par le composant parent
  const passedData = location.state?.data;

  let data;
  let loading;
  let error;

  // Si des données ont été passées en paramètre, on les utilise
  if (passedData) {
    data = passedData;
    console.log("Utilisation de passedData", data);
  } else {
    // Sinon, on utilise le hook useFetch pour récupérer les données
    ({ data, loading, error } = useFetch(id));
    console.log("Utilisation de useFetch", data);
    // Si les données sont en cours de chargement, on affiche un message de chargement
    // ainsi on évite d'afficher des données non existantes
    if (loading) return <div>Loading...</div>;
    // Si une erreur est retournée par useFetch, on affiche un message d'erreur
    if (error) return <div>Erreur: {error}</div>;
  }

  // Affichage des détails du logement
  return (
    <section className={styles.section}>
      <ImageSlider
        pictures={data.pictures}
        pageClass={styles.sliderContainer}
      />
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

        {/* On réutilise de composant Collapsible utilisé sur la page About */}
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
