/* eslint-disable no-underscore-dangle */
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaVirus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { displayInformations } from '../redux/actions/AllInfo';
import '../styles/Details.css';

const Details = () => {
  const params = useParams();
  const countriesInfo = useSelector((state) => state.RegionsReducer);
  const filtered = countriesInfo.filter((item) => item.country === params.country);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countriesInfo.length === 0) {
      dispatch(displayInformations());
    }
  }, []);

  return (
    <div className="dRegions">
      { !filtered.length ? (
        <div className="heading">No Counrties Information and Details Found ❗❕</div>
      ) : (filtered.map((info) => (
        <div key={info.country}>
          <div className="header">
            <FaVirus className="virsus-icon" />
            <div className="naCases">
              <h1>
                {info.country}
                {' '}
              </h1>
              <span>{info.cases}</span>
            </div>
          </div>
          <div>
            <div className="info">
              <p>Today cases in the country</p>
              <div className="cases-number">
                <span>{info.todayCases}</span>
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </div>
            </div>
            <div className="info">
              <p>General deaths</p>
              <div className="cases-number">
                <span>{info.deaths}</span>
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </div>
            </div>
            <div className="info">
              <p>Total Recovered</p>
              <div className="cases-number">
                <span>{info.recovered}</span>
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </div>
            </div>
            <div className="info">
              <p>Continent name</p>
              <div className="cases-number">
                <span>{info.continent}</span>
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </div>
            </div>
            <div className="info">
              <p>Total tests that made</p>
              <div className="cases-number">
                <span>{info.tests}</span>
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </div>
            </div>
            <div className="info">
              <p>Today deaths</p>
              <div className="cases-number">
                <span>{info.todayDeaths}</span>
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </div>
            </div>
            <div className="info">
              <p>Today Recovered</p>
              <div className="cases-number">
                <span>{info.todayRecovered}</span>
                <Link to="/"><BsArrowRightCircle className="arrow" /></Link>
              </div>
            </div>
          </div>
        </div>
      )))}
    </div>
  );
};

export default Details;
