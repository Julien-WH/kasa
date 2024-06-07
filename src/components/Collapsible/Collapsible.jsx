import React from "react";
import "./Collapsible.scss";

function Collapsible({ title, children, pageClass }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`collapsibleDiv ${pageClass} `}>
      <button className={isOpen ? "open" : ""} onClick={() => setIsOpen(!isOpen)}>{title}</button>
      <p className={`content ${isOpen ? "open" : ""}`}>{children}</p>
    </div>
  );
}

export default Collapsible;
