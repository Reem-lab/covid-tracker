import { VscSearch } from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayCountries } from '../redux/actions/AllCountries';
import '../styles/SearchBar.css';
import img from '../images/map.jpg';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const countries = useSelector((state) => state.CountriesReducer);
  const dispatch = useDispatch();

  const submitLocation = () => {
    useEffect(() => {
      if (countries.length === 0) {
        dispatch(displayCountries());
      }
    }, []);
  };

  return (
    <div className="all-cases">
      <div className="first-section">
        <img className="img-map" src={img} alt="map-world" />
        <div className="info">
          <h1>All new Confrimed Cases</h1>
          <span>new cases</span>
        </div>
      </div>
      <div className="search">
        <h2>
          Search by Country
          <VscSearch className="search-icon" />
        </h2>
        <form
          onSubmit={submitLocation()}
          className="inputs"
        >
          <input
            className="input-search"
            placeholder="Search"
            value={location}
            onChange={(e) => { setLocation(e.target.value); }}
          />
          <button
            className="btn"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
