import {applyMiddleware, compose, createStore} from 'redux';
import createSaga from 'redux-saga';

import reducers from './reducers';
import sagas from '../sagas';

const sagaMiddleware = createSaga();

// eslint-disable-next-line no-underscore-dangle
const devReduxDevTool = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    devReduxDevTool
  )
)

sagaMiddleware.run(sagas)
