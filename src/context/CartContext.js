import React, { createContext, useReducer, useContext } from 'react';

/**
 * @typedef {Object} CartItem
 * @property {string} id - Unique identifier for the item.
 * @property {string} name - Name of the item.
 * @property {number} price - Price of a single item.
 * @property {number} quantity - Number of this item in the cart.
 */

/**
 * @typedef {Object} CartState
 * @property {CartItem[]} items - Array of items in the cart.
 */

/**
 * @typedef {'ADD_ITEM' | 'REMOVE_ITEM' | 'UPDATE_QUANTITY' | 'CLEAR_CART'} CartActionType
 */

/**
 * @typedef {Object} CartAction
 * @property {CartActionType} type - The type of action to perform.
 * @property {CartItem} [payload] - The item or item details for the action.
 * @property {string} [payload.id] - The ID of the item for remove/update actions.
 * @property {number} [payload.quantity] - The new quantity for update action.
 */

/** @type {CartState} */
const initialState = {
  items: [],
};

/**
 * Reducer function for managing cart state.
 * @param {CartState} state - The current cart state.
 * @param {CartAction} action - The action to be dispatched.
 * @returns {CartState} The new cart state.
 */
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      {
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex > -1) {
          const updatedItems = [...state.items];
          const existingItem = updatedItems[existingItemIndex];
          updatedItems[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + action.payload.quantity,
          };
          return { ...state, items: updatedItems };
        } else {
          return { ...state, items: [...state.items, action.payload] };
        }
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
}

/** @type {React.Context<{ state: CartState, dispatch: React.Dispatch<CartAction> } | undefined>} */
const CartContext = createContext(undefined);

/**
 * CartProvider component to wrap the application and provide cart state.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to be rendered within the provider.
 * @returns {JSX.Element} The CartProvider component.
 */
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * Custom hook to use the cart context.
 * @returns {{ state: CartState, dispatch: React.Dispatch<CartAction> }}
 * @throws {Error} If used outside of a CartProvider.
 */
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
