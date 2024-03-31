import { NavLink } from "react-router-dom";

import Search from "components/Catalog/Search";
import PoufContent from "components/Catalog/PoufContent";
import SofaContent from "components/Catalog/SofaContent";
import TableContent from "components/Catalog/TableContent";
import Footer from "components/Home/Footer";

import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div>
      <section className={css.catalog}>
        <div className={"container"}>
          {/* for deletion */}
          <NavLink to="/" className={css.catalogBtnBack}>
            Back
          </NavLink>

          <Search />
          <PoufContent />
          <SofaContent />
          <TableContent />
          <Footer />
        </div>
      </section>
    </div>
  );
}
