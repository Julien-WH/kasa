import React from "react";
import styles from "./Cards.module.scss";
import logementDatas from "/datas/logements.json";
import Card from "../Card/Card";

function Home() {

  return (
    <>
      <ul className={styles.cards}>
        {logementDatas.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </ul>
    </>
  );
}

export default Home;
