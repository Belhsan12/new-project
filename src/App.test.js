import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartProvider

test('renders EcomApp title in Navbar and Hero Section text', () => {
  render(
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );
  // Check for the main heading on the hero section
  const heroTitleElement = screen.getByText(/Discover Your Next Favorite Product/i);
  expect(heroTitleElement).toBeInTheDocument();

  // Check for the Navbar title
  const navbarTitleElement = screen.getByText(/EcomApp/i);
  expect(navbarTitleElement).toBeInTheDocument();

  // Check for the 'Shop Now' button
  const shopNowButton = screen.getByRole('button', { name: /Shop Now/i });
  expect(shopNowButton).toBeInTheDocument();
});
