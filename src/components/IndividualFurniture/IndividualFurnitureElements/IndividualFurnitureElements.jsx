import css from "./IndividualFurnitureElements.module.css";

function IndividualFurnitureElements() {
  return (
    <div>
      <div className={css.individFurnitereBox}>
        <div className={css.rectangleCF2}>
          <img src="./images/grid.svg" alt="grid" className={css.gridCF} />
        </div>
        <div className={css.ifImg}>
          <img
            srcSet={`
              ${process.env.PUBLIC_URL}/images/mob/if_white_poufs@2_340.png 680w,
              ${process.env.PUBLIC_URL}/images/mob/if_white_poufs_340.png 340w
              `}
            sizes="(min-width: 375px) 340px, 100vw"
            src={process.env.PUBLIC_URL + "/images/mob/if_white_poufs_340.png"}
            alt="white poufs"
          />
        </div>

        <div className={css.rectangleCF3}></div>
      </div>
    </div>
  );
}

export default IndividualFurnitureElements;
