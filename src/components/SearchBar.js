import '../styles/SearchBar.css';
import img from '../images/map.jpg';

const SearchBar = () => (
  <div className="all-cases">
    <div className="first-section">
      <img className="img-map" src={img} alt="map-world" />
      <div className="info">
        <h1 className="confimred-cases">All new Confrimed Cases</h1>
      </div>
    </div>
  </div>
);

export default SearchBar;
