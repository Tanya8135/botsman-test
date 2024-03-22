import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import css from './App.module.css';
import Header from 'components/Header/Header';

const Home = lazy(() => import('../../pages/Home/Home'))
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'))

function App() {
  return (
    <div className={css.App}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
