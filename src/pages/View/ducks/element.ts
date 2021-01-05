import { createActions, createReducer } from 'reduxsauce';

interface InitialState {
  loading: boolean;
  payload: {};
  msgError?: string;
  error: boolean;
}

export interface TypeAction {
  typeId: string;
  title: string;
  element: {
    payload: {};
  };
  elements: {
    payload: {
      total_results: number;
    };
  };
  msg?: string;
}

export const { Types, Creators } = createActions({
  fetchElement: ['title'],
  fetchElementSaga: ['title'],
  fetchElementSuccess: ['element'],
  fetchElementError: ['msg'],
  fetchIdElement: ['typeId'],
  fetchIdElementSaga: ['typeId'],
});

const INITIAL_STATE = {
  loading: true,
  error: false,
  msgError: '',
  payload: {},
};

const fetchSuccess = (
  state: InitialState = INITIAL_STATE,
  action: TypeAction,
): any => ({
  ...state,
  loading: false,
  error: false,
  payload: action.element.payload,
});

const fetchError = (
  state: InitialState = INITIAL_STATE,
  action: TypeAction,
): any => ({
  ...state,
  loading: false,
  element: [],
  error: true,
  msgError: action.msg,
});

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_ELEMENT_SUCCESS]: fetchSuccess,
  [Types.FETCH_ELEMENT_ERROR]: fetchError,
});
