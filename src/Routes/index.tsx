import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Spinner from '../components/MainSpinner';

import { defaultLanguageKey } from '../configs/languages-api';

const Index = lazy(() => import('../pages/Index'));
const View = lazy(() => import('../pages/View'));
const Search = lazy(() => import('../pages/Search'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Routes: React.FC = () => (
  <Suspense fallback={Spinner}>
    <Switch>
      <Route
        path="/"
        exact
        render={() => <Redirect to={`/${defaultLanguageKey}`} />}
      />

      <Route path="/:lang" exact component={Index} />
      <Route path="/:lang/search/:elementName" exact component={Search} />
      <Route path="/:lang/view/:type/:id/:elementName" exact component={View} />

      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
