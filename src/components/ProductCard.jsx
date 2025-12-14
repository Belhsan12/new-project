import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Import useCart hook

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Use the custom hook to get addToCart function

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`); // Simple feedback
  };

  return (
    <div className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl p-5 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition-all duration-300 ease-in-out transform">
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={product.image || `https://source.unsplash.com/random/400x300?${product.name.replace(/ /g, ',')}`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          New
        </span>
      </div>
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
        {product.name}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
        {product.description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={handleAddToCart} // Attach the handler here
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-5 py-2 rounded-xl font-semibold shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 active:scale-95"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-5 h-5" />
          Add
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
