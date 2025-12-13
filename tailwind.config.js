/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // CRITICAL: Enable 'class' dark mode strategy for manual toggling
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary accent color (Pornhub-like orange)
        primary: {
          DEFAULT: '#FF9900', // A vibrant orange
          light: '#FFB84D',  // Lighter for some text/accents
          dark: '#CC7A00',   // Darker for hover states
          contrast: '#FFFFFF', // For text on primary background
        },
        // Secondary accent, often used for links or less critical actions
        secondary: {
          DEFAULT: '#800080', // Deep purple
          light: '#C792DF', // Lighter purple
          dark: '#6A006A',  // Darker purple
          contrast: '#FFFFFF',
        },
        // Danger/Error color (e.g., remove from watchlist, age verification warnings)
        danger: {
          DEFAULT: '#E53E3E', // A strong red
          light: '#FC8181',   // Lighter shade for text
          dark: '#C53030',    // Darker for hover
          contrast: '#FFFFFF',
        },
        // Success color for notifications
        success: {
          DEFAULT: '#48BB78', // A pleasant green
          dark: '#38A169',
          contrast: '#FFFFFF',
        },
        // Backgrounds for dark mode
        darkBg: {
          DEFAULT: '#1a1a1a', // Very dark gray, almost black
          darker: '#0a0a0a',  // Even darker for contrast sections like footer
          card: '#2a2a2a',    // For cards, slightly lighter than main background
        },
        // Text colors for dark mode (re-aligning default gray-100/gray-200)
        darkText: {
          DEFAULT: '#E2E8F0', // light gray for general text
          subtle: '#A0AEC0',  // subtle gray for descriptions
        },
      },
      // Adding some custom animations for a more dynamic feel
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 153, 0, 0.7)', borderColor: '#FF9900' },
          '50%': { boxShadow: '0 0 15px rgba(255, 153, 0, 1)', borderColor: '#FFB84D' },
        },
        'pulse-fade': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite ease-in-out',
        'pulse-fade': 'pulse-fade 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
