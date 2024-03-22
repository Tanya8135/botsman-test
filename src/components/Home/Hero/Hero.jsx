import React from "react";

import css from "./Hero.module.css";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className={`${css.hero} ${css.top}`}>
      <div className={css.heroContainer}>
        <h1 className={`${css.heroTitle} ${css.titleTest}`}>
          <span className={css.letter}>Л</span>учшая жизнь созданная для вас!
        </h1>

        <HeroSlider />
        <div className="btnBox">
          <button className="btn">Перейти в каталог</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
