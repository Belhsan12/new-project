import React from 'react';
import { Dumbbell } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom'; // Import Link for logo and NavLink for active styling

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary-dark to-primary text-primary-contrast p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and App Name - navigates to home page on click */}
        <Link to="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded-md">
          <Dumbbell size={32} className="text-secondary" aria-hidden="true" />
          <h1 className="text-3xl font-bold tracking-tight">GymApp</h1>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-secondary transition-colors duration-200 ${isActive ? 'text-secondary font-semibold' : ''}`
                }
                end // 'end' prop ensures this link is only active when the path is exactly '/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-secondary transition-colors duration-200 ${isActive ? 'text-secondary font-semibold' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
