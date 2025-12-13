import React from 'react';
import { Bolt, Heart, ShieldCheck } from 'lucide-react';

const WelcomePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-darkBg min-h-screen text-gray-900 dark:text-darkText-DEFAULT">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center p-8"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019624545-df13945bdc20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
            Welcome to the Gym!
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed animate-fade-in-up delay-200">
            Your journey to a stronger, healthier you starts here. Discover world-class facilities and expert trainers.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-primary-contrast font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-pulse-fade">
            Join Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-darkBg-card">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 text-gray-800 dark:text-darkText-DEFAULT">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-lg shadow-xl bg-gray-50 dark:bg-darkBg-darker transform transition duration-300 hover:scale-105 border-t-4 border-primary">
              <Bolt size={48} className="text-primary mx-auto mb-6" />
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-darkText-DEFAULT">State-of-the-Art Equipment</h4>
              <p className="text-lg text-gray-700 dark:text-darkText-subtle">Access to the latest fitness technology and high-quality machines for every workout.</p>
            </div>
            <div className="p-8 rounded-lg shadow-xl bg-gray-50 dark:bg-darkBg-darker transform transition duration-300 hover:scale-105 border-t-4 border-secondary">
              <Heart size={48} className="text-secondary mx-auto mb-6" />
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-darkText-DEFAULT">Expert Personal Trainers</h4>
              <p className="text-lg text-gray-700 dark:text-darkText-subtle">Achieve your goals faster with personalized coaching and guidance from certified professionals.</p>
            </div>
            <div className="p-8 rounded-lg shadow-xl bg-gray-50 dark:bg-darkBg-darker transform transition duration-300 hover:scale-105 border-t-4 border-primary">
              <ShieldCheck size={48} className="text-primary mx-auto mb-6" />
              <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-darkText-DEFAULT">Supportive Community</h4>
              <p className="text-lg text-gray-700 dark:text-darkText-subtle">Join a community that motivates and inspires you to push your limits every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary dark:bg-primary-dark text-center text-primary-contrast">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Body?</h3>
          <p className="text-xl mb-8 opacity-90">Sign up today and get your first week FREE!</p>
          <button className="bg-secondary hover:bg-secondary-dark text-secondary-contrast font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
