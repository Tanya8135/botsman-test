import css from "./IndividualFurnitureText.module.css";

function IndividualFurnitureText() {
  return (
    <div>
      <div className={css.individFurnitereTextBox}>
        <h2 className="sectionTitle">
          <span className="letter">И</span>ндивидуальная мебель
        </h2>
        <p className="sectionSubtitle">Полный цикл производства.</p>

        <p className="sectionText">
          Качество мягкой мебели начинается задолго до начала ее производства.
        </p>
      </div>
    </div>
  );
}

export default IndividualFurnitureText;
