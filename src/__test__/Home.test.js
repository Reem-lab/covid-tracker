/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import store from '../redux/store';

describe('Test the Countries list', () => {
  it('renders correctly', () => {
    const rocket = [
      {
        country: 'Afghanstan',
        cases: 222,
      },
    ];

    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const message = screen.getByText('No Counrties Information Found ❗❕');
    expect(message).toMatchSnapshot();
  });
});
