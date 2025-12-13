import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomeGymPage from './pages/WelcomeGymPage';
import { ThemeContextProvider } from './contexts/ThemeContext';

// The root App component, providing the main layout and routing.
// It now wraps the application with ThemeContextProvider to enable dark/light mode.
function App() {
  return (
    <ThemeContextProvider>
      <div className="App dark:bg-darkBg-DEFAULT bg-white min-h-screen text-gray-900 dark:text-darkText-DEFAULT">
        <Header />
        <Routes>
          <Route path="/" element={<WelcomeGymPage />} />
          {/* Future routes can be added here */}
        </Routes>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
