import { BsArrowRight } from "react-icons/bs";

import css from "./LastPublickLinkCatalog.module.css";

function LastPublickLinkCatalog() {
  return (
    <div>
      <div className={css.lpCatalogBox} id="catalog">
        <a href="./catalog.html" className={css.lpCatalog}>
          Перейти до каталогу
          <div className={css.lpArrow}>
            <BsArrowRight className={css.arrowNext} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default LastPublickLinkCatalog;
