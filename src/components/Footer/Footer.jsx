import React from "react";

import css from "./Footer.module.css";
import logoMaxFooter from "../../img/logoBotsmanMax.svg";
import SocialMenu from "components/SocialMenu/SocialMenu";
import FooterListContent from "./FooterListContent/FooterListContent";
import PolicyInfo from "components/PolicyInfo/PolicyInfo";

function Footer() {
  return (
    <footer className={css.footer} id="contact">
      <div className={css.footerContainer}>
        <div className={css.footerGrid}>
          <FooterListContent />
        </div>

        <SocialMenu />

        <div className={css.logoFooter}>
          <a href="./index.html">
            <img src={logoMaxFooter} alt="logo" />
          </a>
        </div>

        <PolicyInfo />
      </div>
    </footer>
  );
}

export default Footer;
