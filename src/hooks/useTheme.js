import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/**
 * Custom hook to access the theme context.
 * Throws an error if used outside of a ThemeContextProvider.
 */
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};

export default useTheme;
