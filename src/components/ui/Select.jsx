import React from 'react';
import PropTypes from 'prop-types';

/**
 * A customizable select (dropdown) component.
 * @param {object} props - Component props.
 * @param {string} [props.value] - The current selected value.
 * @param {function} [props.onChange] - Change handler for the select.
 * @param {Array<object>} props.options - An array of options: `{ value: string|number, label: string }`.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply.
 * @param {string} [props.id] - The id for the select element.
 * @param {string} [props.name] - The name for the select element.
 * @param {string} [props.label] - Optional label for the select.
 */
function Select({ value, onChange, options, className = '', id, name, label, ...props }) {
  const baseStyles = 'block w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBg-card rounded-md shadow-sm focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm dark:text-darkText-DEFAULT appearance-none';

  return (
    <div className="mb-4 relative">
      {label && (
        <label htmlFor={id || name} className="block text-sm font-medium text-gray-700 dark:text-darkText-DEFAULT mb-1">
          {label}
        </label>
      )}
      <select
        id={id || name}
        name={name || id}
        value={value}
        onChange={onChange}
        className={`${baseStyles} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-darkText-subtle">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
}

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default React.memo(Select);
