import React from "react";
// import { IoCheckmark } from "react-icons/io5";

import css from "./Form.module.css";
import FormBlank from "./FormBlank/FormBlank";

function Form() {
  return (
    <div>
      <section className={css.formSection}>
        <div
          className={`${css.formContainer} ${css.container} ${css.formBoxCatalog}`}
        >
          <div className={css.formBox}>
            <div className={css.actionTextBox}>
              <b className={css.actionText}>Заполните форму</b>
            </div>
            <div className={css.formSubtitleBox}>
              <span className={css.formSubtitle}>остались вопросы?</span>
            </div>
            <FormBlank />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
