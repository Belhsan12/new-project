import React from 'react';
import { Dumbbell, Calendar, Users, Target, CheckCircle } from 'lucide-react';

// The WelcomeGymPage component serves as the landing page for the gym application.
// It features a hero section, key benefits, an 'About Us' section, and a call to action,
// with enhanced styling for a friendlier and more engaging user experience.
const WelcomeGymPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-darkBg-DEFAULT text-gray-900 dark:text-darkText-DEFAULT pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT py-20 md:py-32 text-center text-primary-contrast overflow-hidden shadow-lg">
        <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579758712399-52c6f137e732?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-glow text-primary-contrast drop-shadow-lg">
            Your Fitness Journey Begins Here!
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto opacity-95 leading-relaxed">
            Achieve your fitness goals with our state-of-the-art facilities, expert trainers, and a supportive community.
            Transform your body and mind for a healthier, happier life.
          </p>
          <button className="bg-primary-contrast hover:bg-gray-200 text-primary-DEFAULT font-bold py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary-contrast focus:ring-opacity-50">
            Explore Our Plans
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-darkBg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-darkText-DEFAULT">
            Why Choose <span className="text-primary-DEFAULT">GymApp</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-darkBg-darker p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 dark:border-darkBg-DEFAULT group">
              <Dumbbell className="h-16 w-16 text-primary-DEFAULT mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-darkText-DEFAULT">Modern Equipment</h3>
              <p className="text-gray-600 dark:text-darkText-subtle leading-relaxed">
                Access to the latest fitness technology and a wide range of machines for all workout types, ensuring a comprehensive training experience.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white dark:bg-darkBg-darker p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 dark:border-darkBg-DEFAULT group">
              <Users className="h-16 w-16 text-secondary-DEFAULT mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-darkText-DEFAULT">Expert Trainers</h3>
              <p className="text-gray-600 dark:text-darkText-subtle leading-relaxed">
                Our certified personal trainers are here to guide you, motivate you, and help you reach your peak potential with personalized plans.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white dark:bg-darkBg-darker p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 dark:border-darkBg-DEFAULT group">
              <Calendar className="h-16 w-16 text-primary-DEFAULT mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-darkText-DEFAULT">Flexible Schedules</h3>
              <p className="text-gray-600 dark:text-darkText-subtle leading-relaxed">
                Workout on your terms with 24/7 access and a variety of classes throughout the week, fitting your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - New for a friendlier UI */}
      <section className="py-16 md:py-24 bg-darkBg-DEFAULT dark:bg-darkBg-darker text-primary-contrast">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-primary-DEFAULT">GymApp</span>
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto opacity-80 leading-relaxed">
            At GymApp, we're more than just a fitness center – we're a community dedicated to health and wellness. Our mission is to provide an inclusive and motivating environment where everyone can achieve their fitness goals, regardless of their starting point. We believe in empowering our members through top-tier facilities, personalized guidance, and a supportive atmosphere.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-darkBg-card rounded-lg shadow-xl">
              <CheckCircle className="h-12 w-12 text-secondary-DEFAULT mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-darkText-subtle">Join a supportive network of fitness enthusiasts.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-darkBg-card rounded-lg shadow-xl">
              <CheckCircle className="h-12 w-12 text-primary-DEFAULT mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
              <p className="text-darkText-subtle">Mind and body wellness programs.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-darkBg-card rounded-lg shadow-xl">
              <CheckCircle className="h-12 w-12 text-secondary-DEFAULT mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-darkText-subtle">Track your progress and celebrate achievements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary-DEFAULT dark:bg-primary-dark text-center text-primary-contrast">
        <div className="container mx-auto px-4">
          <Target className="h-20 w-20 text-primary-contrast mx-auto mb-8 animate-pulse-fade" aria-hidden="true" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Body & Life?
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto opacity-90 leading-relaxed">
            Don't wait any longer. Join our community today and take the first step towards a healthier, happier you. Enroll now and unlock your full potential!
          </p>
          <button className="bg-primary-contrast hover:bg-gray-200 text-primary-DEFAULT font-bold py-4 px-10 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary-contrast focus:ring-opacity-75">
            Get Started Today!
          </button>
        </div>
      </section>
    </main>
  );
};

export default WelcomeGymPage;
