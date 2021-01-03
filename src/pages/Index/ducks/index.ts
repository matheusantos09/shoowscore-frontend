import { all, put, takeLatest } from 'redux-saga/effects';

import {
  Creators as CreatorsFilter,
  FilterTypeAction,
  Types as TypesFilter,
} from './filters';

function* sagaSetFilterType(action: FilterTypeAction): any {
  yield put(CreatorsFilter.setFilterType(action.type));
}

export default function* rootSaga(): any {
  return yield all([
    yield takeLatest(TypesFilter.FILTER_TYPE_SAGA, sagaSetFilterType),
  ]);
}
