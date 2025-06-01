import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
  return (
    <div>
      <h1 className='text-black text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-24 mb-14'>
        How It <span className='fontcolorgradient'>Works!</span>
      </h1>
      <div className='text-black px-7 sm:px-14 md:px-24 lg:px-44 text-2xl space-y-14 sm:space-y-12 md:space-y-12 xl:space-y-1'>

        <div className='flex flex-row justify-end items-center gap-4 md:gap-8'>
          <p className='text-base md:text-2xl'>Use our<span className='font-bold'> simple app</span>  to list your recyclable waste you have for collection</p>
          <Image
            src="/landingpage/egg1.svg"
            alt='How It Works Illustration'
            width={300}
            height={300}
            className='hidden sm:flex sm:w-1/4 xl:w-1/2'
          />
        </div>
        <div className='flex flex-row justify-start items-center gap-4 md:gap-8'>
          <Image
            src="/landingpage/egg2.svg"
            alt='How It Works Illustration'
            width={450}
            height={450}
            className='hidden sm:flex sm:w-1/3 xl:w-1/2'
          />
          <p className='text-base md:text-2xl'>Our <span className='font-bold'>team collects</span>, verifies, and sorts the materials to ensure quality standards.</p>
        </div>
        <div className='flex flex-row justify-end items-center gap-4 md:gap-8 '>
          <p className='text-base md:text-2xl'>Manufacturers get <span className='font-bold'>high-quality</span> recycled materials to create new products.</p>
          <Image
            src="/landingpage/egg3.svg"
            alt='How It Works Illustration'
            width={70}
            height={70}
            className='hidden sm:flex sm:w-1/6 xl:w-1/5'
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
