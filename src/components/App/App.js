import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import IndividualFurniture from 'components/IndividualFurniture/IndividualFurniture';

import css from './App.module.css'

function App() {
  return (
    <div className={css.App}>
      <Header />
      <Hero />
      <IndividualFurniture />
    </div>
  );
}

export default App;
