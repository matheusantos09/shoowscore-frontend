import React, {lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';
import Spinner from "../components/MainSpinner";

const Index = lazy(() => import('../pages/Index'));
const View = lazy(() => import('../pages/View'));
const Search = lazy(() => import('../pages/Search'));

const Routes: React.FC = () => (
  <Suspense fallback={Spinner}>
    <Route path="/" exact component={Index} />
    <Route path="/search/:elementName" exact component={Search} />
    <Route path="/view/:type/:elementName" exact component={View} />
  </Suspense>
);

export default Routes;
