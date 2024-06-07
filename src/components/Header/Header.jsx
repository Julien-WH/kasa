import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'; 

function Header() {
return (
    <header className={styles.header}>
        <img src="src\assets\images\logo.svg" alt="Kasa" className={styles.logo} />
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link to="/" className={styles.active}>Accueil</Link></li>
                <li className={styles.li}><Link to="/about">À propos</Link></li>
            </ul>
        </nav>
    </header>
);
}

export default Header;