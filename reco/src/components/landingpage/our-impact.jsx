import Image from 'next/image'
import React from 'react'

const ourimpact = () => {
  return (
    <div className='my-32'>
      <div className='w-full flex flex-col justify-center tester'>

        <div className='fontcolorgradient mb-7 tester'>
          Our Impact
        </div>

        <div className='flex flex-row tester'>
          <p className='text-black mr-3'>
            Work recently submitted by our top creators on the platform.
          </p>
          <button>
            <Image
              src="/landingpage/left.svg"
              height={50}
              width={50}
              alt='Left Arrow'
              className='mr-2'
            />
          </button>
          <button>
            <Image
              src="/landingpage/right.svg"
              height={50}
              width={50}
              alt='Right Arrow'
            />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16 text-black'>
        <div className='bg-[#ffffff] ring-[1.5rem] ring-[#b9b9b9] rounded-3xl p-2 tester'>
          <Image
            src="/landingpage/trophy.svg"
            alt='Impact Image 1'
            width={300}
            height={300}
            className='w-full h-auto mb-4 tester'
          />
          <p className='text-2xl font-bold text-[#01185b] tester'>850 Rewards Distributed</p>
        </div>

        <div className='bg-[#ffffff] ring-[1.5rem] ring-[#b9b9b9] rounded-3xl p-6'>
          <Image
            src="/landingpage/recycle.svg"
            alt='Impact Image 2'
            width={300}
            height={300}
            className='w-full h-auto mb-4'
          />
          <p className='text-2xl font-bold text-[#01185b]'>1250 KGs of Waste Recycled</p>
        </div>

        <div className='bg-[#ffffff] ring-[1.5rem] ring-[#b9b9b9] rounded-3xl p-6'>
          <Image
            src="/landingpage/user.svg"
            alt='Impact Image 3'
            width={300}
            height={300}
            className='w-full h-auto mb-4'
          />
          <p className='text-2xl font-bold text-[#01185b]'>3200 Happy Users</p>
        </div>
        <div className='bg-[#ffffff] ring-[1.5rem] ring-[#b9b9b9] rounded-3xl p-6'>
          <Image
            src="/landingpage/co2.svg"
            alt='Impact Image 4'
            width={300}
            height={300}
            className='w-full h-auto mb-4'
          />
          <p className='text-2xl font-bold text-[#01185b]'>450 Estimated CO2 Saved (kg)</p>
        </div>
      </div>
    </div>
  )
}

export default ourimpact
