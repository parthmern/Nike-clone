import React from 'react';
import { PlayIcon } from "@heroicons/react/24/solid";

const Clips = ({ clip, imgsrc }) => {
  return (
   <>
      <div className='relative h-16 w-20 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300  md:w-24  md:h-20 '>
        <img
            src={imgsrc}
            alt="img/clips"
            className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
        />
        <div className='bg-white/75  blur-effect-theme absolute  w-5 h-5 opacity-100 z-[100] top-[40%] left-[40%] flex items-center justify-center rounded-full'>
            <PlayIcon className='icon-style  w-3 h-3 text-slate-900' />
        </div>
        <video
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
        >
            <source type='video/mp4' src={clip} />
        </video>
      </div>
   </>
  )
}

export default Clips