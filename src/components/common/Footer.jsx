import React from 'react';

function Footer() {
  return (
    // Removed dark mode classes for footer background
    <footer className="bg-primary-dark text-primary-contrast py-6 mt-8 shadow-inner">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
        <p className="mt-2">Designed with ❤️ for a modern e-commerce experience.</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
