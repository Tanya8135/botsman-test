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
            <li className={css.swiperSlide}>
              <img
                srcset="
              ./images/mob/hero-slide/hero-mob1_375.png   375w,
              ./images/mob/hero-slide/hero-mob1@2_375.png 750w
            "
                sizes="(min-width: 375px) 375px, 100vh"
                src="./images/mob/hero-slide/hero-mob1_375.png"
                alt="gray sofa and pouf "
              />
            </li>
            <li className={css.swiperSlide}>
              <img
                srcset="
              ./images/mob/hero-slide/hero-mob2_375.png   375w,
              ./images/mob/hero-slide/hero-mob2@2_375.png 750w
            "
                sizes="(min-width: 375px) 375px, 100vh"
                src="./images/mob/hero-slide/hero-mob2_375.png"
                alt="gray table and white pouf"
              />
            </li>
            <li className={css.swiperSlide}>
              <img
                srcset="
              ./images/mob/hero-slide/hero-mob3_375.png   375w,
              ./images/mob/hero-slide/hero-mob3@2_375.png 750w
            "
                sizes="(min-width: 375px) 375px, 100vh"
                src="./images/mob/hero-slide/hero-mob3_375.png"
                alt="gray table and green pouf"
              />
            </li>
          </ul>

          <div className={css.swiperPagination}></div>
        </div>

        <div className={css.btnBox}>
          <button className={`${css.btn} ${css.heroBtn}`}>Перейти в каталог</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
