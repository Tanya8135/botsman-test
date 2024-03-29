import { NavLink } from "react-router-dom";

import Search from "components/Catalog/Search";
import PoufContent from "components/Catalog/PoufContent";

import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div>
      <section className={css.catalog}>
        <div className={`${css.catalogContainer} ${"container"}`}>
          {/* for deletion */}
          <NavLink to="/" className={css.catalogBtnBack}>
            Back
          </NavLink>

          <Search />
          <PoufContent />
        </div>
      </section>
    </div>
  );
}
