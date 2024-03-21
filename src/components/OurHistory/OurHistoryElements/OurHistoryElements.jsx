import css from "./OurHistoryElements.module.css";

function OurHistoryElements() {
  return (
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
  );
}

export default OurHistoryElements;
