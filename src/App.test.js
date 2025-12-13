import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Welcome to the Gym! title on the welcome page', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  // Check for the main heading on the welcome page
  const titleElement = screen.getByText(/Welcome to the Gym!/i);
  expect(titleElement).toBeInTheDocument();

  // Optionally, check for the header title
  const headerTitleElement = screen.getByText(/GymApp/i);
  expect(headerTitleElement).toBeInTheDocument();
});
