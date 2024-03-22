import React from "react";
import { NavLink } from "react-router-dom";

import css from "./Footer.module.css";
import logoMaxFooter from "../../../img/logoBotsmanMax.svg";
import SocialMenu from "../SocialMenu";
import FooterListContent from "./FooterListContent";
import PolicyInfo from "../PolicyInfo";

function Footer() {
  return (
    <footer className={css.footer} id="contact">
      <div className={css.footerContainer}>
        <div className={css.footerGrid}>
          <FooterListContent />
        </div>

        <SocialMenu />

        <div>
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
