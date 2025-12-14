/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // CRITICAL: Dark mode strategy 'class' removed as per user request to use only light colors.
  // This comment is preserved as per existing file, but dark variants are added to components for future-proofing.
  // darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Existing custom colors, preserved for consistency
        primary: {
          DEFAULT: '#007bff', // A strong, vibrant blue
          light: '#66b3ff',  // Lighter for accents/hovers
          dark: '#0056b3',   // Darker for hover states
          contrast: '#FFFFFF', // For text on primary background
        },
        secondary: {
          DEFAULT: '#28a745', // A vibrant green
          light: '#6de08a', // Lighter green
          dark: '#1e7e34',  // Darker green
          contrast: '#FFFFFF',
        },
        danger: {
          DEFAULT: '#E53E3E', // A strong red
          light: '#FC8181',   // Lighter shade for text
          dark: '#C53030',    // Darker for hover
          contrast: '#FFFFFF',
        },
        success: {
          DEFAULT: '#48BB78', // A pleasant green (can be same as secondary for simplicity or distinct)
          dark: '#38A169',
          contrast: '#FFFFFF',
        },
      },
      // Custom shadows for a softer, elevated look
      boxShadow: {
        'soft-xl': '0 12px 30px rgba(0,0,0,0.15)',
        'soft-hover': '0 18px 45px rgba(0,0,0,0.25)',
      },
      // Adding some custom animations for a more dynamic feel
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 123, 255, 0.7)', borderColor: '#007bff' },
          '50%': { boxShadow: '0 0 15px rgba(0, 123, 255, 1)', borderColor: '#66b3ff' },
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
