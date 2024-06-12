import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";

// Header est un composant qui affiche le logo de Kasa et la navigation
function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo de Kasa" className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NavLink
              to="/"
              /* isActive vérifie si le chemin actuel correspond à celui de la page */
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
