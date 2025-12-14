import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-20 md:py-32 lg:py-48 text-center text-white shadow-2xl shadow-purple-500/30">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?ecommerce,abstract-design')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight animate-in fade-in duration-1000">
          <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Discover Your Next Favorite Product
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-in fade-in delay-200 duration-1000">
          Explore a curated collection of high-quality items, designed to elevate your everyday life.
          Find unique gifts, trendy fashion, and innovative gadgets all in one place.
        </p>
        <button className="bg-white text-indigo-700 dark:text-indigo-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out transform">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
