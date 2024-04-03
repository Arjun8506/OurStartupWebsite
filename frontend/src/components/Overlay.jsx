import React from "react";
import mainImage from "../assets/mainimage-removebg-preview.svg";

const Overlay = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-30">
      <div className="w-full h-full absolute z-50 bottom-0 left-0">
        <img
          src={mainImage}
          alt=""
          className="absolute top-[60vh] sm:top-[70vh] lg:top-[80vh]  left-[50vw] w-32  translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      <div className="w-40 h-40 bg-[rgb(0,31,84)] absolute z-40 top-[60vh] sm:top-[70vh] lg:top-[80vh] rounded-full  left-[50vw]   translate-x-[-50%] translate-y-[-50%]"></div>
      <div className="w-60 h-60 bg-[rgba(51,126,255,0.65)] absolute z-30 top-[60vh] sm:top-[70vh] lg:top-[80vh]  rounded-full  left-[50vw]   translate-x-[-50%] translate-y-[-50%] blur-lg"></div>
    </div>
  );
};

export default Overlay;
