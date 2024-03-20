import React from "react";

import css from "./Header.module.css";
import HeaderNav from "components/Header/HeaderNav/HeaderNav";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

function Header() {
  return (
    <header className={`${css.header} ${css.pageHeader}`}>
      <div className={`${css.headerContainer} ${css.container}`}>
        <div className={css.headerMob}>
          <HeaderLogo />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
