import React, { createContext, useReducer, useContext, useCallback, useMemo } from 'react';
import { calculateCartTotal } from '../utils/helpers';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      {
        const { product, quantity } = action.payload;
        const existingItemIndex = state.items.findIndex(item => item.id === product.id);

        if (existingItemIndex > -1) {
          // Item exists, update quantity
          const updatedItems = state.items.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          return { ...state, items: updatedItems };
        } else {
          // New item, add to cart
          return { ...state, items: [...state.items, { ...product, quantity }] };
        }
      }
    case 'REMOVE_FROM_CART':
      {
        return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
      }
    case 'UPDATE_QUANTITY':
      {
        const { id, quantity } = action.payload;
        const updatedItems = state.items.map(item =>
          item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        return { ...state, items: updatedItems };
      }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  // Memoize cart total calculation to prevent unnecessary re-calculations
  const cartTotal = useMemo(() => calculateCartTotal(cartState.items), [cartState.items]);

  // Memoized actions for referential stability
  const addToCart = useCallback((product, quantity = 1) => {
    if (quantity > 0) {
      dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
    }
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const value = useMemo(() => ({
    cartItems: cartState.items,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }), [cartState.items, cartTotal, addToCart, removeFromCart, updateQuantity, clearCart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
