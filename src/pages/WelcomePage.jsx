import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

/**
 * WelcomePage component for the application's landing page.
 * Displays a welcome message and some feature highlights.
 * @returns {JSX.Element} The WelcomePage component.
 */
function WelcomePage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-glow">
          Welcome to the Gym!
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Your ultimate destination for fitness, knowledge, and skill development. 
          Unlock your potential with our expert-led courses and vibrant community.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-soft-xl p-6 text-center transition-transform transform hover:scale-105 duration-300">
          <BookOpen size={48} className="text-primary mx-auto mb-4" aria-label="Explore Courses" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Vast Course Library</h2>
          <p className="text-gray-600">Dive into a diverse range of courses covering various fitness disciplines and academic subjects.</p>
        </div>
        <div className="bg-white rounded-lg shadow-soft-xl p-6 text-center transition-transform transform hover:scale-105 duration-300">
          <Award size={48} className="text-secondary mx-auto mb-4" aria-label="Earn Certifications" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Earn Certifications</h2>
          <p className="text-gray-600">Complete courses and earn industry-recognized certifications to boost your profile.</p>
        </div>
        <div className="bg-white rounded-lg shadow-soft-xl p-6 text-center transition-transform transform hover:scale-105 duration-300">
          <Users size={48} className="text-primary mx-auto mb-4" aria-label="Join Community" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Engaging Community</h2>
          <p className="text-gray-600">Connect with fellow learners and instructors in our active and supportive community forums.</p>
        </div>
      </section>

      <section className="text-center">
        <button className="bg-primary hover:bg-primary-dark text-primary-contrast font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-soft-hover transition-all duration-300">
          Start Learning Today!
        </button>
      </section>
    </main>
  );
}

export default React.memo(WelcomePage);
