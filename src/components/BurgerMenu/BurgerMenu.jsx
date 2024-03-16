import React from "react";
import { IoCloseOutline } from "react-icons/io5";

import css from "./BurgerMenu.module.css";

function BurgerMenu() {
  return (
    <div className={`${css.menuContainer} ${css.jsMenuContainer}`}>
      {/* btn-close */}
      <button
        className={`${css.menuToggle} ${css.menuClose} ${css.jsCloseMenu}`}
      >
        <IoCloseOutline className={css.menuCloseIcon} />
      </button>
    </div>
  );
}

export default BurgerMenu;
