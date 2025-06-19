import React from 'react';
import { useLocation } from 'react-router-dom';

const CallToAction = ({ className }) => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <section
      className={`px-6 py-16 text-white text-center bg-gradient-to-br from-yellow-500 to-orange-600 ${className || ''}`}
      aria-label="Call to action to transform your business"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Ready To Enhance Your Business?
        </h2>
        <p className="text-lg mb-10 leading-7 font-['Inter',sans-serif]">
          Contact JM TECH today to discuss your project and discover how our IT solutions can drive your success.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/contact"
            className="inline-block bg-white text-yellow-600 font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-500"
            aria-label="Get a free consultation with JM TECH"
          >
            Get a Free Consultation
          </a>
          {!isAboutPage && (
            <a
              href="/about"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-500"
              aria-label="Learn more about JM TECH"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
