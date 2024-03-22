import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';

import css from './App.module.css'

function App() {
  return (
    <div className={css.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
