import React from 'react';
import { Provider } from 'react-redux'

import store from './store'

import ContainerDefault from "./components/Container/ContainerDefault";

store.subscribe(() => {
  console.log('STATE REDUX', store.getState())
})

function App() {
  return (
    <Provider store={ store }>
      <ContainerDefault />
    </Provider>
  );
}

export default App
