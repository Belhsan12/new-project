import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

function HomePage() {
  const { addToCart } = useCart();

  // Memoize featured products to prevent re-filtering on every render
  const featuredProducts = useMemo(() => {
    // For demonstration, let's pick the first 6 products as 'featured'
    return products.slice(0, 6);
  }, []);

  // Memoize categories to prevent re-calculation
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    return uniqueCategories.map(cat => ({ name: cat, slug: cat.toLowerCase().replace(/ /g, '-') }));
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-DEFAULT to-primary-light dark:from-darkBg-darker dark:to-darkBg-DEFAULT text-primary-contrast py-20 px-6 rounded-xl shadow-soft-xl dark:shadow-dark-soft-xl overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            Discover Your Next Favorite Product
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 text-white">
            Shop the latest trends and essential items for every need.
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="hover:bg-secondary-dark focus:ring-secondary-DEFAULT">
              Shop All Products
            </Button>
          </Link>
        </div>
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-pulse-fade">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <circle cx="10" cy="10" r="5" fill="currentColor" className="text-white/50" />
            <circle cx="90" cy="30" r="8" fill="currentColor" className="text-white/50" />
            <circle cx="30" cy="70" r="6" fill="currentColor" className="text-white/50" />
            <circle cx="70" cy="90" r="7" fill="currentColor" className="text-white/50" />
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-darkText-DEFAULT">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-darkText-DEFAULT">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link
              key={category.slug}
              to={`/products?category=${category.slug}`}
              className="block bg-white dark:bg-darkBg-card rounded-xl shadow-soft-xl dark:shadow-dark-soft-xl hover:shadow-soft-hover dark:hover:shadow-dark-soft-hover transition-all duration-300 ease-in-out group hover:translate-y-[-4px] text-center py-8 px-4"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-darkText-DEFAULT group-hover:text-primary-DEFAULT dark:group-hover:text-primary-light transition-colors duration-200">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-darkText-subtle text-sm mt-2">Explore {category.name} collection</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
