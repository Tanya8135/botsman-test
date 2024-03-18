import React from "react";

import css from "./IndividualFurniture.module.css";

function IndividualFurniture() {
  return (
    <div>
      <section className={css.individFurnitere} id="individ-furniture">
        <div className={css.individFurnitereContainer}>
          <div className={css.rectangleCF1}>
            <div className={css.rectangleCF1__text}>furniture</div>
          </div>

          <div className={css.individFurnitereTextBox}>
            <h2 className={css.sectionTitle}>
              <span className={css.letter}>И</span>ндивидуальная мебель
            </h2>
            <p className={css.sectionSubtitle}>Полный цикл производства.</p>

            <p className={css.sectionText}>
              Качество мягкой мебели начинается задолго до начала ее
              производства.
            </p>
          </div>

          <div className={css.individFurnitereBox}>
            <div className={css.rectangleCF2}>
              <img src="./images/grid.svg" alt="grid" className={css.gridCF} />
            </div>
            <div className={css.ifImg}>
              <img
                srcSet={`
              ${process.env.PUBLIC_URL}/images/mob/if_white_poufs@2_340.png 680w,
              ${process.env.PUBLIC_URL}/images/mob/if_white_poufs_340.png 340w
              `}
                sizes="(min-width: 375px) 340px, 100vw"
                src={
                  process.env.PUBLIC_URL + "/images/mob/if_white_poufs_340.png"
                }
                alt="white poufs"
              />
            </div>

            <div className={css.rectangleCF3}></div>
          </div>

          <button type="button" className={css.btn}>
            Индивидуальная мебель
          </button>
        </div>
      </section>
    </div>
  );
}

export default IndividualFurniture;
