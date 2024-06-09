import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Cards.module.scss";
import logementDatas from "/datas/logements.json";
import Card from "../Card/Card";

function Home() {
  const navigate = useNavigate();

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
