import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/**
 * Header component for the application, displaying the title and a cart icon with item count.
 * @returns {JSX.Element} The Header component.
 */
function Header() {
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-primary-dark text-primary-contrast p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-wide hover:text-primary-light transition-colors duration-200">
        GymApp
      </Link>
      <nav>
        <ul className="flex items-center space-x-6">
          {/* Example Nav Link - can be expanded later */}
          <li>
            <Link to="/courses" className="text-lg hover:text-primary-light transition-colors duration-200">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-lg hover:text-primary-light transition-colors duration-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/cart" className="relative flex items-center p-2 rounded-full hover:bg-primary transition-colors duration-200">
              <ShoppingCart size={24} className="text-primary-contrast" aria-label="Shopping Cart" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-danger text-danger-contrast rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Header);
