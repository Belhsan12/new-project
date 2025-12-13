import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import ContactPage from './pages/ContactPage'; // Import the new ContactPage component

// The root App component, providing the main layout and routing.
// It includes a Header and defines the main application routes.
function App() {
  return (
    <div className="App dark:bg-darkBg-darker">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Add the new route for the ContactPage */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
