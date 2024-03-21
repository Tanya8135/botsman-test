import css from "./OurHistoryText.module.css";

function OurHistoryText() {
  return (
  <div>
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
  </div>
  )
}

export default OurHistoryText;
