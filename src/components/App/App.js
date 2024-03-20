import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import IndividualFurniture from 'components/IndividualFurniture/IndividualFurniture';
import OurHistory from 'components/OurHistory/OurHistory';
import LastPublic from 'components/LastPublic/LastPublic';
import Form from 'components/Form/Form';
import CompanyInfo from 'components/CompanyInfo/CompanyInfo';

import css from './App.module.css'

function App() {
  return (
    <div className={css.App}>
      <Header />
      <Hero />
      <IndividualFurniture />
      <OurHistory />
      <LastPublic />
      <Form />
      <CompanyInfo />
    </div>
  );
}

export default App;
