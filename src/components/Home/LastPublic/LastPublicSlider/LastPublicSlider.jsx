import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import css from "./LastPublicSlider.module.css";
import { Scrollbar } from "swiper/modules";

function LastPublicSlider() {
  return (
    <div>
      <div className={css.cardProd}>
        <div className={`${css.swiperContainer} ${css.lpImg}`}>
          <ul className={`${css.swiperWrapper} ${css.lpImgList}`}>
            <Swiper
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className={css.mySwiper}
            >
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
              <SwiperSlide>
                <li className={`${css.swiperSlide} ${css.lpItem}`}>
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
              </SwiperSlide>
              <SwiperSlide>
                <li className={`${css.swiperSlide} ${css.lpItem}`}>
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
              </SwiperSlide>
              <SwiperSlide>
                <li className={`${css.swiperSlide} ${css.lpItem}`}>
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
              </SwiperSlide>
            </Swiper>
          </ul>
          <div className={css.swiperScrollbar}></div>
        </div>
      </div>
    </div>
  );
}

export default LastPublicSlider;
