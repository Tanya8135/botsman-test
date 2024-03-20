import React from "react";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

import css from "./Footer.module.css";
import logoMaxFooter from "../../img/logoBotsmanMax.svg";

function Footer() {
  return (
    <footer className={css.footer} id="contact">
      <div className={css.footerContainer}>
        <div className={css.footerGrid}>
          <ul className={css.footerList}>
            <li className={css.footerItem}>
              <a href="#catalog" className={css.footerLink}>
                Каталог
              </a>
            </li>
            <li className={css.footerItem}>
              <a href="#contact" className={css.footerLink}>
                Контакты
              </a>
            </li>
            <li className={css.footerItem}>
              <a href="#individ-furniture" className={css.footerLink}>
                Индивидуальная мебель
              </a>
            </li>
            <li className={css.footerItem}>
              <a href="#info" className={css.footerLink}>
                О компании
              </a>
            </li>
          </ul>
        </div>

        <div className={css.footerSocialContainer}>
          <div className={css.footerTel}>
            <a href="tel:+380996384537" className={css.footerTel__tel}>
              +38 (099)-638-45-37
            </a>
          </div>
          <ul className={css.fsList}>
            <li className={css.fsItem}>
              <a href="/" className={css.fsLink}>
                <BsInstagram className={css.socialIconF} />
              </a>
            </li>
            <li className={css.fsItem}>
              <a href="/" className={css.fsLink}>
                <RiFacebookFill className={css.socialIconF} />
              </a>
            </li>
            <li className={css.fsItem}>
              <a href="/" className={css.fsLink}>
                <FaTelegramPlane className={css.socialIconF} />
              </a>
            </li>
          </ul>
        </div>

        <div className={css.logoFooter}>
          <a href="./index.html">
            <img src={logoMaxFooter} alt="logo" />
          </a>
        </div>

        <div className={css.policyInfoBox}>
          <p className={css.policyInfo}>
            &#169; 2021–2024 Інтернет-магазин «
            <span className={css.policyInfo__transform}>БОЦМАН</span>&#8482;»
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
