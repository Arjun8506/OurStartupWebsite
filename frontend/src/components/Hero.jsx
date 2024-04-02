import React from "react";
import HeroCover from "./HeroCover";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] sm:h-[100vh]  md:h-[100vh] bg-black clip-polygon overflow-hidden">
      <HeroCover />
    </div>
  );
};

export default Hero;
