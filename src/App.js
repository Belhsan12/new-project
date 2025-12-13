import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// The root App component, providing the main layout and routing.
function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes here as the application grows */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
