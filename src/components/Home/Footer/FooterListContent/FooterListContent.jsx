import React from "react";

import css from "./FooterListContent.module.css";

function FooterListContent() {
  return (
    <div>
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
  );
}

export default FooterListContent;
