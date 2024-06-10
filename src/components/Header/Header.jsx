import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'; 
import logo from '../../assets/images/logo.svg'

function Header() {
    const [activeLink, setActiveLink] = React.useState('');
    // Possibilité d'utiliser le composant NavLink de react-router-dom pour ajouter une classe active sur le lien actif
    // ex : <NavLink exact to="/" activeClassName={styles.active}>Accueil</NavLink>

return (
    <header className={styles.header}>
        <img src={logo} alt="Logo de Kasa" className={styles.logo} />
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link to="/" className={activeLink === '/' ? styles.active : ''} onClick={() => setActiveLink("/")}>Accueil</Link></li>
                <li className={styles.li}><Link to="/about" className={activeLink === '/about' ? styles.active : ''} onClick={() => setActiveLink("/about")}>À propos</Link></li>
            </ul>
        </nav>
    </header>
);
}

export default Header;