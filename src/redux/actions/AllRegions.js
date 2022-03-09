export const LOAD_REGIONS = ' LOAD_REGIONS';

export const loadRegions = (payload) => ({
  type: LOAD_REGIONS,
  payload,
});

const fetchData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries/');
  const data = await response.json();
  return data;
};

export const displayRegions = () => async (dispatch) => {
  const regionsArr = await fetchData();

  const RegionssTemp = regionsArr.map((ele) => ({
    // id: ele.countryInfo._id,
    country: ele.country,
    cases: ele.cases,
    image: ele.countryInfo.flag,
  }));
  dispatch(loadRegions(RegionssTemp));
};

const initialState = [];

const RegionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REGIONS:
      return action.payload;

    default:
      return state;
  }
};

export default RegionsReducer;
