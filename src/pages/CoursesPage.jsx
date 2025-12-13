import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, User } from 'lucide-react';

/**
 * @typedef {object} Course
 * @property {string} id - Unique identifier for the course.
 * @property {string} title - The title of the course.
 * @property {string} description - A brief description of the course.
 * @property {string} instructor - The name of the course instructor.
 * @property {number} rating - The average rating of the course (out of 5).
 * @property {string} imageUrl - URL for the course thumbnail image.
 */

/**
 * @typedef {object} CoursesPageProps
 * // No props for the CoursesPage, it manages its own data (or would fetch it).
 */

/**
 * CoursesPage component: Displays a catalog of available e-learning courses.
 * Each course is presented as a card with key information and a link to its details.
 *
 * @param {CoursesPageProps} props - The props for the CoursesPage component.
 * @returns {JSX.Element} The rendered courses page.
 */
function CoursesPage() {
  // Dummy course data for demonstration purposes
  const courses = [
    {
      id: '1',
      title: 'Introduction to React',
      description: 'Master the fundamentals of React and build your first dynamic web applications.',
      instructor: 'Jane Doe',
      rating: 4.8,
      imageUrl: 'https://via.placeholder.com/300x180/6366f1/ffffff?text=React'
    },
    {
      id: '2',
      title: 'Advanced JavaScript',
      description: 'Deep dive into modern JavaScript features, asynchronous programming, and best practices.',
      instructor: 'John Smith',
      rating: 4.7,
      imageUrl: 'https://via.placeholder.com/300x180/7c3aed/ffffff?text=JavaScript'
    },
    {
      id: '3',
      title: 'Tailwind CSS for Beginners',
      description: 'Learn to rapidly build beautiful and responsive UIs with the utility-first CSS framework.',
      instructor: 'Alice Johnson',
      rating: 4.9,
      imageUrl: 'https://via.placeholder.com/300x180/f87171/ffffff?text=Tailwind'
    },
    {
      id: '4',
      title: 'Node.js & Express API',
      description: 'Build robust backend APIs using Node.js, Express, and connect to databases.',
      instructor: 'Bob Williams',
      rating: 4.6,
      imageUrl: 'https://via.placeholder.com/300x180/22c55e/ffffff?text=Node.js'
    },
    {
      id: '5',
      title: 'Python for Data Science',
      description: 'Explore data analysis, visualization, and machine learning with Python.',
      instructor: 'Emily Brown',
      rating: 4.7,
      imageUrl: 'https://via.placeholder.com/300x180/ef4444/ffffff?text=Python'
    },
    {
      id: '6',
      title: 'UI/UX Design Principles',
      description: 'Understand the core principles of user interface and user experience design.',
      instructor: 'David Lee',
      rating: 4.5,
      imageUrl: 'https://via.placeholder.com/300x180/3b82f6/ffffff?text=UI/UX'
    }
  ];

  return (
    <div className="courses-page py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          Explore Our Course Catalog
        </h1>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Dive into a world of knowledge with our expertly curated courses. Whether you're a beginner or looking to advance your skills, we have something for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={course.imageUrl}
                alt={`${course.title} thumbnail`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User size={16} className="mr-2" aria-hidden="true" />
                  <span>{course.instructor}</span>
                  <Star size={16} className="ml-4 mr-1 text-yellow-500" aria-hidden="true" />
                  <span>{course.rating.toFixed(1)}</span>
                </div>
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-medium"
                  aria-label={`Learn more about ${course.title}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
            aria-label="Start Your Free Trial"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CoursesPage);
