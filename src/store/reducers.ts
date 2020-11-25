import {combineReducers} from 'redux';

import element from "../pages/View/ducks/element";
import filters from "../pages/Index/ducks/filters";

export default combineReducers({
  element,
  filters
});
