import React from 'react';
import { BookOpen, Award, Users, Globe } from 'lucide-react';

/**
 * @typedef {object} FeatureSectionProps
 * // No props for the FeatureSection, it's a self-contained display component.
 */

/**
 * FeatureSection component: Showcases the key benefits and features of the e-learning platform.
 *
 * @param {FeatureSectionProps} props - The props for the FeatureSection component.
 * @returns {JSX.Element} The rendered feature section.
 */
function FeatureSection() {
  const features = [
    {
      icon: BookOpen,
      title: 'Diverse Course Catalog',
      description: 'Access a vast library of courses covering technology, business, arts, and more. Always up-to-date content.'
    },
    {
      icon: Award,
      title: 'Expert Instructors',
      description: 'Learn from industry leaders and passionate educators with real-world experience and proven teaching methods.'
    },
    {
      icon: Users,
      title: 'Interactive Community',
      description: 'Connect with fellow learners, participate in discussions, and collaborate on projects to enhance your learning journey.'
    },
    {
      icon: Globe,
      title: 'Flexible Learning Paths',
      description: 'Study at your own pace, on any device. Customize your learning experience to fit your schedule and goals.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Why Choose Our E-Learning Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <feature.icon size={48} className="text-indigo-600 mb-6" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(FeatureSection);
