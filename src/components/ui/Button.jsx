import React from 'react';
import PropTypes from 'prop-types';

/**
 * A customizable button component.
 * @param {object} props - Component props.
 * @param {string} [props.variant='primary'] - The style variant of the button ('primary', 'secondary', 'danger', 'outline', 'ghost').
 * @param {string} [props.size='md'] - The size of the button ('sm', 'md', 'lg').
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply.
 * @param {boolean} [props.disabled=false] - If true, the button will be disabled.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {function} [props.onClick] - Click handler for the button.
 * @param {string} [props.type='button'] - The type of the button ('button', 'submit', 'reset').
 */
function Button({ variant = 'primary', size = 'md', className = '', disabled = false, children, onClick, type = 'button', ...props }) {
  // Base styles applied to all buttons
  const baseStyles = 'font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100';

  // Styles based on the 'variant' prop
  const variantStyles = {
    primary: 'bg-primary-DEFAULT text-primary-contrast hover:bg-primary-dark focus:ring-primary-DEFAULT',
    secondary: 'bg-secondary-DEFAULT text-secondary-contrast hover:bg-secondary-dark focus:ring-secondary-DEFAULT',
    danger: 'bg-danger-DEFAULT text-danger-contrast hover:bg-red-700 focus:ring-danger-DEFAULT',
    outline: 'bg-transparent border border-primary-DEFAULT text-primary-DEFAULT hover:bg-primary-DEFAULT hover:text-primary-contrast focus:ring-primary-DEFAULT',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-200 focus:ring-gray-400'
  };

  // Styles based on the 'size' prop (missing from original code, causing 'no-undef' error)
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Styles for disabled state
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default React.memo(Button);
