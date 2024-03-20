import css from "./PolicyInfo.module.css";

function PolicyInfo() {
  return (
    <div>
      <div className={css.policyInfoBox}>
        <p className={css.policyInfo}>
          &#169; 2021–2024 Інтернет-магазин «
          <span className={css.policyInfo__transform}>БОЦМАН</span>&#8482;»
        </p>
      </div>
    </div>
  );
}

export default PolicyInfo;
