import React from "react";

import css from "./IndividualFurniture.module.css";
import IndividualFurnitureText from "./IndividualFurnitureText/IndividualFurnitureText";
import IndividualFurnitureElements from "./IndividualFurnitureElements/IndividualFurnitureElements";

function IndividualFurniture() {
  return (
    <div>
      <section className={css.individFurnitere} id="individ-furniture">
        <div className={css.individFurnitereContainer}>
          <div className={css.rectangleCF1}>
            <div className={css.rectangleCF1__text}>furniture</div>
          </div>

          <IndividualFurnitureText />
          <IndividualFurnitureElements />

          <button type="button" className="btn">
            Индивидуальная мебель
          </button>
        </div>
      </section>
    </div>
  );
}

export default IndividualFurniture;
