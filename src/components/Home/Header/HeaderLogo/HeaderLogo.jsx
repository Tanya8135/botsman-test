import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../../img/logoBotsmanMin.svg'

import css from "./HeaderLogo.module.css";

function HeaderLogo() {
  return (
    <div>
      <div className={css.logo}>
        <NavLink to="/botsman-test" className={css.logoS}>
          <img src={logo} alt="logo" className={css.logoS} />
        </NavLink>
      </div>
    </div>
  );
}

export default HeaderLogo;
