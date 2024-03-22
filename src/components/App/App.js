import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';

import css from './App.module.css';

const Catalog = lazy(() => import('../../pages/Catalog'))

function App() {
  return (
    <div className={css.App}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/catalog' element={<Catalog />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
