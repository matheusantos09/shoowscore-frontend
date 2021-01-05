import { all } from 'redux-saga/effects';

// import Index from '../pages/Index/ducks';
import Element from '../pages/View/ducks';
import Search from '../pages/Search/ducks';

export default function* rootSaga(): any {
  return yield all([/* Index(), */ Element(), Search()]);
}
