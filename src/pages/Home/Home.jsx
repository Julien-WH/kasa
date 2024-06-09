import React from "react";
import Cards from "/src/components/Cards/Cards";
import PageBanner from "../../components/PageBanner/PageBanner";
import styles from "./Home.module.scss";

function Home() {
  return (
    <section className={styles.section}>
      <PageBanner page="homePage" />
      <Cards />
    </section>
  );
}

export default Home;
