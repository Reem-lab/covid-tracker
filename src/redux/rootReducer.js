import { combineReducers } from 'redux';
import CountriesReducer from './actions/AllCountries';
import RegionsReducer from './actions/AllInfo';

const rootReducer = combineReducers({
  CountriesReducer,
  RegionsReducer,
});

export default rootReducer;
