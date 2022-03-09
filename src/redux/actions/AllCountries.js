export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';

export const loadCountries = (payload) => ({
  type: LOAD_COUNTRIES,
  payload,
});

const fetchData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries/');
  const data = await response.json();
  return data;
};

export const displayCountries = () => async (dispatch) => {
  const countriesArr = await fetchData();

  const CountriesTemp = countriesArr.map((ele) => ({
    // id: ele.countryInfo._id,
    country: ele.country,
    cases: ele.cases,
    image: ele.countryInfo.flag,
  }));
  dispatch(loadCountries(CountriesTemp));
};

const initialState = [];

const CountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return action.payload;

    default:
      return state;
  }
};

export default CountriesReducer;
