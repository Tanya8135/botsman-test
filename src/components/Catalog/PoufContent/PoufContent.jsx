import React from "react";
import usePoufBtns from "hooks/usePoufBtns";
import listPouf from "js/PoufsList";

import css from "./PoufContent.module.css";

import BtnCatalogLoadMore from "../BtnCatalogLoadMore";
import BtnCloseCatalog from "../BtnCloseCatalog";

function PoufContent() {
  const { addImg, showLoadMore, handleLoadMoreClick, handleCloseCatalof } =
    usePoufBtns(listPouf);
  return (
    <div className={css.catalogContainer}>
      <div className={css.catalogPoufs}>
        <h2 className={css.catalogPoufs__title}>Пуфи</h2>

        <ul className={css.catalogList}>
          <li className={css.catalogItem}>
            <article>
              <img
                srcSet={`
                ${process.env.PUBLIC_URL}/images/mob/catalog/pouf/pink_poug@2_160.png 320w,
                ${process.env.PUBLIC_URL}/images/mob/catalog/pouf/pink_poug_160.png   160w
                `}
                sizes="(min-width: 375px) 160px, 100vw"
                src={
                  process.env.PUBLIC_URL +
                  "/images/mob/catalog/pouf/pink_poug_160.png"
                }
                alt="Pink pouf"
              />
            </article>
          </li>
          <li className={css.catalogItem}>
            <article>
              <img
                srcSet={`
                ${process.env.PUBLIC_URL}/images/mob/catalog/pouf/black_pouf@2_160.png 320w,
                ${process.env.PUBLIC_URL}/images/mob/catalog/pouf/black_pouf_160.png   160w
                `}
                sizes="(min-width: 375px) 160px, 100vw"
                src={
                  process.env.PUBLIC_URL +
                  "/images/mob/catalog/pouf/black_pouf_160.png"
                }
                alt="Black pouf"
              />
            </article>
          </li>
          <li className={css.catalogItem}>
            <article>
              <img
                srcSet={`
                ${process.env.PUBLIC_URL}/images/mob/catalog/pouf/gray_pouf@2_160.png 320w,
                ${process.env.PUBLIC_URL}images/mob/catalog/pouf/gray_pouf_160.png   160w
                `}
                sizes="(min-width: 375px) 160px, 100vw"
                src={
                  process.env.PUBLIC_URL +
                  "/images/mob/catalog/pouf/gray_pouf_160.png"
                }
                alt="Gray pouf"
              />
            </article>
          </li>
          <li className={css.catalogItem}>
            <article>
              <img
                srcSet={`
                ${process.env.PUBLIC_URL}/images/mob/catalog/pouf/blue_pouf@2_160.png 320w,
                ${process.env.PUBLIC_URL}/images/mob/catalog/pouf/blue_pouf_160.png   160w
                `}
                sizes="(min-width: 375px) 160px, 100vw"
                src={
                  process.env.PUBLIC_URL +
                  "/images/mob/catalog/pouf/blue_pouf_160.png"
                }
                alt="Blue pouf"
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

export default PoufContent;
