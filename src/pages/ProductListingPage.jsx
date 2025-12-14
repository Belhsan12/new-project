import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Select from '../components/ui/Select';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  // State for filters and sorting
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || 'all');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'popularity'); // 'popularity', 'price-asc', 'price-desc'

  // Update state from URL search params on initial load and param changes
  useEffect(() => {
    setCategoryFilter(searchParams.get('category') || 'all');
    setMinPrice(searchParams.get('minPrice') || '');
    setMaxPrice(searchParams.get('maxPrice') || '');
    setSortBy(searchParams.get('sortBy') || 'popularity');
  }, [searchParams]);

  // Memoize unique categories for filter options
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allProducts.map(p => p.category))];
    return [{ value: 'all', label: 'All Categories' }, ...uniqueCategories.map(cat => ({ value: cat.toLowerCase().replace(/ /g, '-'), label: cat }))];
  }, []);

  // Filter and sort products based on state
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category.toLowerCase().replace(/ /g, '-') === categoryFilter);
    }

    // Price filter
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    if (!isNaN(min)) {
      filtered = filtered.filter(product => product.price >= min);
    }
    if (!isNaN(max)) {
      filtered = filtered.filter(product => product.price <= max);
    }

    // Sorting
    filtered.sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.price - b.price;
      } else if (sortBy === 'price-desc') {
        return b.price - a.price;
      } else {
        // Default to popularity (rating)
        return b.rating - a.rating; 
      }
    });

    return filtered;
  }, [categoryFilter, minPrice, maxPrice, sortBy]);

  // Handler to apply filters and update URL search params
  const applyFilters = useCallback(() => {
    const newParams = {};
    if (categoryFilter !== 'all') newParams.category = categoryFilter;
    if (minPrice) newParams.minPrice = minPrice;
    if (maxPrice) newParams.maxPrice = maxPrice;
    if (sortBy !== 'popularity') newParams.sortBy = sortBy;
    setSearchParams(newParams);
  }, [categoryFilter, minPrice, maxPrice, sortBy, setSearchParams]);

  // Handler to clear all filters
  const clearFilters = useCallback(() => {
    setCategoryFilter('all');
    setMinPrice('');
    setMaxPrice('');
    setSortBy('popularity');
    setSearchParams({}); // Clear all search params
  }, [setSearchParams]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Filters and Sorting Sidebar */}
      <aside className="md:col-span-1 bg-white dark:bg-darkBg-card p-6 rounded-lg shadow-md h-fit sticky top-24">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-darkText-DEFAULT">Filters</h2>

        {/* Category Filter */}
        <Select
          label="Category"
          id="category-filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          options={categories}
          className="mb-4"
        />

        {/* Price Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-darkText-DEFAULT mb-1">Price Range</label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="flex-1"
              label=""
            />
            <Input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="flex-1"
              label=""
            />
          </div>
        </div>

        {/* Sort By */}
        <Select
          label="Sort By"
          id="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          options={[
            { value: 'popularity', label: 'Popularity' },
            { value: 'price-asc', label: 'Price: Low to High' },
            { value: 'price-desc', label: 'Price: High to Low' },
          ]}
          className="mb-6"
        />

        <div className="flex space-x-2">
          <Button onClick={applyFilters} variant="primary" className="flex-1">Apply Filters</Button>
          <Button onClick={clearFilters} variant="outline" className="flex-1">Clear Filters</Button>
        </div>
      </aside>

      {/* Product Grid */}
      <section className="md:col-span-3">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-darkText-DEFAULT">Products ({filteredAndSortedProducts.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-600 dark:text-darkText-subtle">No products found matching your criteria.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductListingPage;
