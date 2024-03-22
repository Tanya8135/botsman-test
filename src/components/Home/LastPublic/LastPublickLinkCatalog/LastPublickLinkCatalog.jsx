// import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import css from "./LastPublickLinkCatalog.module.css";

function LastPublickLinkCatalog() {
  return (
    <div>
      <div className={css.lpCatalogBox} id="catalog">
        {/* <a href="/" className={css.lpCatalog}>
          Перейти до каталогу
          <div className={css.lpArrow}>
            <BsArrowRight className={css.arrowNext} />
          </div>
        </a> */}
        <NavLink to="/catalog">Перейти до каталогу</NavLink>
      </div>
    </div>
  );
}

export default LastPublickLinkCatalog;
