import React from "react";

function News() {
  return (
    <div className="flex flex-col justify-center items-center bg-[var(--card-bg)] gap-10 pb-10 px-10 md:px-40">
            <div className="w-[1px] h-22 bg-teal-600 mb-4"></div>

      <h1 className="text-center text-4xl font-bold my-10">In The News</h1>

      <div className="flex flex-col justify-center items-center md:flex-row md:gap-20 md:w-full">
        <div className="border-4 border-[var(--font-color)] h-60 w-full md:w-50 md:h-40 overflow-hidden">
          <img src="./photo6.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-5 my-5 md:w-full md:border-b-1 md:h-40 md:justify-center">
          <h2 className="text-xl underline font-bold text-[var(--font-color)]">
            The School Of Almora Braings AI TO The Forefront
          </h2>
          <div>
            <p>February 7, 2025</p>
            <p>
              Here the summary will be written for the news. Click the above
              link for the full article/blog.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:gap-20 md:w-full">

        <div className="border-4 border-[var(--font-color)] h-60 w-full md:w-50 md:h-40 overflow-hidden">
          <img src="./photo9.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-5 my-5 md:w-full md:border-b-1 md:h-40 md:justify-center">
          <h2 className="text-xl underline font-bold text-[var(--font-color)]">
            The School Of Almora Students In 60 Minutes
          </h2>
          <div>
            <p>February 7, 2025</p>
            <p>
              Here the summary will be written for the news. Click the above
              link for the full article/blog.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:gap-20 md:w-full">
      <div className="border-4 border-[var(--font-color)] h-60 w-full md:w-50 md:h-40 overflow-hidden">
          <img src="./photo10.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-5 my-5 md:w-full md:border-b-1 md:h-40 md:justify-center">
          <h2 className="text-xl underline font-bold text-[var(--font-color)]">
            New Series: The College Admission Lab
          </h2>
          <div>
            <p>February 7, 2025</p>
            <p>
              Here the summary will be written for the news. Click the above
              link for the full article/blog.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:gap-20 md:w-full">
      <div className="border-4 border-[var(--font-color)] h-60 w-full md:w-50 md:h-40 overflow-hidden">
          <img src="./photo8.webp" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-5 my-5 md:w-full md:border-b-1 md:h-40 md:justify-center">
          <h2 className="text-xl underline font-bold text-[var(--font-color)]">
            Our Students Organised A Farewell Party For The Last Year Students
          </h2>
          <div>
            <p>January 15, 2025</p>
            <p>
              Here the summary will be written for the news. Click the above
              link for the full article/blog.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;