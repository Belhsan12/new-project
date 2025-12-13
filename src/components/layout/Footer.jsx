import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @typedef {object} FooterProps
 * // No props for the Footer, it's a self-contained layout component.
 */

/**
 * Footer component: Displays copyright information and quick links at the bottom of the page.
 *
 * @param {FooterProps} props - The props for the Footer component.
 * @returns {JSX.Element} The rendered footer.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <Link to="/about" className="text-gray-300 hover:text-indigo-400 mx-2" aria-label="About Us">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-indigo-400 mx-2" aria-label="Contact Us">
            Contact
          </Link>
          <Link to="/privacy" className="text-gray-300 hover:text-indigo-400 mx-2" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} E-Learning App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
