import React from "react";
import styles from "./About.module.scss";
import aboutDatas from "../../../datas/aboutDatas.json";
import Collapsible from "../../components/Collapsible/Collapsible";
import PageBanner from "../../components/PageBanner/PageBanner";

function About() {
  return (
    <section className={styles.section}>
<PageBanner page="aboutPage" />

      {/* Ajout des collapsibles avec les données du json */}
      {aboutDatas.map((item, index) => (
        <Collapsible key={index} pageClass={styles.content} title={item.title}>
          {item.content}
        </Collapsible>
      ))}
    </section>
  );
}

export default About;
