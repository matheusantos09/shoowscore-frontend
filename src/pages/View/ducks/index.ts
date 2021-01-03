import { all, call, delay, put, race, takeLatest } from 'redux-saga/effects';

import {
  Creators as CreatorsElement,
  TypeAction as ElementTypeAction,
  Types as TypesElement,
} from './element';
import {
  fetchElementById,
  fetchElementByTitle,
} from '../../../services/endpoints';
import i18n from '../../../i18n';

const TIMEOUT = 20000;

function* sagaFetchAlternativeElement(action: ElementTypeAction): any {
  try {
    const { response, timeout } = yield race({
      response: call(fetchElementByTitle, action.title),
      timeout: delay(TIMEOUT),
    });

    if (timeout) {
      yield put(
        CreatorsElement.fetchElementError(i18n.t('api.errors.timeout')),
      );
      return;
    }

    if (response.status < 300) {
      if (
        response.data.payload.total_results > 1 ||
        response.data.payload.total_results === 0
      ) {
        yield put(CreatorsElement.fetchAlternativeElements(response.data));
      } else {
        yield put(CreatorsElement.fetchElementSuccess(response.data));
      }
    } else {
      yield put(
        CreatorsElement.fetchElementError(i18n.t('api.errors.code300')),
      );
    }
  } catch (e) {
    yield put(CreatorsElement.fetchElementError(i18n.t('api.errors.fatal')));
    yield console.log(e);
  }
}

function* sagaFetchIdElement(action: ElementTypeAction): any {
  try {
    const { response, timeout } = yield race({
      response: call(fetchElementById, action.typeId),
      timeout: delay(TIMEOUT),
    });

    if (timeout) {
      yield put(
        CreatorsElement.fetchElementError(i18n.t('api.errors.timeout')),
      );

      return;
    }

    if (response.status < 300) {
      yield put(CreatorsElement.fetchElementSuccess(response.data));
    } else {
      yield put(
        CreatorsElement.fetchElementError(i18n.t('api.errors.code300')),
      );
    }
  } catch (e) {
    yield put(CreatorsElement.fetchElementError(i18n.t('api.errors.fatal')));
    yield console.log(e);
  }
}

export default function* rootSaga(): any {
  return yield all([
    yield takeLatest(
      // @ts-ignore
      TypesElement.FETCH_ELEMENT_SAGA,
      sagaFetchAlternativeElement,
    ),
    // @ts-ignore
    yield takeLatest(TypesElement.FETCH_ID_ELEMENT_SAGA, sagaFetchIdElement),
  ]);
}
