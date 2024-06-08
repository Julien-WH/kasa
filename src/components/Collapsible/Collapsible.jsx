import React from "react";
import styles from "./Collapsible.module.scss";

function Collapsible({ title, children, pageClass }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`${styles.container} ${pageClass} `}>
      <button className={isOpen ? `${styles.open}` : ""} onClick={() => setIsOpen(!isOpen)}>{title}</button>
      <p className={`${styles.content} ${isOpen ? `${styles.open}` : ""}`}>{children}</p>
    </div>
  );
}

export default Collapsible;
