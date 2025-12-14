import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import CallToAction from '../components/CallToAction';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <HeroSection />
      <FeaturedProducts />
      <CallToAction />
    </div>
  );
};

export default LandingPage;
