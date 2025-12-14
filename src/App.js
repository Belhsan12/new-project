import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    // Removed dark mode classes to enforce a light theme throughout the application
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/* Future routes can be added here */}
        {/* <Route path="/courses" element={<CoursesPage />} /> */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
