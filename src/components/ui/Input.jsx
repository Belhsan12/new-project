import React from 'react';
import PropTypes from 'prop-types';

/**
 * A customizable input component.
 * @param {object} props - Component props.
 * @param {string} [props.type='text'] - The type of the input (e.g., 'text', 'email', 'password', 'number').
 * @param {string} [props.placeholder=''] - The placeholder text.
 * @param {string} [props.value] - The current value of the input.
 * @param {function} [props.onChange] - Change handler for the input.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply.
 * @param {string} [props.id] - The id for the input element.
 * @param {string} [props.name] - The name for the input element.
 * @param {boolean} [props.required=false] - If true, the input is required.
 * @param {string} [props.label] - Optional label for the input.
 */
function Input({ type = 'text', placeholder = '', value, onChange, className = '', id, name, required = false, label, ...props }) {
  // Removed dark mode specific styles for input and placeholder
  const baseStyles = 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT bg-white text-gray-900 placeholder-gray-400';

  return (
    <div className="mb-4">
      {label && (
        // Adjusted label text color for light theme consistency
        <label htmlFor={id || name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-danger-DEFAULT ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name || id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseStyles} ${className}`}
        {...props}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
};

export default React.memo(Input);
