import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Gym title', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const titleElement = screen.getByText(/Gym/i);
  expect(titleElement).toBeInTheDocument();
});