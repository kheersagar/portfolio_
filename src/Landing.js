import React, { useEffect } from 'react'
import profile from "./assests/profile.jpeg"
function Landing() {

  return (
    <div   className='mt-4 w-full grid lg:grid-cols-[1.5fr_0.8fr] sm:max-w-[65rem] m-auto  text-center justify-center items-center gap-8 px-4'>
        <div className=' text-left'>
          <p className='text-3xl md:text-8xl font-bold'>I am <span className='text-blue-600'>Fullstack</span> </p>
          <p className='text-3xl md:text-8xl font-bold'><span className='text-blue-600'>Web</span> Developer </p>
          <p className='mt-6 mb-4 font-medium'>lorem vashf a pf'aihsf asifh paf apsfiasnf apfsjhab a s soajgfp a;asf aso aoasofoisa gashfgph</p>
          <a href='#contact'>
          <button className='bg-green-600 text-white font-semibold p-2 px-4 mt-2 rounded-lg text-center shadow-lg hover:scale-105 transition-all'>Contact me</button>
          </a>
        </div>
        <div className=' bg-blue-600 max-w-sm lg:w-full z-10 relative lg:self-start justify-self-center'>
            <img src={profile} className="z-10"/>
            <div className='sm:w-48 sm:h-64  md:w-52 md:h-72 lg:w-72 lg:h-64 border-slate-900 -z-10  border-4 top-28  md:top-24 -left-8 absolute'> </div>
        </div>

    </div>
  )
}


export default Landing