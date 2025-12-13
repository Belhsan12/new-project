import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @typedef {object} HeroSectionProps
 * // No props for the HeroSection, it's a self-contained display component.
 */

/**
 * HeroSection component: The main introductory section of the landing page.
 * Features a compelling headline, description, and call-to-action buttons.
 *
 * @param {HeroSectionProps} props - The props for the HeroSection component.
 * @returns {JSX.Element} The rendered hero section.
 */
function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 md:py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-scale-in">
          Unlock Your Potential with E-Learning
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-0 animate-scale-in animation-delay-200">
          Discover hundreds of courses taught by expert instructors. Learn new skills, advance your career, and achieve your goals at your own pace.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/signup"
            className="px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            aria-label="Start Learning Today"
          >
            Start Learning Today
          </Link>
          <Link
            to="/courses"
            className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300 shadow-lg"
            aria-label="Explore Courses"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

export default React.memo(HeroSection);
