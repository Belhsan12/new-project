import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartProvider

test('renders Welcome to the Gym! title and GymApp header', () => {
  render(
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
  // Check for the main heading on the welcome page
  const welcomeTitleElement = screen.getByText(/Welcome to the Gym!/i);
  expect(welcomeTitleElement).toBeInTheDocument();

  // Optionally, check for the header title
  const headerTitleElement = screen.getByText(/GymApp/i);
  expect(headerTitleElement).toBeInTheDocument();
});
