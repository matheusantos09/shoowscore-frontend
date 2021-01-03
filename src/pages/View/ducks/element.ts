import { createActions, createReducer } from 'reduxsauce';

interface InitialState {
  loading: boolean;
  alternativesElements?: {
    type: string;
    results: {}[];
  };
  content: {};
  msgError?: string;
  error: boolean;
}

export interface TypeAction {
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
});

const INITIAL_STATE = {
  loading: true,
  alternativesElements: {
    type: '',
    results: [],
  },
  content: {},
  error: false,
  msgError: '',
};

const fetchSuccess = (
  state: InitialState = INITIAL_STATE,
  action: TypeAction,
): any => ({
  ...state,
  loading: false,
  error: false,
  element: action.element.payload,
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
  [Types.FETCH_ALTERNATIVE_ELEMENTS]: fetchAlternativeElementSuccess,
  [Types.FETCH_ELEMENT_ERROR]: fetchError,
});
