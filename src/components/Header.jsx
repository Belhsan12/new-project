import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme'; // Import the custom theme hook

// A memoized Header component for consistent navigation across the application.
// Now includes a theme toggle for dark/light mode.
const Header = React.memo(() => {
  const { darkMode, toggleTheme } = useTheme(); // Consume the theme context

  return (
    <header className="bg-darkBg-DEFAULT dark:bg-darkBg-darker text-darkText-DEFAULT shadow-md py-4 px-6 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary-DEFAULT hover:text-primary-dark transition-colors duration-300">
          <Dumbbell className="h-7 w-7" aria-hidden="true" />
          <span className="sr-only">GymApp Home</span>
          <span>GymApp</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-darkText-DEFAULT hover:text-primary-light transition-colors duration-300 px-3 py-2 rounded-md"
            aria-label="Home page"
          >
            Home
          </Link>
          {/* Example of another link, could be 'About', 'Services', etc. */}
          <button
            className="bg-primary-DEFAULT hover:bg-primary-dark text-primary-contrast font-semibold py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:ring-opacity-75"
            aria-label="Join now button"
          >
            Join Now
          </button>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-darkText-DEFAULT hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT transition-colors duration-200"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </nav>
      </div>
    </header>
  );
});

export default Header;
