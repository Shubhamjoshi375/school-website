import React from "react";
import HeroDescription from "../Components/Hero-Section/HeroDescription";
import CardCollection from "../Components/Hero-Section/CardCollection";
import ImageSlider from "../Components/Hero-Section/ImageSlider";
import News from "../Components/Hero-Section/News";
import Slogan from "../Components/Hero-Section/Slogan";
import FeaturesSection from "../Components/Hero-Section/FeaturesSection";
function Home() {
  return (
    <div>
      <div className="relative">
        <ImageSlider className="md:relative" />
        <CardCollection className="md:absolute top-115" />
      </div>
      <HeroDescription />
      <FeaturesSection />
      <Slogan slogan={"Empowering Young Minds with Excellence, Innovation, and Care – Choose the School of Almora for a Brighter Future!"}/>
      <News/>
      <div className="flex flex-col py-15 px-5 justify-center items-center pb-20 md:px-80">
        <h2 className="text-center text-3xl">Now accepting applications for the 2025-26 School Year </h2>
        <button className='mt-10 p-3 px-7 border-1 border-[var(--font-color)] text-[var(--font-color)] font-semibold text-xl underline cursor-pointer hover:bg-[var(--font-color)] hover:text-white ' style={{ textUnderlineOffset: '2px' }}>
          LEARN MORE
        </button>
        <p className="text-center mt-15">
        The School Of Almora is an independent co-education school based in the heart of Almora.  We focus on creating an environment where curiosity thrives, mastery matters, and students actively design their own learning path. 
        </p>
      </div>
    </div>
  );
}

export default Home;