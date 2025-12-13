import React, { createContext, useState, useEffect, useCallback } from 'react';

// Create a context for the theme
export const ThemeContext = createContext(null);

/**
 * Provides the theme context (dark/light mode) to its children.
 * Manages theme state, persists it to localStorage, and applies/removes 'dark' class to document.documentElement.
 */
export const ThemeContextProvider = ({ children }) => {
  // Initialize theme state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme === 'dark' || (storedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false; // Default to light mode on server/initial render
  });

  // Effect to apply/remove 'dark' class to the HTML element and update localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]); // Re-run effect when darkMode state changes

  // Memoized function to toggle the theme
  const toggleTheme = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, []);

  // Provide the theme state and toggle function to children
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
