import React from "react";

import css from "./OurHistory.module.css";

function OurHistory() {
  return (
    <section className={`${css.ourHistury} ${css.bottom}`} id="our-histury">
      <div className={css.ourHisturyContainer}>
        <div className={css.customFurnitereTextBox}>
          <h2
            className={`${css.sectionTitle__dark} ${css.sectionTitle__ourHistory}`}
          >
            <span className={css.letter}>Н</span>аша история
          </h2>

          <div className={css.ourHistoryTextBox}>
            <p
              className={`${css.sectionSubtitle} ${css.sectionSubtitle__ourHistory}`}
            >
              Наработки длинной в 25 лет
            </p>
            <p className={`${css.sectionText}`}>
              Каждый производитель заявляет, что делает все для своих
              покупателей, но не каждый производитель способен подтвердить свои
              заявления многолетней историей
            </p>
          </div>
        </div>

        <div className={css.ourHisturyBox}>
          <div className={css.ourHisturyImg}>
            <img
              srcSet={`
          ${process.env.PUBLIC_URL}/images/mob/our_history@2_340.png 680w,
          ${process.env.PUBLIC_URL}/images/mob/our_history_340.png   340w
          `}
              sizes="(min-width: 375px) 340px, 100vw"
              src={process.env.PUBLIC_URL + "/images/mob/our_history_340.png"}
              alt="interior"
            />
          </div>
          <div className={css.rectangleCF4}></div>
        </div>
      </div>
    </section>
  );
}

export default OurHistory;
