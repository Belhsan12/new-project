import React from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products'; // Import dummy data

const FeaturedProducts = () => {
  const featured = productsData.slice(0, 6); // Display first 6 products as featured

  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-in fade-in duration-700">
          Our Bestsellers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out transform animate-bounce-fade">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
