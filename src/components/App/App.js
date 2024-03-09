// import logo from '../../logo.svg';
import logo from '../../images/logoBotsmanMin.svg'
import MyBtn from '../myBtn/MyBtn';

import css from './App.module.css'

function App() {
  return (
    <div className={css.App}>
      <header className={css.AppHeader}>
        <img src={logo} className={css.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. test 333
        </p>
        <a
          className={css.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>TEST</button>
        <MyBtn />
      </header>
    </div>
  );
}

export default App;
