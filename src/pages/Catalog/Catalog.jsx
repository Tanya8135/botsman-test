import { NavLink } from "react-router-dom";

import Search from "./Search";

import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div>
      {/* for deletion */}
      <NavLink to="/" className={css.catalogBtnBack}>
        Back
      </NavLink>

      <Search />
    </div>
  );
}
