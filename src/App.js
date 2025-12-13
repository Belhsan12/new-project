import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';

// The root App component, providing the main layout and routing.
// It now wraps the application with ThemeContextProvider to enable dark/light mode.
function App() {
  return (
    <div className="App dark:bg-darkBg-darker">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {/* Add more routes here as the application grows */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
