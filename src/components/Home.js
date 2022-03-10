import { NavLink } from 'react-router-dom';
import { RiVirusLine } from 'react-icons/ri';
import { BsArrowRightCircle } from 'react-icons/bs';
import { VscSearch } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import { displayCountries } from '../redux/actions/AllCountries';
import '../styles/Home.css';

const Home = () => {
  const [location, setLocation] = useState('');
  const countries = useSelector((state) => state.CountriesReducer);
  const filtered = countries.filter((item) => item.country.toLowerCase()
    .includes(location.toLowerCase()));

  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(displayCountries());
    }
  }, []);

  return (
    <div className="country-section">
      <SearchBar />
      <div className="search">
        <h2 className="h2Search">
          Search by Country
          <VscSearch className="search-icon" />
        </h2>
        <input
          className="input-search"
          placeholder="Search"
          value={location}
          onChange={(e) => { setLocation(e.target.value); }}
        />
      </div>
      <div className="all-countries">
        { !filtered.length ? (
          <div className="heading">No Counrties Information Found ❗❕</div>
        ) : (
          filtered.map((country1) => (
            <div key={country1.country} className="country-card">
              <NavLink to={`/Details/${country1.country}`}>
                <div className="icons">
                  <RiVirusLine className="virsus-icon" />
                  <BsArrowRightCircle className="arrow" />
                </div>
                <div className="Cname">
                  <h2>{country1.country}</h2>
                  <span className="number">{country1.cases}</span>
                </div>
              </NavLink>
            </div>
          )))}
      </div>
    </div>
  );
};

export default Home;
