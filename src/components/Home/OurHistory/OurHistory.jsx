import React from "react";

import css from "./OurHistory.module.css";
import OurHistoryText from "./OurHistoryText";
import OurHistoryElements from "./OurHistoryElements";

function OurHistory() {
  return (
    <section className={`${css.ourHistury} ${css.bottom}`} id="our-histury">
      <div className={css.ourHisturyContainer}>
        <OurHistoryText />
        <OurHistoryElements />
      </div>
    </section>
  );
}

export default OurHistory;
