import React from "react";
import HeroCover from "./HeroCover";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] bg-black clip-polygon overflow-hidden">
      <HeroCover />
    </div>
  );
};

export default Hero;
