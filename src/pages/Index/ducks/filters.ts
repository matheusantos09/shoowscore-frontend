import {createActions, createReducer} from "reduxsauce";

interface InitialState {
  type: string;
  name: string;
}

export interface FilterTypeAction {
  type: string
}

interface FilterNameElement {
  name: string
}

export const {Types, Creators} = createActions({
  filterType: ['type'],
  filterTypeSaga: ['type'],
  filterNameElement: ['name'],
  filterNameElementSaga: ['name'],
});

const INITIAL_STATE = {
  type: '',
  name: ''
}

const setFilterType = (state: InitialState = INITIAL_STATE, action: FilterTypeAction): any => {
  return {
    ...state,
    type: action.type
  }
}

const setFilterNameElement = (state: InitialState = INITIAL_STATE, action: FilterNameElement): any => {
  return {
    ...state,
    name: action.name
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.FILTER_TYPE]: setFilterType,
  [Types.FILTER_NAME_ELEMENT]: setFilterNameElement,
})
