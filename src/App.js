import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomeGymPage from './pages/WelcomeGymPage';

// The root App component, providing the main layout and routing.
function App() {
  return (
    <div className="App dark:bg-darkBg-DEFAULT bg-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<WelcomeGymPage />} />
        {/* Future routes can be added here */}
      </Routes>
    </div>
  );
}

export default App;
