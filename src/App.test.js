import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio navbar', () => {
  render(<App />);
  const navBrand = screen.getByAltText(/brand/i);
  expect(navBrand).toBeInTheDocument();
});
