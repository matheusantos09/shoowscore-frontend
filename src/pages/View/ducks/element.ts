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
  seasonEpisodes: {};
  elements: {
    payload: {
      total_results: number;
    };
  };
  seasonMax: string;
  elementId: string;
  msg?: string;
}

export const { Types, Creators } = createActions({
  fetchElement: ['title'],
  fetchElementSaga: ['title'],
  fetchElementSuccess: ['element'],
  fetchElementError: ['msg'],
  fetchIdElement: ['typeId'],
  fetchIdElementSaga: ['typeId'],
  fetchEpisodesSeasonElementSaga: ['elementId', 'seasonMax'],
  fetchEpisodesSeasonElementSuccess: ['seasonEpisodes'],
  fetchEpisodesSeasonElementError: ['msg'],
});

const INITIAL_STATE = {
  loading: true,
  error: false,
  msgError: '',
  payload: {},
  episodes: {
    loading: false,
    error: false,
    msgError: '',
    payload: {},
  },
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

const fetchSeasonEpisodesSuccess = (
  state: InitialState = INITIAL_STATE,
  action: TypeAction,
): any => ({
  ...state,
  episodes: {
    loading: false,
    error: false,
    payload: action.seasonEpisodes,
  },
});

const fetchSeasonEpisodesError = (
  state: InitialState = INITIAL_STATE,
  action: TypeAction,
): any => ({
  ...state,
  episodes: {
    loading: false,
    error: true,
    msgError: action.msg,
    payload: {},
  },
});

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_ELEMENT_SUCCESS]: fetchSuccess,
  [Types.FETCH_ELEMENT_ERROR]: fetchError,
  [Types.FETCH_EPISODES_SEASON_ELEMENT_SUCCESS]: fetchSeasonEpisodesSuccess,
  [Types.FETCH_EPISODES_SEASON_ELEMENT_ERROR]: fetchSeasonEpisodesError,
});
