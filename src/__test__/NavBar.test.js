import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <NavBar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
