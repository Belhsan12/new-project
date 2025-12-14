import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import { formatCurrency } from '../../utils/helpers';

/**
 * Displays a single product card with image, name, price, and Add to Cart button.
 * @param {object} props - Component props.
 * @param {object} props.product - The product object to display.
 * @param {function} props.onAddToCart - Function to call when 'Add to Cart' is clicked.
 */
function ProductCard({ product, onAddToCart }) {
  const handleAddToCart = useCallback(() => {
    onAddToCart(product);
  }, [onAddToCart, product]);

  return (
    <div className="bg-white dark:bg-darkBg-card rounded-xl shadow-soft-xl dark:shadow-dark-soft-xl hover:shadow-soft-hover dark:hover:shadow-dark-soft-hover transition-all duration-300 ease-in-out group hover:translate-y-[-4px] flex flex-col h-full">
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-darkText-DEFAULT hover:text-primary-DEFAULT dark:hover:text-primary-light transition-colors duration-200 line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-darkText-subtle text-sm mt-1 flex-grow line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-primary-DEFAULT dark:text-primary-light">
            {formatCurrency(product.price)}
          </span>
          <Button onClick={handleAddToCart} size="sm" className="ml-2" disabled={product.stock === 0}>
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
        {product.stock === 0 && (
          <p className="text-danger-DEFAULT text-sm mt-2 text-right">Currently unavailable</p>
        )}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    stock: PropTypes.number,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default React.memo(ProductCard);
