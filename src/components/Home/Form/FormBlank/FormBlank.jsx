import css from "./FormBlank.module.css";

function FormBlank() {
  return (
    <div>
      <div className={css.formBlock}>
        <form className={css.form}>
          <label className={css.dataField}>
            <input
              type="text"
              name="name"
              className={`${css.dataField__input} ${css.inputHasValue}`}
              placeholder="Ваше имя*"
            />
          </label>
          <label className={css.dataField}>
            <input
              type="tel"
              name="tel"
              className={`${css.dataField__input} ${css.inputHasValue}`}
              placeholder="Ваш номер телефона*"
            />
          </label>
          <label className={css.dataField}>
            <input
              type="text"
              name="country"
              className={`${css.dataField__input} ${css.inputHasValue}`}
              placeholder="Страна"
            />
          </label>
          <label className={css.dataField}>
            <input
              type="text"
              name="comment"
              className={`${css.dataField__input} ${css.inputHasValue}`}
              placeholder="Комментарий"
            />
          </label>

          <div className={css.policyBox}>
            <label className={css.policy}>
              <div className={css.checkboxBox}>
                <input
                  className={css.policy__checkbox}
                  type="checkbox"
                  name="policy"
                  value="css"
                />
                <span className={css.policy__icon}></span>

                <span className={css.policy__text}>
                  {/* <IoCheckmark className={css.checkmark} /> */}
                  Подтверждая заказ, я принимаю условия пользовательского
                  соглашения
                </span>
              </div>
            </label>
          </div>

          <button type="button" className="btn">
            Запросить звонок
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormBlank;
