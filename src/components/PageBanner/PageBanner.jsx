import React from "react";
import styles from "./PageBanner.module.scss";
import aboutHeader from "../../assets/images/about-header.png";
import homeHeader from "../../assets/images/home-header.png";

// Les données de chaque page sont stockées dans un objet
const pageData = {
  aboutPage: {
    title: "",
    img: aboutHeader,
    alt: "Une photo d'un paysage avec des montagnes et une forêt de sapins.",
  },
  homePage: {
    title: "Chez vous, partout et ailleurs",
    img: homeHeader,
    alt: "Une photo d'une falaise en bord de mer.",
    dropshadow: "0px 4px 4px 0px #00000040",
  },
};

// Le composant PageBanner prend en paramètre le nom de la page et affiche la bannière correspondante
// Ainsi que le titre s'il est défini
function PageBanner({ page }) {
  return (
    <header className={styles.header} style={{ boxShadow: pageData[page].dropshadow || '' }}>
      <img
        className={styles.img}
        src={pageData[page].img}
        alt={pageData[page].alt}
      />
      <h1 className={styles.title}>{pageData[page].title}</h1>
    </header>
  );
}

export default PageBanner;
