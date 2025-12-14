/**
 * Formats a number as currency using the user's locale.
 * @param {number} amount - The numeric amount to format.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

/**
 * Calculates the total price for items in the cart.
 * @param {Array<Object>} items - An array of cart items, each with `price` and `quantity`.
 * @returns {number} The total calculated price.
 */
export const calculateCartTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
