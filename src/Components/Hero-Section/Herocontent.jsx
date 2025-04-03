import React from "react";

const Herocontent = () => {
  return (
    <div className="w-full bg-[var(--card-bg)] mx-auto flex flex-col items-center">
      <div className="w-[1px] h-22 bg-teal-600 mb-2"></div>

      <h2 className="text-center text-4xl md:text-4xl mb-12 font-bold text-gray-700">
        What Sets Us Apart?
      </h2>

      {/* 🚀 FLEX LAYOUT for Equal Height */}
      <div className="relative mx-auto max-w-5xl flex flex-col md:flex-row bg-white shadow-lg overflow-hidden h-[500px] items-stretch">
        
        {/* 🖼️ Image Section - Bilkul Perfect Height & Overlay */}
        <div className="relative md:w-1/2 h-full flex-1">
          <img
            src="/photo5.webp"
            alt="Learner-Centered"
            className="w-full h-full object-cover"
          />
          {/* 🎨 Transparent Overlay - FIXED! */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          {/* ⚡ Moti Transparent Line - Bilkul Exact */}
          <div className="absolute bottom-0 left-0 w-full h-[6px] bg-black/50 z-20"></div>
        </div>

        {/* 📄 Content Section - Same Height as Image */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white flex-1 h-full relative">
          <h3 className="text-2xl font-semibold text-teal-700">Learner-Centered</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            At Almora Explorers Academy, nestled in the heart of the Himalayas,
            students are encouraged to embrace their innate curiosity and chart
            their own paths to knowledge. Our mentor-educators foster a dynamic
            environment where independence and creativity thrive.
          </p>
          <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 mt-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herocontent;

