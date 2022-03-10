/* eslint-disable no-underscore-dangle */
export const LOAD_REGIONS = ' LOAD_REGIONS';
export const LOAD_NAME = ' LOAD_NAME';

export const loadRegions = (payload) => ({
  type: LOAD_REGIONS,
  payload,
});

export const loadName = (name) => ({
  type: LOAD_NAME,
  name,
});

const fetchData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries/');
  const data = await response.json();
  return data;
};

export const displayInformations = () => async (dispatch) => {
  const regionsArr = await fetchData();

  const RegionssTemp = regionsArr.map((ele) => ({
    country: ele.country,
    cases: ele.cases,
    id: ele.countryInfo._id,
    todayCases: ele.todayCases,
    deaths: ele.deaths,
    recovered: ele.recovered,
    continent: ele.continent,
    tests: ele.tests,
    todayDeaths: ele.todayDeaths,
    todayRecovered: ele.todayRecovered,
  }));
  dispatch(loadRegions(RegionssTemp));
};

const initialState = [];

const RegionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REGIONS:
      return action.payload;

    case LOAD_NAME:
      return action.name;

    default:
      return state;
  }
};

export default RegionsReducer;
