import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Indium/i);
  expect(linkElement).toBeInTheDocument();
});

// test data
// test data1
// test data2
// test data3
// test data4
// test data5