import React, { useState } from "react";
import logo from "../../img/logoBotsmanMin.svg";
import { SlPhone } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import css from "./Header.module.css";

import BurgerMenu from "components/BurgerMenu/BurgerMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${css.header} ${css.pageHeader}`}>
      <div className={`${css.headerContainer} ${css.container}`}>
        <div className={css.headerMob}>
          <div className={css.logo}>
            <a href="./index.html" className={css.logoS}>
              <img src={logo} alt="logo" className={css.logoS} />
            </a>
          </div>

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
        </div>
      </div>
      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
