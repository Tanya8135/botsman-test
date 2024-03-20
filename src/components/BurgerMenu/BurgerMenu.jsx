import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

import css from "./BurgerMenu.module.css";

function BurgerMenu({ isMenuOpen, toggleMenu }) {
  const closeMenu = () => {
    toggleMenu();
  };

  return (
    <div
      className={`${css.menuContainer} ${
        isMenuOpen ? css.jsMenuContainer : ""
      }`}
    >
      {/* btn-close */}
      {isMenuOpen && (
        <div className={css.burgerMenu}>
          <button
            className={`${css.menuToggle} ${css.menuClose} ${css.jsCloseMenu}`}
            onClick={closeMenu}
          >
            <IoCloseOutline className={css.menuCloseIcon} />
          </button>

          <div className={css.burgerMenu__box}>
            <ul className={css.burgerMenu__list}>
              <li className={css.burgerMenu__item}>
                <a href="/catalog.html" className={css.burgerMenu__link}>
                  Каталог
                </a>
              </li>
              <li className={css.burgerMenu__item}>
                <a href="#individ-furniture" className={css.burgerMenu__link}>
                  Индивидуальная мебель
                </a>
              </li>
              <li className={css.burgerMenu__item}>
                <a href="#our-history" className={css.burgerMenu__link}>
                  Наша история
                </a>
              </li>
              <li className={css.burgerMenu__item}>
                <a href="#public" className={css.burgerMenu__link}>
                  Публикации
                </a>
              </li>
              <li className={css.burgerMenu__item}>
                <a href="#info" className={css.burgerMenu__link}>
                  Информация
                </a>
              </li>
              <li className={css.burgerMenu__item}>
                <a href="#contact" className={css.burgerMenu__link}>
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className={css.bmS}>
            <ul className={css.bmS__list}>
              <li className={css.bmS__item}>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  className={css.bmS__link}
                >
                  <BsInstagram className={css.socialIconBM} />
                </a>
              </li>
              <li className={css.bmS__item}>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener nofollow noreferrer"
                  className={css.bmS__link}
                >
                  <RiFacebookFill className={css.socialIconBM} />
                </a>
              </li>
              <li className={css.bmS__item}>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.bmS__link}
                >
                  <FaTelegramPlane className={css.socialIconBM} />
                </a>
              </li>
            </ul>
            <div className={css.bmS__tel}>
              <a href="tel:+380996384537" className={css.bmS__link}>
                +38 (099)-638-45-37
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;