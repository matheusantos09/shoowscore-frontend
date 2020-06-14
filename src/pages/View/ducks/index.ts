import { all, call, delay, put, race, takeLatest } from "redux-saga/effects";

import { Creators as CreatorsElement, TypeAction as ElementTypeAction, Types as TypesElement } from './element'
import { fetchElementByTitle } from "../../../services/endpoints";
import i18n from '../../../i18n'

const TIMEOUT = 20000;

function* sagaFetchElement( action: ElementTypeAction ) {

  try {
    const { response, timeout } = yield race({
      response: call(fetchElementByTitle, action.title),
      timeout: delay(TIMEOUT)
    });

    if (timeout) {
      yield put(CreatorsElement.fetchElementError(i18n.t('api.errors.timeout')))
      return;
    }

    if (response.status < 300) {

      if (response.data.length > 1) {
        yield put(CreatorsElement.fetchAlternativeElements(response.data))
      } else {
        yield put(CreatorsElement.fetchElementSuccess(response.data))
      }

    } else {
      yield put(CreatorsElement.fetchElementError(i18n.t('api.errors.code300')))
    }

  } catch (e) {
    yield put(CreatorsElement.fetchElementError(i18n.t('api.errors.fatal')))
    yield console.log(e)
  }
}

export default function* rootSaga() {
  return yield all([
    // @ts-ignore
    yield takeLatest(TypesElement.FETCH_ELEMENT_SAGA, sagaFetchElement),
  ])
}
