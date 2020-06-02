import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import MainSpinner from "../components/Spinners/MainSpinner";

const Index = React.lazy(() => import('../pages/Index'));
const View = React.lazy(() => import('../pages/View'));

const Routes = () => (
  <Suspense fallback={ MainSpinner }>
    <Route path="/" exact component={ Index } />
    <Route path="/view/:type/:element" exact component={ View } />
  </Suspense>
);

export default Routes;
