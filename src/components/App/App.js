import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import IndividualFurniture from 'components/IndividualFurniture/IndividualFurniture';
import OurHistory from 'components/OurHistory/OurHistory';

import css from './App.module.css'

function App() {
  return (
    <div className={css.App}>
      <Header />
      <Hero />
      <IndividualFurniture />
      <OurHistory />
    </div>
  );
}

export default App;
