import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

afterEach(() => cleanup());

it('App Renders Correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
