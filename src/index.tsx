import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import './i18n'

import 'typeface-roboto';

import Index from "./components/MainSpinner";

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={Index}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
