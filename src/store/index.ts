import { applyMiddleware, compose, createStore } from 'redux';
import createSaga from 'redux-saga';

import reducers from './reducers';
import sagas from '../sagas';

const sagaMiddleware = createSaga();

const devReduxDevTool =
  // eslint-disable-next-line no-underscore-dangle
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  // eslint-disable-next-line no-underscore-dangle
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), devReduxDevTool),
);

sagaMiddleware.run(sagas);
