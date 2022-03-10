/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Details from '../components/Details';
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
        <Details />
      </Provider>,
    );
    const message = screen.getByText('No Counrties Information and Details Found ❗❕');
    expect(message).toMatchSnapshot();
  });
});
