import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import css from "./LastPublickLinkCatalog.module.css";

function LastPublickLinkCatalog() {
  return (
    <div>
      <div className={css.lpCatalogBox} id="catalog">
        <NavLink to="/catalog">
          Перейти до каталогу
          <BsArrowRight className={css.arrowNext} />
        </NavLink>
      </div>
    </div>
  );
}

export default LastPublickLinkCatalog;
