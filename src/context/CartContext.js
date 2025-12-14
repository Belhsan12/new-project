import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

// Create the Cart Context
const CartContext = createContext(undefined);

// Custom hook for consuming the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = useCallback((product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        // If item exists, update its quantity
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item is new, add it with quantity 1
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  }, []); // Dependencies are stable, so useCallback is effective

  // Function to remove an item from the cart (not directly used in this fix, but good for context)
  const removeFromCart = useCallback((productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  }, []);

  // Function to get the total number of items (sum of quantities) in the cart
  const getCartItemCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]); // Recalculate only when cartItems changes

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    getCartItemCount,
  }), [cartItems, addToCart, removeFromCart, getCartItemCount]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
