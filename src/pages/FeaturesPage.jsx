import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, Globe, Video, MessageCircle, BarChart, HardHat } from 'lucide-react';

/**
 * @typedef {object} FeatureItem
 * @property {React.ElementType} icon - Lucide React icon component.
 * @property {string} title - Title of the feature.
 * @property {string} description - Detailed description of the feature.
 */

/**
 * @typedef {object} FeaturesPageProps
 * // No props for the FeaturesPage, it's a self-contained display component.
 */

/**
 * FeaturesPage component: Provides a detailed overview of the platform's key features.
 * Expands on the landing page's feature section with more depth and variety.
 *
 * @param {FeaturesPageProps} props - The props for the FeaturesPage component.
 * @returns {JSX.Element} The rendered features page.
 */
function FeaturesPage() {
  const mainFeatures = [
    {
      icon: BookOpen,
      title: 'Extensive Course Library',
      description: 'Access thousands of courses across various domains, from programming to arts, taught by experts worldwide. New content added weekly to keep you updated.'
    },
    {
      icon: Award,
      title: 'Certification & Recognition',
      description: 'Earn industry-recognized certificates upon course completion to showcase your new skills and boost your career prospects.'
    },
    {
      icon: Users,
      title: 'Thriving Global Community',
      description: 'Connect with a diverse community of learners and instructors. Engage in forums, study groups, and collaborative projects.'
    },
    {
      icon: Globe,
      title: 'Flexible Learning Anywhere',
      description: 'Learn at your own pace, on any device. Our platform is optimized for desktop, tablet, and mobile, ensuring a seamless experience.'
    }
  ];

  const additionalFeatures = [
    {
      icon: Video,
      title: 'High-Quality Video Lessons',
      description: 'Engage with crystal-clear video content, interactive quizzes, and downloadable resources for an immersive learning experience.'
    },
    {
      icon: MessageCircle,
      title: '24/7 Instructor Support',
      description: 'Get your questions answered quickly by instructors and teaching assistants. Personalized feedback and guidance are just a click away.'
    },
    {
      icon: BarChart,
      title: 'Personalized Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics, track your achievements, and set new goals to stay motivated.'
    },
    {
      icon: HardHat,
      title: 'Hands-on Projects & Labs',
      description: 'Apply your knowledge through real-world projects and coding labs, designed to solidify your understanding and build a strong portfolio.'
    }
  ];

  return (
    <div className="features-page py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6">
          Empower Your Future with Our Features
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Discover what makes our e-learning platform the best choice for achieving your educational and career goals.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            Core Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <feature.icon size={48} className="text-indigo-600 mb-6" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            Advanced Tools & Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <feature.icon size={48} className="text-purple-600 mb-6" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">Ready to experience these features?</p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
            aria-label="Start Learning Today"
          >
            Start Learning Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FeaturesPage);
