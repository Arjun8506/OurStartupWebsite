import React from 'react'
import RotatedDiv from './RotatedDiv'
import Overlay from './Overlay';

const HeroCover = () => {

    const rotatedDivs = []
    for (let i = 0; i < 4; i++) {
        rotatedDivs.push(<RotatedDiv key={i} />);
        
    }

    const rotatedDivsStrip = []
    for (let i = 0; i < 15; i++) {
        rotatedDivsStrip.push([...rotatedDivs])
        
    } 

  return (
    <div className='w-full min-h-[80vh] bg-[rgb(0,31,84)] relative'>
        <div className=" flex flex-wrap gap-2 rotate-12 items-center ml-[-50vw] mt-[-20vh]">
        {rotatedDivsStrip}
        </div>
        <div className='w-full h-full absolute top-0 left-0 bg-black/25 z-10'></div>
        <Overlay />
    </div>
  )
}

export default HeroCover