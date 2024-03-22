import React from "react";

import css from "./LastPublic.module.css";

import LastPublickText from "./LastPublickText";
import LastPublickLinkCatalog from "./LastPublickLinkCatalog";
import LastPublicSlider from "./LastPublicSlider";

function LastPublic() {
  return (
    <div>
      <section className={css.lastPublic} id="public">
        <LastPublickText />
        <LastPublickLinkCatalog />
        <LastPublicSlider />
      </section>
    </div>
  );
}

export default LastPublic;
