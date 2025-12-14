import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Minus, Plus } from 'lucide-react';

/**
 * A component for selecting quantity with +/- buttons.
 * @param {object} props - Component props.
 * @param {number} props.quantity - The current quantity value.
 * @param {function} props.onQuantityChange - Callback function when quantity changes (receives new quantity).
 * @param {number} [props.min=1] - Minimum allowed quantity.
 * @param {number} [props.max=100] - Maximum allowed quantity.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes.
 */
function QuantitySelector({ quantity, onQuantityChange, min = 1, max = 100, className = '' }) {
  const handleDecrease = useCallback(() => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  }, [quantity, min, onQuantityChange]);

  const handleIncrease = useCallback(() => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  }, [quantity, max, onQuantityChange]);

  const handleInputChange = useCallback((e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      onQuantityChange(value);
    } else if (e.target.value === '') {
      onQuantityChange(min); // Allow empty string input temporarily, then revert to min
    }
  }, [min, max, onQuantityChange]);

  return (
    <div className={`flex items-center border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden ${className}`}>
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-gray-700 dark:text-darkText-DEFAULT"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        onBlur={() => {
          // On blur, ensure quantity is within min/max if it's not already
          if (quantity < min) onQuantityChange(min);
          if (quantity > max) onQuantityChange(max);
        }}
        min={min}
        max={max}
        className="w-12 text-center border-x border-gray-300 dark:border-gray-600 bg-white dark:bg-darkBg-card text-gray-900 dark:text-darkText-DEFAULT focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT"
        aria-live="polite"
        readOnly={true} // For simplicity, make it read-only to prevent direct typing, only +/- buttons work
      />
      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-gray-700 dark:text-darkText-DEFAULT"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  className: PropTypes.string,
};

export default React.memo(QuantitySelector);
