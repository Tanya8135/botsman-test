import React from "react";

import css from "./CompanyInfo.module.css";

function CompanyInfo() {
  return (
    <div>
      <section className={css.companyInfo} id="info">
        <h3 hidden>info</h3>
        <ul className={css.ciList}>
          <div className={css.ciNumber}>1</div>
          <li className={css.ciItem}>
            <p className={css.ciText}>
              Осуществляемые компанией «Экми-Мебель» постоянные инвестиции в
              сертификацию своей продукции, убедительно подтверждают лидерство
              компании на украинском рынке высококачественной мягкой мебели.
            </p>
          </li>
          <div className={css.ciNumber}>2</div>
          <li className={css.ciItem}>
            <p className={css.ciText}>
              Фабрика «Экми-мебель» сертифицирована по системе менеджмента
              качества ISO 9001:2000 на соответствие международным стандартам,
              представительством «Бюро Веритас» в Украине.
            </p>
          </li>
          <div className={css.ciNumber}>3</div>
          <li className={css.ciItem}>
            <p className={css.ciText}>
              Компания «Экми-Мебель» первой из украинских производителей мягкой
              мебели обеспечила свою мебель полноценной гарантией и первой
              обоснованно заявила о лучшем качестве производимой мебели.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CompanyInfo;
