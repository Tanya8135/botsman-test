import React, { useState } from "react";
import { SlPhone } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

import css from "./HeaderNav.module.css";
import BurgerMenu from "components/Home/BurgerMenu";

function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className={css.headerNavMob}>
        <div className={css.iconPhoneBox}>
          <a href="tel:+380964875185" className={css.iconPhone1}>
            <SlPhone className={css.iconPhone} />
          </a>
        </div>

        <div className={css.burgerMenuBox}>
          <button
            type="button"
            className={`${css.btnBurgerMenu}`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <FiMenu className={css.burgerMenuIcon} />
          </button>
        </div>
      </div>
      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderNav;
