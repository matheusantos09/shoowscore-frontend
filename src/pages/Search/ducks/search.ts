import { createActions, createReducer } from 'reduxsauce';

interface InitialState {
  loading: boolean;
  payload: {};
  msgError?: string;
  error: boolean;
}

export interface TypeAction {
  typeId: string;
  query: string;
  payload: {};
  msg?: string;
}

export const { Types, Creators } = createActions({
  fetchSearch: ['query'],
  fetchSearchSaga: ['query'],
  fetchSuccess: ['payload'],
  fetchError: ['payload'],
  stateLoading: [],
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
  payload: action.payload,
});

const fetchError = (
  state: InitialState = INITIAL_STATE,
  action: TypeAction,
): any => ({
  ...state,
  loading: false,
  payload: {},
  error: true,
  msgError: action.msg,
});

const stateLoading = (state: InitialState = INITIAL_STATE): any => ({
  ...state,
  payload: {},
  loading: true,
  error: false,
  msgError: '',
});

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_SUCCESS]: fetchSuccess,
  [Types.FETCH_ERROR]: fetchError,
  [Types.STATE_LOADING]: stateLoading,
});
