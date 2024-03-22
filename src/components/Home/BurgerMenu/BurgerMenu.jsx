import React from "react";

import css from "./BurgerMenu.module.css";
import BtnClose from "./BtnClose/BtnClose";
import BurgerMenuBox from "./BurgerMenuBox/BurgerMenuBox";
import BurgerMenuSocial from "components/SocialMenu/SocialMenu";

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
