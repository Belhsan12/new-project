import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary-dark to-primary text-primary-contrast p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Dumbbell size={32} className="text-secondary" />
          <h1 className="text-3xl font-bold tracking-tight">GymApp</h1>
        </div>
        <nav>
          {/* Navigation links can be added here */}
          <ul className="flex space-x-4">
            {/* <li><a href="#" className="hover:text-secondary transition-colors duration-200">Home</a></li> */}
            {/* <li><a href="#" className="hover:text-secondary transition-colors duration-200">About</a></li> */}
            {/* <li><a href="#" className="hover:text-secondary transition-colors duration-200">Contact</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
