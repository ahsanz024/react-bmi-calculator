import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render App component', () => {
  const { getByText } = render(<App />);
  expect(getByText(/BMI Healthy Weight Calculator/i)).toBeInTheDocument();
  expect(getByText(/Body Mass Index \(BMI\)/i)).toBeInTheDocument();
});