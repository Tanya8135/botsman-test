import { TfiSearch } from "react-icons/tfi";

import css from "./Search.module.css";

function Search() {
  return (
    <div>
      <section className={css.search}>
        <div className={css.serachContainer}>
          <form className={css.searchForm} id="search-form">
            <input
              className={css.searchForm__input}
              type="text"
              name="searchQuery"
              autoComplete="off"
              placeholder="Пошук"
            />

            <button type="submit" className={css.searchForm__btn}>
              <TfiSearch className={css.searchIcon} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Search;
