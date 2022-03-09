import { combineReducers } from 'redux';
import CountriesReducer from './actions/AllCountries';
import RegionsReducer from './actions/AllRegions';

const rootReducer = combineReducers({
  CountriesReducer,
  RegionsReducer,
});

export default rootReducer;
