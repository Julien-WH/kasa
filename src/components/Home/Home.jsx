import React from "react";
import styles from "./Home.module.scss";
import logementDatas from "/datas/logements.json";

function Home() {
  return (
    <section className={styles.section}>
      <ul className={styles.cards}>
        {logementDatas.map((data) => (
          <li key={data.id} className={styles.card}>
            <img src={data.cover} alt={data.title} className={styles.img} />
            <a href="#" className={styles.title}>
              {data.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
