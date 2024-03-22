import React from "react";
import { NavLink } from "react-router-dom";

import css from "./BurgerMenuBox.module.css";

function BurgerMenuBox() {
  return (
    <div>
      <div className={css.burgerMenu__box}>
        <ul className={css.burgerMenu__list}>
          <li className={css.burgerMenu__item}>
            <NavLink to="/catalog" className={css.burgerMenu__link}>
              Каталог
            </NavLink>
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
    </div>
  );
}

export default BurgerMenuBox;
