import useTableBtns from "hooks/useTableBtns";
import listTable from "js/itemTables";

import css from "../PoufContent/PoufContent.module.css";

import BtnCatalogLoadMore from "../BtnCatalogLoadMore";
import BtnCloseCatalog from "../BtnCloseCatalog";

function TableContent() {
  const { addImg, showLoadMore, handleLoadMoreClick, handleCloseCatalof } =
    useTableBtns(listTable);
  return (
    <div className={css.catalogContainer}>
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
          {addImg.map((image, index) => (
            <li key={index} className={css.catalogItem}>
              <article>
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                  alt={image.alt}
                />
              </article>
            </li>
          ))}
        </ul>
      </div>
      {showLoadMore ? (
        <BtnCatalogLoadMore onClick={handleLoadMoreClick} />
      ) : (
        <BtnCloseCatalog onClick={handleCloseCatalof} />
      )}
    </div>
  );
}

export default TableContent;
