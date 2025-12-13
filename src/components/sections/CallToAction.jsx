import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @typedef {object} CallToActionProps
 * // No props for the CallToAction, it's a self-contained display component.
 */

/**
 * CallToAction component: A prominent section encouraging users to take a specific action,
 * such as signing up or starting a free trial.
 *
 * @param {CallToActionProps} props - The props for the CallToAction component.
 * @returns {JSX.Element} The rendered call-to-action section.
 */
function CallToAction() {
  return (
    <section className="bg-indigo-700 text-white py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Join thousands of students worldwide and unlock new opportunities.
        </p>
        <Link
          to="/signup"
          className="px-10 py-5 bg-white text-indigo-700 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105 inline-block"
          aria-label="Sign Up for Free"
        >
          Sign Up for Free
        </Link>
      </div>
    </section>
  );
}

export default React.memo(CallToAction);
