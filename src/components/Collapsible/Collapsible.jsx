import React from "react";
import styles from "./Collapsible.module.scss";

// Composant repliable qui accepte un titre, un contenu et une 
// classe personnalisée pour le style comme paramètres.
function Collapsible({ title, children, pageClass }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`${styles.container} ${pageClass} `}>
      <button className={isOpen ? `${styles.open}` : ""} onClick={() => setIsOpen(!isOpen)}>{title}</button>
      <div className={`${styles.content} ${isOpen ? `${styles.open}` : ""}`}>{children}</div>
    </div>
  );
}

export default Collapsible;
