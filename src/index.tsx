import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import './i18n'

import 'typeface-roboto';

import MainSpinner from "./components/Spinners/MainSpinner";

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={MainSpinner}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
