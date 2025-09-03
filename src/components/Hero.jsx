import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id="hero" className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      
      <div className = 'inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className='w-20' src={assets.group_profile} alt="" />
        <p className='text-sm font-medium'>Trusted by Hunderds of Companies</p>
      </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium
        xl:leading-[95px] max-w-5xl'>Connecting the right poeple with <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>right</span> talent.</h1>

        <p className='text-sm sm:text-lg font-medium text-gray-500 dar:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>From permanent to virtual staffing, we match the right person to the right role.</p>

        <div className='relative'>
            <img src={assets.hero1_img} alt="" className='w-full max-w-6xl rounded-4xl'/>
            <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>
        </div>

    </div>
  )
}

export default Hero
