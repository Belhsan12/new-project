import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

function Navbar() {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Calculate total items in cart for display
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    // TODO: Implement actual search functionality, e.g., navigate to /products?search=query
    console.log('Searching for:', searchQuery);
    // For now, just clear the search query
    setSearchQuery('');
  }, [searchQuery]);

  return (
    <nav className="bg-primary-DEFAULT dark:bg-darkBg-darker text-primary-contrast shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-primary-light transition-colors duration-200">
          E-Shop
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/products" className="hover:text-primary-light transition-colors duration-200">Products</Link>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 rounded-md border border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light bg-primary-dark text-primary-contrast placeholder-primary-light/70 w-48"
            />
            <button type="submit" className="absolute right-2 text-primary-light hover:text-primary-contrast transition-colors duration-200 p-1">
              <Search size={20} />
            </button>
          </form>
          {/* Cart Icon */}
          <Link to="/cart" className="relative hover:text-primary-light transition-colors duration-200">
            <ShoppingCart size={24} />
            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-danger-DEFAULT text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Search Icon for Mobile */}
          <button onClick={handleSearch} className="text-primary-contrast hover:text-primary-light p-1">
            <Search size={24} />
          </button>
          {/* Cart Icon for Mobile */}
          <Link to="/cart" className="relative hover:text-primary-light transition-colors duration-200">
            <ShoppingCart size={24} />
            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-danger-DEFAULT text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </Link>
          <button onClick={toggleMobileMenu} className="text-primary-contrast hover:text-primary-light p-1">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-dark dark:bg-darkBg-darker pb-4 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/products"
              onClick={toggleMobileMenu}
              className="block w-full text-center py-2 hover:bg-primary-light hover:text-primary-contrast transition-colors duration-200"
            >
              Products
            </Link>
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearch} className="w-full px-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light bg-primary-dark text-primary-contrast placeholder-primary-light/70"
              />
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default React.memo(Navbar);
