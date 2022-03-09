import { RiVirusLine } from 'react-icons/ri';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import { displayCountries } from '../redux/actions/AllCountries';
import '../styles/Home.css';

const Home = () => {
  const countries = useSelector((state) => state.CountriesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(displayCountries());
    }
  }, []);

  return (
    <div className="country-section">
      <SearchBar />
      <div className="all-countries">
        { countries.map((country1) => (
          <div key={country1.country} className="country-card">
            <div className="icons">
              <RiVirusLine className="virsus-icon" />
              <BsArrowRightCircle className="arrow" />
            </div>
            <div className="Cname">
              <h2>{country1.country}</h2>
              <span>{country1.cases}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
