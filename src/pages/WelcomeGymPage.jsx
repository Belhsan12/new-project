import React from 'react';
import { Dumbbell, Calendar, Users, Target } from 'lucide-react';

// The WelcomeGymPage component serves as the landing page for the gym application.
// It features a hero section, key benefits, and a call to action.
const WelcomeGymPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-darkBg-DEFAULT text-darkText-DEFAULT pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT py-20 md:py-32 text-center text-white overflow-hidden shadow-lg">
        <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579758712399-52c6f137e732?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-glow text-primary-contrast">
            Welcome to the Gym!
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto opacity-90">
            Your journey to a stronger, healthier you starts here.
            Achieve your fitness goals with our state-of-the-art facilities and expert trainers.
          </p>
          <button className="bg-primary-contrast hover:bg-gray-200 text-primary-DEFAULT font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary-contrast focus:ring-opacity-50">
            Explore Our Plans
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-darkBg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-darkText-DEFAULT">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-darkBg-darker p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Dumbbell className="h-16 w-16 text-primary-DEFAULT mx-auto mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-darkText-DEFAULT">Modern Equipment</h3>
              <p className="text-gray-600 dark:text-darkText-subtle">
                Access to the latest fitness technology and a wide range of machines for all workout types.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-darkBg-darker p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Users className="h-16 w-16 text-secondary-DEFAULT mx-auto mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-darkText-DEFAULT">Expert Trainers</h3>
              <p className="text-gray-600 dark:text-darkText-subtle">
                Our certified personal trainers are here to guide you, motivate you, and help you reach your peak potential.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-darkBg-darker p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <Calendar className="h-16 w-16 text-success-DEFAULT mx-auto mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-darkText-DEFAULT">Flexible Schedules</h3>
              <p className="text-gray-600 dark:text-darkText-subtle">
                Workout on your terms with 24/7 access and a variety of classes throughout the week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-darkBg-DEFAULT dark:bg-darkBg-darker text-center text-primary-contrast">
        <div className="container mx-auto px-4">
          <Target className="h-20 w-20 text-primary-DEFAULT mx-auto mb-8 animate-pulse-fade" aria-hidden="true" />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Body?
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto opacity-80">
            Don't wait any longer. Join our community today and take the first step towards a healthier, happier you.
          </p>
          <button className="bg-primary-DEFAULT hover:bg-primary-dark text-primary-contrast font-bold py-4 px-10 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary-DEFAULT focus:ring-opacity-75">
            Get Started Today!
          </button>
        </div>
      </section>
    </main>
  );
};

export default WelcomeGymPage;
