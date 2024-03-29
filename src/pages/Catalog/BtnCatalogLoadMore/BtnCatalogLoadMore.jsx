import { BsArrowRight } from "react-icons/bs";

import css from "./BtnCatalogLoadMore.module.css";

function BtnCatalogLoadMore({ onClick }) {
  return (
    <div>
      <button type="button" className={css.btnLoadMore} onClick={onClick}>
        Показати більше
        <div className={css.btnLoadMore__arrow}>
          <BsArrowRight className={css.nextArrov} />
        </div>
      </button>
    </div>
  );
}

export default BtnCatalogLoadMore;
