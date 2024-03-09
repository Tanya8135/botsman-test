import css from './MyBtn.module.css'

function myBtn() {
  return (
    <div>
      <button className={css.btnTest}>I'm button</button>
      <h3>TEST</h3>
    </div>
  );
}

export default myBtn;
