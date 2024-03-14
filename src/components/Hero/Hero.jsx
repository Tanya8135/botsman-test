import React from "react";

import css from "./Hero.module.css";

function Hero() {
  return (
    <section className={`${css.hero} ${css.top}`}>
      <div className={css.heroContainer}>
        <h1 className={`${css.heroTitle} ${css.titleTest}`}>
          <span className={css.letter}>Л</span>учшая жизнь созданная для вас!
        </h1>

        <div className={`${css.swiper} ${css.heroImg}`}>
          <ul className={`${css.swiperWrapper} ${css.heroImgSlider}`}>
            <li>
            <img srcSet={`
            ${process.env.PUBLIC_URL}/images/mob/hero-slide/hero-mob1@2_375.png 2x,
            ${process.env.PUBLIC_URL}/images/mob/hero-slide/hero-mob1_375.png 1x
            `}
            sizes="(min-width: 375px) 375px, 100vh"
            src={process.env.PUBLIC_URL + '/images/mob/hero-slide/hero-mob1_375.png'} alt="" />
            </li>
            {/* {imgs.map((slide, index) => (
              <li key={index} className={css.swiperSlide}>
                <img
                  srcSet={slide.srcset}
                  sizes={slide.sizes}
                  src={process.env.PUBLIC_URL + slide.src}
                  alt={slide.alt}
                />
              </li>
            ))} */}
          </ul>
          <div className={css.swiperPagination}></div>
        </div>

        <div className={css.btnBox}>
          <button className={`${css.btn} ${css.heroBtn}`}>
            Перейти в каталог
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
