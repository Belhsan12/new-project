import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';
import { formatCurrency } from '../utils/helpers';
import { Trash2 } from 'lucide-react';

function CartPage() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleUpdateQuantity = useCallback((id, newQuantity) => {
    updateQuantity(id, newQuantity);
  }, [updateQuantity]);

  const handleRemoveItem = useCallback((id) => {
    removeFromCart(id);
  }, [removeFromCart]);

  if (cartItems.length === 0) {
    return (
      <div className="bg-white dark:bg-darkBg-card p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-darkText-DEFAULT">Your Cart is Empty</h2>
        <p className="text-gray-600 dark:text-darkText-subtle mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products">
          <Button variant="primary">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-darkBg-card p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-darkText-DEFAULT">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center bg-gray-50 dark:bg-darkBg-DEFAULT p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <Link to={`/products/${item.id}`} className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-md mr-4">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-grow text-center sm:text-left mt-3 sm:mt-0">
                <Link to={`/products/${item.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-darkText-DEFAULT hover:text-primary-DEFAULT dark:hover:text-primary-light transition-colors duration-200">{item.name}</h3>
                </Link>
                <p className="text-gray-600 dark:text-darkText-subtle text-sm">{formatCurrency(item.price)} each</p>
                <div className="flex items-center justify-center sm:justify-start mt-2 space-x-4">
                  <QuantitySelector
                    quantity={item.quantity}
                    onQuantityChange={(newQuantity) => handleUpdateQuantity(item.id, newQuantity)}
                    max={item.stock} // Limit quantity by product stock
                  />
                  <p className="font-medium text-gray-800 dark:text-darkText-DEFAULT">Subtotal: {formatCurrency(item.price * item.quantity)}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveItem(item.id)}
                className="ml-auto mt-4 sm:mt-0 text-danger-DEFAULT hover:bg-danger-DEFAULT hover:text-white"
                aria-label={`Remove ${item.name} from cart`}
              >
                <Trash2 size={20} />
              </Button>
            </div>
          ))}
          <Button variant="outline" onClick={clearCart} className="w-full mt-6 text-danger-DEFAULT hover:bg-danger-DEFAULT hover:text-white">
            Clear All Items
          </Button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 bg-gray-50 dark:bg-darkBg-DEFAULT p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 h-fit">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-darkText-DEFAULT">Order Summary</h2>
          <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-700 dark:text-darkText-DEFAULT">Subtotal:</span>
            <span className="font-semibold text-gray-900 dark:text-darkText-DEFAULT">{formatCurrency(cartTotal)}</span>
          </div>
          <div className="flex justify-between items-center py-2 mb-4">
            <span className="text-lg font-bold text-gray-800 dark:text-darkText-DEFAULT">Total:</span>
            <span className="text-lg font-bold text-primary-DEFAULT dark:text-primary-light">{formatCurrency(cartTotal)}</span>
          </div>
          <Link to="/checkout">
            <Button variant="primary" className="w-full">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
