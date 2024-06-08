import Collapsible from '../../components/Collapsible/Collapsible';
import React from 'react';
import styles from './About.module.scss';
import data from '../../../datas/aboutDatas.json';

function About() {

  return (
    <section className={styles.section}>
      <header className={styles.header}><img className={styles.img} src="src\assets\images\about-header.jpeg" alt="Une photo d'un paysage avec des montagnes et une forêt de sapins." /></header>
  
  {/* Ajout des collapsibles avec les données du json */}
  {data.map ((item, index) => (
    <Collapsible key={index} pageClass={styles.content} title={item.title}>
      {item.content}
    </Collapsible>
  )
  )}
    </section>
  );
}

export default About;