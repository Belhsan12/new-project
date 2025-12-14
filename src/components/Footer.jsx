import React from 'react';
import { Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-slate-300 dark:text-slate-400 py-10 shadow-inner shadow-slate-900/10 dark:shadow-slate-950/20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Package className="w-6 h-6 text-indigo-400 dark:text-indigo-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            EcomApp
          </span>
        </div>
        <p className="mb-2">&copy; {new Date().getFullYear()} EcomApp. All rights reserved.</p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Designed with passion and modern web technologies.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
