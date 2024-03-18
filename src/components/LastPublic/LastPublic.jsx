import React from "react";

import css from "./LastPublic.module.css";

function LastPublic() {
  return (
    <div>
      <section className={css.lastPublic} id="public">
        <h2
          className={`${css.sectionTitle__dark} ${css.sectionTitle__lastPublic}`}
        >
          <span className={css.letter}>П</span>оследние публикации
        </h2>

        <div className={css.lpCatalogBox} id="catalog">
          <a href="./catalog.html" className={css.lpCatalog}>
            Перейти до каталогу
            <div className={css.lpArrow}>
              <svg width="24" height="24">
                <use href="./images/icons.svg#icon-arrow"></use>
              </svg>
            </div>
          </a>
        </div>

        <article className={css.cardProd}>
          <div className={`${css.swiperContainer} ${css.lpImg}`}>
            <ul className={`${css.swiperWrapper} ${css.lpImgList}`}>
              <li className={`${css.swiperSlide} ${css.lpItem}`}>
                <article className={`${css.lpCard} ${css.overlayCard}`}>
                  <div className={css.lpImgBox}>
                    <img
                      srcSet={`
                ${process.env.PUBLIC_URL}/images/mob/public-slide/pink_pouf@2_mob_270.png 540w,
                ${process.env.PUBLIC_URL}/images/mob/public-slide/pink_pouf_mob_270.png   270w
                `}
                      sizes="(min-width: 375px) 270px, 100vw"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/mob/public-slide/pink_pouf_mob_270.png"
                      }
                      alt="Pink puof"
                    />
                    <p className={css.overlayText}>
                      Краткая информация. Цена <a href="/">link</a>
                    </p>
                  </div>

                  <p className={css.lpName}>pink pouf</p>
                </article>
              </li>
              <li className={`${css.swiperSlide} ${css.lpItem}`}>
                <article className={css.lpCard}>
                  <div className={`${css.lpImgBox} ${css.overlayCard}`}>
                    <img
                      srcSet={`
                      ${process.env.PUBLIC_URL}/images/mob/public-slide/black_pouf@2_mob_270.png 540w,
                      ${process.env.PUBLIC_URL}/images/mob/public-slide/black_pouf@2_mob_270.png 540w
                      `}
                      sizes="(min-width: 375px) 270px, 100vw"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/mob/public-slide/black_pouf_mob_270.png"
                      }
                      alt="Black puof"
                    />

                    <p className={css.overlayText}>
                      Краткая информация. Цена <a href="/">link</a>
                    </p>
                  </div>

                  <p className={css.lpName}>Black puof</p>
                </article>
              </li>
              <li className={`${css.swiperSlide} ${css.lpItem}`}>
                <article className={css.lpCard}>
                  <div className={`${css.lpImgBox} ${css.overlayCard}`}>
                    <img
                      srcSet={`
                    ${process.env.PUBLIC_URL}/images/mob/public-slide/blue_pouf@2_mob_270.png 540w,
                    ${process.env.PUBLIC_URL}/images/mob/public-slide/blue_pouf_mob_270.png 270w
                    `}
                      sizes="(min-width: 375px) 270px, 100vw"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/mob/public-slide/blue_pouf_mob_270.png"
                      }
                      alt="Blue puof"
                    />

                    <p className={css.overlayText}>
                      Краткая информация. Цена <a href="/">link</a>
                    </p>
                  </div>
                  <p className={css.lpName}>Blue puof</p>
                </article>
              </li>
              <li classNamclassName={`${css.swiperSlide} ${css.lpItem}`}>
                <article className={css.lpCard}>
                  <div className={`${css.lpImgBox} ${css.overlayCard}`}>
                    <img
                      srcSet={`
                    ${process.env.PUBLIC_URL}/images/mob/public-slide/gray_pouf@2_mob_270.png 540w,
                    ${process.env.PUBLIC_URL}/images/mob/public-slide/gray_pouf_mob_270.png 270w
                    `}
                      sizes="(min-width: 375px) 270px, 100vw"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/mob/public-slide/gray_pouf_mob_270.png"
                      }
                      alt="Gray puof"
                    />

                    <p className={css.overlayText}>
                      Краткая информация. Цена <a href="/">link</a>
                    </p>
                  </div>
                  <p className={css.lpName}>Gray puof</p>
                </article>
              </li>
              <li classNamclassName={`${css.swiperSlide} ${css.lpItem}`}>
                <article className={css.lpCard}>
                  <div className={`${css.lpImgBox} ${css.overlayCard}`}>
                    <img
                      srcSet={`
                    ${process.env.PUBLIC_URL}/images/mob/public-slide/green_pouf@2_mob_270.png 540w,
                    ${process.env.PUBLIC_URL}/images/mob/public-slide/green_pouf_mob_270.png 270w
                    `}
                      sizes="(min-width: 375px) 270px, 100vw"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/mob/public-slide/green_pouf_mob_270.png"
                      }
                      alt="Green puof"
                    />

                    <p className={css.overlayText}>
                      Краткая информация. Цена <a href="/">link</a>
                    </p>
                  </div>
                  <p className={css.lpName}>Green puof</p>
                </article>
              </li>
              <li classNamclassName={`${css.swiperSlide} ${css.lpItem}`}>
                <article className={css.lpCard}>
                  <div className={`${css.lpImgBox} ${css.overlayCard}`}>
                    <img
                      srcSet={`
                    ${process.env.PUBLIC_URL}/images/mob/public-slide/terracotta_pouf@2_mob_270.png 540w,
                    ${process.env.PUBLIC_URL}/images/mob/public-slide/terracotta_pouf_mob_270.png 270w
                    `}
                      sizes="(min-width: 375px) 270px, 100vw"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/mob/public-slide/terracotta_pouf_mob_270.png"
                      }
                      alt="Terracotta pouf"
                    />

                    <p className={css.overlayText}>
                      Краткая информация. Цена <a href="/">link</a>
                    </p>
                  </div>

                  <p className={css.lpName}>Terracotta pouf</p>
                </article>
              </li>
            </ul>
            <div className={css.swiperScrollbar}></div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default LastPublic;
