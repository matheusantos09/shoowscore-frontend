import { all } from 'redux-saga/effects'

import Index from "../pages/Index/ducks";
import Element from '../pages/View/ducks'

export default function* rootSaga() {
  return yield all([
    Index(),
    Element()
  ]);
}
