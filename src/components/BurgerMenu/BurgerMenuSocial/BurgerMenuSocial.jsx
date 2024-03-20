import React from "react";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

import css from "./BurgerMenuSocial.module.css";

function BurgerMenuSocial() {
  return (
    <div>
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
  );
}

export default BurgerMenuSocial;
