import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/botsman-test" className={css.logoFooter}>
            <img src={logoMaxFooter} alt="logo" />
          </NavLink>
        </div>

        <PolicyInfo />
      </div>
    </footer>
  );
}

export default Footer;
