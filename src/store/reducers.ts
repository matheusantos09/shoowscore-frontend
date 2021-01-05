import { combineReducers } from 'redux';

import element from '../pages/View/ducks/element';
// import filters from '../pages/Index/ducks/filters';
import search from '../pages/Search/ducks/search';

export default combineReducers({
  element,
  search,
  // filters,
});
