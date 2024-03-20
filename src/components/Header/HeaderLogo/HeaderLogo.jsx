import React from "react";
import logo from "../../../img/logoBotsmanMin.svg";

import css from "./HeaderLogo.module.css";

function HeaderLogo() {
  return (
    <div>
      <div className={css.logo}>
        <a href="./index.html" className={css.logoS}>
          <img src={logo} alt="logo" className={css.logoS} />
        </a>
      </div>
    </div>
  );
}

export default HeaderLogo;
