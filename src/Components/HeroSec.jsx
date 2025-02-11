import React from "react";
import heroPic from "./../assets/Images/ecommerce.png";

const HeroSec = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Elevate Your Style with <span className="text-blue-600">Exclusive Deals</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Discover the best products at unbeatable prices. Shop now and transform your experience.
          </p>
          
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Shop Now
            </button>
            <button className="px-6 py-2 border border-gray-700 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 p-10 flex justify-center">
          <img
            src={heroPic}
            alt="Hero Sec"
            className="w-full scale-125 max-w-md md:max-w-lg rounded-lg"
          />
        </div>
        
      </div>
    </section>
  );
};

export default HeroSec;
