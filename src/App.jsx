import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';

import Navigation from './components/Navigation/Navigation';
import { appRoutes } from 'constance/routes';
import { lazy } from 'react';
import { Suspense } from 'react';
import { nanoid } from 'nanoid';
import Loader from 'components/Loader/Loader';

const NotFound = lazy(() => import('pages/NotFound'));

export function App() {
  return (
    <div className={style.phonebook}>
      <div className={style.head}>
        <h1 className={style.title}>Phonebook</h1>
        <Navigation />
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={nanoid()} path={path} element={element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
