import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handles changes to form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field as user types, if an error existed
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validates the form data before submission
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false); // Reset success message on new submission attempt
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate an API call for form submission
      try {
        console.log('Form Data Submitted:', formData);
        // In a real application, you would replace this with an actual fetch/axios call to a backend API
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form fields on successful submission
      } catch (error) {
        console.error('Submission error:', error);
        alert('Failed to send message. Please try again later.'); // User feedback for submission failure
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-darkBg text-gray-900 dark:text-darkText-DEFAULT py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-darkText-DEFAULT">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information Section */}
          <div className="bg-white dark:bg-darkBg-card p-10 rounded-lg shadow-xl border-t-4 border-primary">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-darkText-DEFAULT">Our Details</h3>
            <p className="text-lg mb-8 text-gray-700 dark:text-darkText-subtle">
              We'd love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-primary" aria-hidden="true" />
                <span className="text-lg dark:text-darkText-DEFAULT">info@gymapp.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={24} className="text-primary" aria-hidden="true" />
                <span className="text-lg dark:text-darkText-DEFAULT">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={24} className="text-primary" aria-hidden="true" />
                <span className="text-lg dark:text-darkText-DEFAULT">123 Fitness Ave, Gym City, GC 12345</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white dark:bg-darkBg-card p-10 rounded-lg shadow-xl border-t-4 border-secondary">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-darkText-DEFAULT">Send Us a Message</h3>
            {submitSuccess && (
              <div className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 p-4 rounded-md mb-6" role="alert">
                <p className="font-semibold">Thank you for your message!</p>
                <p>We will get back to you shortly.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-darkText-DEFAULT mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.name ? 'border-danger' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-darkText-DEFAULT`}
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : null}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-danger">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-darkText-DEFAULT mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.email ? 'border-danger' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-darkText-DEFAULT`}
                  placeholder="your@example.com"
                  disabled={isSubmitting}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : null}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-danger">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-darkText-DEFAULT mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full p-3 border ${errors.message ? 'border-danger' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-darkText-DEFAULT`}
                  placeholder="Your message..."
                  disabled={isSubmitting}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : null}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-danger">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-dark text-secondary-contrast font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-secondary-contrast" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Send size={20} aria-hidden="true" />
                )}
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
