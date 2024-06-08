import React from 'react';
import styles from './NotFound404.module.scss';
import { Link } from 'react-router-dom';

function NotFound404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className={styles.link}>Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound404;