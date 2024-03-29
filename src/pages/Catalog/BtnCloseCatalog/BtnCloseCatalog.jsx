import { useState } from "react";
import css from "./BtnCloseCatalog.module.css";

function BtnCloseCatalog({ onClick }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
    onClick();
  };
  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <button className={`${css.btnCloseCatalog} btn`} onClick={handleClick}>
        Закрити
      </button>
    </div>
  );
}

export default BtnCloseCatalog;
