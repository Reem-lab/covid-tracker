import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => (
  <>
    <nav className="nav-bar">
      <div className="left-nav">
        <Link to="/">
          <IoIosArrowBack className="icon-white iconA" />
        </Link>
        <p className="middle-nav date">2021</p>
      </div>
      <p className="middle-nav">Most cases</p>
      <div className="right-nav">
        <FaMicrophone className="iconM" />
        <FiSettings className="iconS" />
      </div>
    </nav>
  </>
);

export default NavBar;
