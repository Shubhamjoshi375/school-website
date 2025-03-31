import React from 'react';

const HeroDescription = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto p-6 space-y-8 lg:space-y-0 lg:space-x-8">
      
      <div className="lg:w-1/3 text-center lg:text-left space-y-4">
        <div className="flex justify-center lg:justify-start">
          <img src="./src/assets/celebrate.png" alt="Celebration Badge" className="w-[200px] lg:w-[250px]" />
        </div>
        <h2 className="text-3xl font-semibold">At School of Almora</h2>
        <p className="text-gray-600">
          We believe in the development of caring and trusting relationships, meaningful
          mastery-based learning, a culture where students and teachers learn from one
          another, and the smart use of time, space, and technology.
        </p>
        <div>
          <button className="border border-teal-500 text-teal-500 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="lg:w-1/3 space-y-4">
        <img src="/herosec4.webp" alt="Main Image" className="w-full rounded-lg" />
      </div>
      
      <div className="lg:w-1/3 grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <img src="/herosec3.webp" alt="Teacher Image" className="w-full rounded-lg" />
        </div>
        <div className="col-span-1 space-y-4">
          <img src="/herosec (2).webp" alt="Student Writing" className="w-full rounded-lg" />
          <img src="/herosec.webp" alt="Happy Kids" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default HeroDescription;
