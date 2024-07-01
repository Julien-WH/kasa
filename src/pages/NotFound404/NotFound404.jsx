import React from "react";
import styles from "./NotFound404.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFound404() {
  useEffect(() => {
    document.title =
      "Page introuvable - Votre Solution de Location d'Appartements entre Particuliers";
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound404;
