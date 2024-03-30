import css from "../PoufContent/PoufContent.module.css";

import BtnCatalogLoadMore from "../BtnCatalogLoadMore";

function TableContent() {
  return (
    <div>
      <div className={css.catalogTable}>
        <h2 className={css.catalogPoufs__title}>Столи</h2>
        <ul className={css.catalogList}>
          <li className={css.catalogItem}>
            <article>
              <img
                srcSet="
                ./images/mob/catalog/table/rodos_table_white_160.png   160w,
                ./images/mob/catalog/table/rodos_table_white@2_160.png 320w
              "
                sizes="(min-width: 375px) 160px, 100vw"
                src="./images/mob/catalog/table/rodos_table_white_160.png"
                alt="White table"
              />
            </article>
          </li>
          <li className={css.catalogItem}>
            <article>
              <img
                srcSet="
                ./images/mob/catalog/table/mykolaev_table_160.png   160w,
                ./images/mob/catalog/table/mykolaev_table@2_160.png 320w
              "
                sizes="(min-width: 375px) 160px, 100vw"
                src="./images/mob/catalog/table/mylolaev_table_160.png"
                alt="Mykolaev Table"
              />
            </article>
          </li>
          <li className={css.catalogItem}>
            <article>
              <img
                srcSet="
                ./images/mob/catalog/table/rodos_table_red_160.png   160w,
                ./images/mob/catalog/table/rodos_table_red@2_160.png 320w
              "
                sizes="(min-width: 375px) 160px, 100vw"
                src="./images/mob/catalog/table/rodos_table_red_160.png"
                alt="'Rodos' red table"
              />
            </article>
          </li>
          <li className={css.catalogItem}>
            <article>
              <img
                srcSet="
                ./images/mob/catalog/table/rodos_table_dark-gray_160.png   160w,
                ./images/mob/catalog/table/rodos_table_dark-gray@2_160.png 320w
              "
                sizes="(min-width: 375px) 160px, 100vw"
                src="./images/mob/catalog/table/rodos_table_dark-gray_160.png"
                alt="'Rodos' dark-gray table"
              />
            </article>
          </li>
        </ul>
      </div>
      <BtnCatalogLoadMore />
    </div>
  );
}

export default TableContent;
