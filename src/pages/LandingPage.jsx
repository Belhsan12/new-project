import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeatureSection from '../components/sections/FeatureSection';
import CallToAction from '../components/sections/CallToAction';

/**
 * @typedef {object} LandingPageProps
 * // No props for the landing page itself, it composes sections.
 */

/**
 * LandingPage component: Composes various sections to form the main landing page.
 * This page is responsible for presenting the e-learning app's value proposition.
 *
 * @param {LandingPageProps} props - The props for the LandingPage component.
 * @returns {JSX.Element} The rendered landing page.
 */
function LandingPage() {
  return (
    <div className="landing-page">
      <HeroSection />
      <FeatureSection />
      <CallToAction />
    </div>
  );
}

export default React.memo(LandingPage);
