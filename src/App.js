import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Details/:country" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
