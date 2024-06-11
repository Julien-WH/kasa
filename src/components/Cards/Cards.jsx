import React from "react";
import styles from "./Cards.module.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

function Cards() {
  const {data, loading, error} = useFetch();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <>
    <ul className={styles.cards}>
      {data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </ul>
  </>
  );
  // return (
    // <>
    //   <ul className={styles.cards}>
    //     {data.map((data) => (
    //       <Card key={data.id} data={data} />
    //     ))}
    //   </ul>
    // </>
  // );
}

export default Cards;
