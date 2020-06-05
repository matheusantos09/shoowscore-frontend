import { all } from 'redux-saga/effects'
import Index from "../pages/Index/ducks";

export default function* rootSaga() {
  return yield all([
    Index()
  ]);
}
