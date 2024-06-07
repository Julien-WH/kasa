import React from "react";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footer__logo} src="src/assets/images/footer-logo.png" alt="" /> 
      <p className={styles.footer__content}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;