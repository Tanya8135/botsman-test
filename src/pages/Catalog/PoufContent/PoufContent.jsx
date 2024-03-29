import React, { useState } from "react";
import listPouf from "js/PoufsList";

import css from "./PoufContent.module.css";

import BtnCatalogLoadMore from "../BtnCatalogLoadMore";
import BtnCloseCatalog from "../BtnCloseCatalog";

function PoufContent() {
  const [addImg, setAddImg] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleLoadMoreClick = () => {
    const nextIndex = startIndex + 4;

    if (nextIndex >= listPouf.length) {
      setAddImg([...addImg, ...listPouf.slice(startIndex)]);
      setStartIndex(listPouf.length);
      setShowLoadMore(false);
    } else {
      setAddImg([...addImg, ...listPouf.slice(startIndex, nextIndex)]);
      setStartIndex(nextIndex);
    }
  };

  const handleCloseCatalof = () => {
    const displayShow = 0;
    setAddImg(listPouf.slice(0, displayShow));
    setStartIndex(displayShow);
    setShowLoadMore(true);
  };
  return (
    <div>
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
        <BtnCatalogLoadMore
          onClick={handleLoadMoreClick}
          disabled={startIndex >= listPouf.length}
        />
      ) : (
        <BtnCloseCatalog onClick={handleCloseCatalof} />
      )}
    </div>
  );
}

export default PoufContent;
