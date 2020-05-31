import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainSpinner from "./components/Spinners/MainSpinner";

const Index = React.lazy(() => import('./pages/Index'));

const Routes = () => (
  <Suspense fallback={ MainSpinner }>
    <Router>
      <Route path="/" exact component={ Index } />
    </Router>
  </Suspense>
);

export default Routes;
