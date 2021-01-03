import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Index from './components/Container';

store.subscribe(() => {
  console.log('STATE REDUX', store.getState());
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
