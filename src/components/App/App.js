import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';

import css from './App.module.css'

function App() {
  return (
    <div className={css.App}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
