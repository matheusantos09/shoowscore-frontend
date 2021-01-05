import { all, call, delay, put, race, takeLatest } from 'redux-saga/effects';

import {
  Creators as CreatorsSearch,
  TypeAction as TypeActionSearch,
  Types as TypesSearch,
} from './search';
import { fetchElementByTitle } from '../../../services/endpoints';
import i18n from '../../../i18n';

const TIMEOUT = 20000;

function* fetchSearchSaga(action: TypeActionSearch): any {
  try {
    const { response, timeout } = yield race({
      response: call(fetchElementByTitle, action.query),
      timeout: delay(TIMEOUT),
    });

    if (timeout) {
      yield put(CreatorsSearch.fetchError(i18n.t('api.errors.timeout')));
      return;
    }

    if (response.status < 300) {
      yield put(CreatorsSearch.fetchSuccess(response.data));
    } else {
      yield put(CreatorsSearch.fetchError(i18n.t('api.errors.code300')));
    }
  } catch (e) {
    yield put(CreatorsSearch.fetchError(i18n.t('api.errors.fatal')));
    yield console.log(e);
  }
}

export default function* rootSaga(): any {
  return yield all([
    yield takeLatest(
      // @ts-ignore
      TypesSearch.FETCH_SEARCH_SAGA,
      fetchSearchSaga,
    ),
  ]);
}
