import css from "../PoufContent/PoufContent.module.css";

function SofaContent() {
  return (
    <div>
      <div className={css.catalogSofa}>
        <h2 className={css.catalogPoufs__title}>Дивани</h2>
        <ul className={css.catalogList}>
          <li className={css.catalogItem}>
            <article>
              <img
                srcSet="
                ./images/mob/catalog/sofa/sofa_160.png   160w,
                ./images/mob/catalog/sofa/sofa@2_160.png 320w
              "
                sizes="(min-width: 375px) 160px, 100vw"
                src="./images/mob/catalog/sofa/sofa_160.png"
                alt="Yellow sofa"
              />
            </article>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SofaContent;
