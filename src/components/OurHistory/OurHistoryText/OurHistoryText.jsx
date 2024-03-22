import css from "./OurHistoryText.module.css";

function OurHistoryText() {
  return (
    <div>
      <div className={css.customFurnitereTextBox}>
        <h2 className="sectionTitle__dark sectionTitle__ourHistory">
          <span className="letter">Н</span>аша история
        </h2>

        <div className={css.ourHistoryTextBox}>
          <p className="sectionSubtitle sectionSubtitle__ourHistory">
            Наработки длинной в 25 лет
          </p>
          <p className="sectionText">
            Каждый производитель заявляет, что делает все для своих покупателей,
            но не каждый производитель способен подтвердить свои заявления
            многолетней историей
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurHistoryText;
