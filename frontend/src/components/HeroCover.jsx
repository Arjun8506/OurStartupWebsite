import React, { useEffect, useRef } from "react";
import RotatedDiv from "./RotatedDiv";
import Overlay from "./Overlay";
import gsap from "gsap";
import RotatedDivsStrip from "./RotatedDivsStrip";

const HeroCover = () => {
  const divRef = useRef(null);

  const rotatedDivsStrip = [];
  for (let i = 0; i < 15; i++) {
    rotatedDivsStrip.push(<RotatedDivsStrip key={i} />);
  }

  useEffect(() => {
    const animateDivs = () => {
      const divs = divRef.current.querySelectorAll(".rotated-div");
      divs.forEach((div, index) => {
        const yPos = index % 2 === 0 ? 100 : -150;
        gsap.to(div, {
          y: yPos,
          duration: 10,
          yoyo: true,
          repeat: Infinity
        });
      });
    };
  
    animateDivs();
  
  }, []);

  return (
    <div className="w-full min-h-[80vh] sm:h-[150vh] lg:min-h-[100vh]  bg-[rgb(0,31,84)] relative">
      <div
        ref={divRef}
        className=" flex flex-wrap gap-2 rotate-12 items-center ml-[-150vw] mt-[-20vh] sm:ml-[-80vw]  md:ml-[-80vw] lg:ml-[-40vw] lg:mt-[-30vh]"
      >
        {rotatedDivsStrip}
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-black/25 z-10"></div>
      <Overlay />
    </div>
  );
};

export default HeroCover;
