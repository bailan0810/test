import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux'
import store from "./store/index"
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
