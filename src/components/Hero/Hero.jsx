import React from 'react';
import imgs from 'data/test.json';
import css from './Hero.module.css';

function Hero() {
  return (
    <section className={`${css.hero} ${css.top}`}>
      <div className={css.heroContainer}>
        <h1 className={`${css.heroTitle} ${css.titleTest}`}>
          <span className={css.letter}>Л</span>учшая жизнь созданная для вас!
        </h1>

        <div className={`${css.swiper} ${css.heroImg}`}>
          <ul className={`${css.swiperWrapper} ${css.heroImgSlider}`}>
            {imgs.map((slide, index) => (
              <li key={index} className={css.swiperSlide}>
                {/* <img
                  srcSet={slide.srcset}
                  sizes={slide.sizes}
                  src={process.env.PUBLIC_URL + slide.src}
                  alt={slide.alt}
                /> */}
                
              </li>
              
            ))}
          </ul>
          <div className={css.swiperPagination}></div>
        </div>
        <div className={css.imgContainer}>TEST</div>

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