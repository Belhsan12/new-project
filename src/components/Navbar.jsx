import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package } from 'lucide-react'; // Using lucide-react for icons

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300">
          <Package className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          EcomApp
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/products" className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200">
            Products
          </Link>
          <Link to="/categories" className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200">
            Categories
          </Link>
          <Link to="/cart" className="relative text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" aria-label="View shopping cart">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-fade">3</span> {/* Dummy cart count */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
