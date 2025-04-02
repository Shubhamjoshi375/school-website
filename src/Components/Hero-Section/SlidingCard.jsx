import React from 'react';

function SlidingCard({ Icon, heading, summary, btnContent,bgColor }) {
  return (
    <div className={`shadow-lg flex flex-col md:flex-row items-center justify-center p-9 md:w-70 md:h-70 group md:overflow-hidden md:relative`}
      style={{ backgroundColor: bgColor }}
    >

      
      <div className='flex flex-col items-center justify-center gap-4'>

        
        <Icon className='text-7xl text-[var(--font-color)] md:transition-all md:duration-500 ease-in-out md:group-hover:-translate-y-10 md:mb-4' />

        
        <h2 className='text-2xl text-center font-semibold transition-all duration-500 ease-in-out md:group-hover:opacity-0 md:group-hover:-translate-y-4'>
          {heading}
        </h2>

      </div>

      
      <div className='md:absolute flex flex-col items-center justify-center md:opacity-0 transition-all duration-500 ease-in-out md:group-hover:opacity-100 group-hover:translate-y-12 mt-5 md:mt-0'>
        <p className='text-center md:text-lg mb-6'>{summary}</p>
        <button className='p-3 px-5 border-1 border-[var(--font-color)] text-[var(--font-color)] font-semibold text-sm underline cursor-pointer hover:bg-[var(--font-color)] hover:text-white' style={{ textUnderlineOffset: '2px' }}>
          {btnContent}
        </button>
      </div>

    </div>
  );
}

export default SlidingCard;