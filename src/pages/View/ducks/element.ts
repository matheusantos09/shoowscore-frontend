import { createActions, createReducer } from 'reduxsauce';

interface InitialState {
  loading: boolean;
  alternativesElements?: {
    type: string;
    results: {}[];
  };
  element: {};
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
  fetchAlternativeElements: ['elements'],
  fetchElementError: ['msg'],
  fetchIdElement: ['typeId'],
  fetchIdElementSaga: ['typeId'],
});

const INITIAL_STATE = {
  loading: true,
  error: false,
  msgError: '',
  alternativesElements: {
    type: '',
    results: [],
  },
  element: {},
};

const fetchSuccess = (
  state: InitialState = INITIAL_STATE,
  action: TypeAction,
): any => ({
  ...state,
  loading: false,
  error: false,
  element: action.element.payload,
  alternativesElements: [],
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

const fetchAlternativeElementSuccess = (
  state: InitialState = INITIAL_STATE,
  action: TypeAction,
): any => ({
  ...state,
  loading: false,
  error: false,
  alternativesElements:
    action.elements.payload.total_results === 0 ? [] : action.elements.payload,
});

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_ELEMENT_SUCCESS]: fetchSuccess,
  [Types.FETCH_ELEMENT_ERROR]: fetchError,
  [Types.FETCH_ALTERNATIVE_ELEMENTS]: fetchAlternativeElementSuccess,
});
