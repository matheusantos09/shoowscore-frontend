import { createActions, createReducer } from "reduxsauce";

interface InitialState {
  loading: boolean;
  alternativesElements?: {};
  content: {};
  msgError?: string;
}

export interface TypeAction {
  title: string;
  element: {
    payload: {}
  };
  elements: {
    payload: {}
  };
  msg?: string;
}

export const { Types, Creators } = createActions({
  fetchElement: [ 'title' ],
  fetchElementSaga: [ 'title' ],
  fetchElementSuccess: [ 'element' ],
  fetchAlternativeElements: [ 'elements' ],
  fetchElementError: [ 'msg' ],
});

const INITIAL_STATE = {
  loading: true,
  alternativesElements: {},
  content: {},
  msgError: ''
}

const fetchSuccess = ( state: InitialState = INITIAL_STATE, action: TypeAction ) => ( {
  ...state,
  loading: false,
  element: action.element.payload
} )

const fetchAlternativeElementSuccess = ( state: InitialState = INITIAL_STATE, action: TypeAction ) => ( {
  ...state,
  loading: false,
  alternativesElements: action.elements.payload
} )

const fetchError = ( state: InitialState = INITIAL_STATE, action: TypeAction ) => ( {
  ...state,
  loading: true,
  msgError: action.msg
} )

//@ts-ignore
export default createReducer(INITIAL_STATE, {
  [Types.FETCH_ELEMENT_SUCCESS]: fetchSuccess,
  [Types.FETCH_ALTERNATIVE_ELEMENTS]: fetchAlternativeElementSuccess,
  [Types.FETCH_ELEMENT_ERROR]: fetchError,
})
