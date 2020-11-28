import React, {lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';
import Spinner from "../components/MainSpinner";

const Index = lazy(() => import('../pages/Index'));
const View = lazy(() => import('../pages/View'));

const Routes: React.FC = () => (
  <Suspense fallback={Spinner}>
    <Route path="/" exact component={Index} />
    <Route path="/view/:elementName" exact component={View} />
  </Suspense>
);

export default Routes;
