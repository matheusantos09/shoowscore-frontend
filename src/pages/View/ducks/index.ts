import { all, call, delay, put, race, takeLatest } from "redux-saga/effects";

import { Creators as CreatorsElement, TypeAction as ElementTypeAction, Types as TypesElement } from './element'
import { fetchElementByTitle } from "../../../services/endpoints";
import i18n from '../../../i18n'

const TIMEOUT = 20000;

function* sagaFetchElement( action: ElementTypeAction ) {

  console.log('action', action)// const { t } = useTranslation()

  const title = ''

  try {
    const { response, timeout } = yield race({
      response: call(fetchElementByTitle, title),
      timeout: delay(TIMEOUT)
    });

    if (timeout) {
      yield put(CreatorsElement.fetchError(i18n.t('api.errors.timeout')))
      return;
    }

    if (response.status < 300) {
      yield put(CreatorsElement.fetchSuccess(response.data))
    } else {
      yield put(CreatorsElement.fetchError(i18n.t('api.errors.code300')))
    }

  } catch (e) {
    yield put(CreatorsElement.fetchError(i18n.t('api.errors.fatal')))
    yield console.log(e)
  }
}

export default function* rootSaga() {
  return yield all([
    // @ts-ignore
    yield takeLatest(TypesElement.FETCH_ELEMENT_SAGA, sagaFetchElement),
  ])
}
