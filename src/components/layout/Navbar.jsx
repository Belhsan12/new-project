import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/**
 * @typedef {object} NavbarProps
 * // No props for the Navbar, it's a self-contained layout component.
 */

/**
 * Navbar component: Provides global navigation and branding for the application.
 * Features a responsive design with a mobile menu toggle.
 *
 * @param {NavbarProps} props - The props for the Navbar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600" aria-label="Home">
          E-Learning
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/courses" className="text-gray-700 hover:text-indigo-600 font-medium" aria-label="View Courses">
            Courses
          </Link>
          <Link to="/features" className="text-gray-700 hover:text-indigo-600 font-medium" aria-label="Learn about Features">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium" aria-label="View Pricing">
            Pricing
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
            aria-label="Log In"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors duration-200"
            aria-label="Sign Up"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-inner animate-slide-down">
          <div className="flex flex-col space-y-4 px-4">
            <Link to="/courses" className="text-gray-700 hover:text-indigo-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Courses
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-indigo-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default React.memo(Navbar);
