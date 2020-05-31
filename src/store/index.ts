import reducers from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import createSaga from 'redux-saga';

const sagaMiddleware = createSaga();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const dev = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    dev
  )
);
