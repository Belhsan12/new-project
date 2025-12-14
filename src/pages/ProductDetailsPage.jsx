import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';
import { formatCurrency } from '../utils/helpers';
import { useCart } from '../context/CartContext';

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Simulate API call
    const fetchedProduct = products.find(p => p.id === id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setQuantity(1); // Reset quantity when product changes
    } else {
      setError('Product not found.');
    }
    setLoading(false);
  }, [id]);

  const handleAddToCart = useCallback(() => {
    if (product) {
      addToCart(product, quantity);
      navigate('/cart'); // Navigate to cart after adding
    }
  }, [product, quantity, addToCart, navigate]);

  if (loading) {
    return <div className="text-center text-lg py-10 dark:text-darkText-DEFAULT">Loading product details...</div>;
  }
  if (error) {
    return <div className="text-center text-lg py-10 text-danger-DEFAULT">{error}</div>;
  }

  if (!product) {
    return <div className="text-center text-lg py-10 dark:text-darkText-DEFAULT">Product data is missing.</div>;
  }

  return (
    <div className="bg-white dark:bg-darkBg-card p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
      {/* Product Image */}
      <div className="md:w-1/2">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-darkText-DEFAULT mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-primary-DEFAULT dark:text-primary-light mb-4">{formatCurrency(product.price)}</p>
          <p className="text-gray-700 dark:text-darkText-subtle leading-relaxed mb-6">{product.description}</p>

          <div className="flex items-center space-x-2 mb-6">
            <span className="text-yellow-500">{'⭐'.repeat(Math.round(product.rating))}</span>
            <span className="text-gray-600 dark:text-darkText-subtle text-sm">({product.rating} / 5)</span>
          </div>

          <div className="flex items-center mb-6 space-x-4">
            <label htmlFor="quantity-selector" className="text-gray-700 dark:text-darkText-DEFAULT font-medium">Quantity:</label>
            <QuantitySelector
              id="quantity-selector"
              quantity={quantity}
              onQuantityChange={setQuantity}
              min={1}
              max={product.stock > 0 ? product.stock : 1} // Limit max quantity to available stock
            />
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0 || quantity > product.stock}
          className="w-full md:w-auto self-start mt-auto"
        >
          {product.stock === 0 ? 'Out of Stock' : (quantity > product.stock ? 'Quantity Exceeds Stock' : 'Add to Cart')}
        </Button>
        {product.stock === 0 && (
          <p className="text-danger-DEFAULT text-sm mt-2">This item is currently out of stock.</p>
        )}
        {quantity > product.stock && product.stock > 0 && (
          <p className="text-danger-DEFAULT text-sm mt-2">Only {product.stock} items left in stock.</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
