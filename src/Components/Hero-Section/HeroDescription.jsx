import React from 'react';

const HeroDescription = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-20 md:py-50">
      <div className="flex flex-col lg:flex-row  gap-8 lg:gap-12">

        <div className="lg:w-2/5 justify-between flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

          <div className='w-full flex justify-center'>
            <img
              src="./src/assets/celebrate.png"
              alt="Celebration Badge" className="mx-auto"
            />
          </div>

          <h2 className="text-6xl font-semibold text-gray-800">
            At School of Almora
          </h2>
          <p className="text-gray-600 text-2xl leading-relaxed">
            We believe in the development of caring and trusting relationships, meaningful
            mastery-based learning, a culture where students and teachers learn from one
            another, and the smart use of time, space, and technology.
          </p>
          <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Learn More
          </button>
        </div>


        <div className="lg:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="md:col-span-2">
              <img
                src="/photo4.webp"
                alt="Main School Image"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-md"
              />
            </div>


            <div>
              <img
                src="/photo3.webp"
                alt="Teacher helping students"
                className="w-full h-100 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <img
                src="/photo2.webp"
                alt="Student writing"
                className="w-full h-50  object-cover rounded-xl shadow-md"
              />
              <img
                src="/photo.webp"
                alt="Happy students"
                className="w-full h-45  object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDescription;