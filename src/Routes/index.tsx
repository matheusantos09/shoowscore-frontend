import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import MainSpinner from "../components/Spinners/MainSpinner";

const Index = lazy(() => import('../pages/Index'));
const View = lazy(() => import('../pages/View'));

const Routes = () => (
  <Suspense fallback={ MainSpinner }>
    <Route path="/" exact component={ Index } />
    <Route path="/view/:element" exact component={ View } />
  </Suspense>
);

export default Routes;
