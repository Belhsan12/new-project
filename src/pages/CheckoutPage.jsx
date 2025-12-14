import React, { useCallback, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { formatCurrency } from '../utils/helpers';

function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    email: '',
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({ ...prev, [name]: value }));
  }, []);

  const handlePlaceOrder = useCallback((e) => {
    e.preventDefault();
    // TODO: Implement actual order processing (send data to backend)
    console.log('Placing order with:', shippingDetails, 'Cart items:', cartItems);

    // Simulate order success
    alert('Order Placed Successfully! Thank you for your purchase.');
    clearCart(); // Clear cart after successful order
    navigate('/'); // Navigate to home or an order confirmation page
  }, [shippingDetails, cartItems, clearCart, navigate]);

  if (cartItems.length === 0) {
    return (
      <div className="bg-white dark:bg-darkBg-card p-8 rounded-xl shadow-soft-xl dark:shadow-dark-soft-xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-darkText-DEFAULT">Your Cart is Empty</h2>
        <p className="text-gray-600 dark:text-darkText-subtle mb-6">Please add items to your cart before checking out.</p>
        <Link to="/products">
          <Button variant="primary">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-darkBg-card p-6 rounded-xl shadow-soft-xl dark:shadow-dark-soft-xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-darkText-DEFAULT">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-darkText-DEFAULT">Shipping Details</h2>
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <Input
              label="Full Name"
              id="fullName"
              name="fullName"
              value={shippingDetails.fullName}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Address"
              id="address"
              name="address"
              value={shippingDetails.address}
              onChange={handleInputChange}
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="City"
                id="city"
                name="city"
                value={shippingDetails.city}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Zip Code"
                id="zipCode"
                name="zipCode"
                value={shippingDetails.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <Input
              label="Country"
              id="country"
              name="country"
              value={shippingDetails.country}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              value={shippingDetails.email}
              onChange={handleInputChange}
              required
            />
            <Button type="submit" variant="primary" className="w-full mt-6">Place Order</Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 bg-gray-50 dark:bg-darkBg-DEFAULT p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 h-fit">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-darkText-DEFAULT">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm text-gray-700 dark:text-darkText-subtle">
                <span>{item.name} (x{item.quantity})</span>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center py-2 border-t border-gray-200 dark:border-gray-700 mt-4">
            <span className="text-lg font-bold text-gray-800 dark:text-darkText-DEFAULT">Total:</span>
            <span className="text-lg font-bold text-primary-DEFAULT dark:text-primary-light">{formatCurrency(cartTotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
