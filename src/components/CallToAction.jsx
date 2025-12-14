import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-rose-500 to-amber-500 text-white text-center shadow-2xl shadow-rose-500/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight animate-in fade-in duration-700 delay-200">
          <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Don't Miss Out on Our Exclusive Deals!
          </span>
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 animate-in fade-in duration-700 delay-400">
          Sign up for our newsletter to get the latest updates, special offers, and personalized recommendations directly to your inbox.
        </p>
        <button className="bg-white text-rose-600 dark:text-rose-900 px-10 py-4 rounded-full font-bold text-xl shadow-xl shadow-white/30 hover:shadow-2xl hover:shadow-white/40 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out transform">
          Join Our Community
        </button>
      </div>
    </section>
  );
};

export default React.memo(CallToAction);
