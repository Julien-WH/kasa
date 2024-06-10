import React from "react";
import styles from "./Footer.module.scss";
import footerLogo from "../../assets/images/footer-logo.png";
function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footer__logo} src={footerLogo} alt="Logo de Kasa" /> 
      <p className={styles.footer__content}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;