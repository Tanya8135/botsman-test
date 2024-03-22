import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import css from "./HeroSlider.module.css";

function HeroSlider() {
  return (
    <div>
      <div className={`${css.swiper} ${css.heroImg}`}>
        <ul className={`${css.swiperWrapper} ${css.heroImgSlider}`}>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={css.mySwiper}
          >
            <SwiperSlide>
              <li className={css.swiperSlide}>
                <img
                  srcSet={`
            ${process.env.PUBLIC_URL}/images/mob/hero-slide/hero-mob1@2_375.png 750w,
            ${process.env.PUBLIC_URL}/images/mob/hero-slide/hero-mob1_375.png 375w
            `}
                  sizes="(min-width: 375px) 375px, 100vh"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/mob/hero-slide/hero-mob1_375.png"
                  }
                  alt="gray sofa and pouf"
                />
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className={css.swiperSlide}>
                <img
                  srcSet={`
            ${process.env.PUBLIC_URL}/images/mob/hero-slide/hero-mob2@2_375.png 2x,
            ${process.env.PUBLIC_URL}/images/mob/hero-slide/hero-mob2_375.png 1x
            `}
                  sizes="(min-width: 375px) 375px, 100vh"
                  src={
                    process.env.PUBLIC_URL +
                    "./images/mob/hero-slide/hero-mob2_375.png"
                  }
                  alt="gray table and white pouf"
                />
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className={css.swiperSlide}>
                <img
                  srcSet={`
            ${process.env.PUBLIC_URL}/images/mob/hero-slide/hero-mob3@2_375.png 750w,
            ${process.env.PUBLIC_URL}/images/mob/hero-slide/hero-mob3_375.png 375w
            `}
                  sizes="(min-width: 375px) 375px, 100vh"
                  src={
                    process.env.PUBLIC_URL +
                    "./images/mob/hero-slide/hero-mob3_375.png"
                  }
                  alt="gray table and green pouf"
                />
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
        <div className={css.swiperPagination}></div>
      </div>
    </div>
  );
}

export default HeroSlider;
