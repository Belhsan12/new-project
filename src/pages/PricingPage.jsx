import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

/**
 * @typedef {object} PricingPlan
 * @property {string} name - Name of the pricing plan.
 * @property {string} price - Monthly price of the plan.
 * @property {string} description - Short description of the plan.
 * @property {string[]} features - List of features included in the plan.
 * @property {boolean} isPopular - Flag to indicate if this is a popular plan.
 */

/**
 * @typedef {object} PricingPageProps
 * // No props for the PricingPage, it's a self-contained display component.
 */

/**
 * PricingPage component: Displays various subscription plans for the e-learning platform.
 * Features different tiers with their respective benefits and pricing.
 *
 * @param {PricingPageProps} props - The props for the PricingPage component.
 * @returns {JSX.Element} The rendered pricing page.
 */
function PricingPage() {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$19/month',
      description: 'Start your learning journey with essential courses.',
      features: [
        'Access to 100+ courses',
        'Basic certificate of completion',
        'Community forum access',
        'Standard customer support'
      ],
      isPopular: false
    },
    {
      name: 'Pro',
      price: '$49/month',
      description: 'Unlock advanced learning with premium content and features.',
      features: [
        'All Basic features',
        'Access to ALL courses (500+)',
        'Premium certificates',
        'Instructor Q&A sessions',
        'Downloadable course materials',
        'Priority customer support'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for teams and organizations.',
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Custom learning paths',
        'Team analytics & reporting',
        'Single Sign-On (SSO) integration',
        'On-demand training & workshops'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="pricing-page py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Choose the plan that best fits your learning style and goals. No hidden fees, cancel anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl ${plan.isPopular ? 'border-2 border-indigo-600' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h2>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="text-5xl font-extrabold text-indigo-600 mb-6">
                {plan.price === 'Custom' ? (
                  <span className="text-4xl">{plan.price}</span>
                ) : (
                  <span>{plan.price.split('/')[0]}<span className="text-xl text-gray-500">{plan.price.split('/')[1] ? `/${plan.price.split('/')[1]}` : ''}</span></span>
                )}
              </div>
              <ul className="flex-grow mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                className={`mt-auto block text-center px-6 py-3 rounded-md font-semibold transition-colors duration-200
                  ${plan.isPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-indigo-600 hover:bg-gray-200'}
                `}
                aria-label={`Choose ${plan.name} plan`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our team is here to help you find the perfect plan. Reach out to us for more details.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md font-semibold hover:bg-indigo-50 transition-colors duration-200"
            aria-label="Contact us for pricing inquiries"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PricingPage);
