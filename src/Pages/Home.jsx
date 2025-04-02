import React from "react";
import HeroDescription from "../Components/Hero-Section/HeroDescription";
import CardCollection from "../Components/Hero-Section/CardCollection";
import ImageSlider from "../Components/Hero-Section/ImageSlider";

function Home() {
  return (
    <div>
      <div className="relative">
        <ImageSlider className="md:relative" />
        <CardCollection className="md:absolute top-115" />
      </div>
      <HeroDescription />
    </div>
  );
}

export default Home;