import React from "react";
// import { IoCloseOutline } from "react-icons/io5";

import css from "./BurgerMenu.module.css";
import BtnClose from "./BtnClose/BtnClose";
import BurgerMenuBox from "./BurgerMenuBox/BurgerMenuBox";
import BurgerMenuSocial from "./BurgerMenuSocial/BurgerMenuSocial";

function BurgerMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`${css.menuContainer} ${
        isMenuOpen ? css.jsMenuContainer : ""
      }`}
    >
      {/* btn-close */}
      {isMenuOpen && (
        <div className={css.burgerMenu}>
          <BtnClose toggleMenu={toggleMenu} />
          <BurgerMenuBox />
          <BurgerMenuSocial />
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
