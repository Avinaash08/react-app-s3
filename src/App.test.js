import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Indium/i);
  expect(linkElement).toBeInTheDocument();
});

// test data
//TEST data1
//Test data2
//Test data3