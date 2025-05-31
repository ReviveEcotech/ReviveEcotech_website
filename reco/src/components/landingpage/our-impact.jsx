import Image from 'next/image'
import React from 'react'

const ourimpact = () => {
  return (
    <div className='mb-40'>
      <div className='flex flex-col items-end  lg:pr-40'>  {/* Added items-end to align to right */}

        <div className='fontcolorgradient my-3 sm:my-7 mx-4 text-end '>  {/* Added text-right */}
          Our Impact
        </div>

        <div className='flex flex-row justify-end items-center'>  {/* Added justify-end */}
          <p className='text-black sm:my-7 mx-4 text-end'>
            Work recently submitted by our top creators on the platform
          </p>
          <button>
            <Image
              src="/landingpage/left.svg"
              height={50}
              width={50}
              alt='Left Arrow'
              className='mr-4 hidden lg:block'
            />
          </button>
          <button>
            <Image
              src="/landingpage/right.svg"
              height={50}
              width={50}
              alt='Right Arrow'
              className='mr-4 hidden lg:block'
            />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 sm:px-12 lg:px-20 text-black gap-20 my-10'>
        <div className='scaler bg-[#ffffff] ring-[1rem] ring-[#b9b9b9] rounded-3xl p-2 flex flex-col justify-between'>
          <Image
            src="/landingpage/trophy.svg"
            alt='Impact Image 1'
            width={300}
            height={300}
            className='w-full '
          />
          <p className='text-base overflow-hidden sm:text-2xl text-center font-bold text-[#01185b]'>850 Rewards Distributed</p>
        </div>

        <div className='scaler bg-[#ffffff] ring-[1rem] ring-[#b9b9b9] flex flex-col justify-between rounded-3xl p-2'>
          <Image
            src="/landingpage/recycle.svg"
            alt='Impact Image 2'
            width={300}
            height={300}
            className='w-full h-auto mb-4'
          />
          <p className='text-base sm:text-2xl text-center font-bold text-[#01185b]'>1250 KGs of Waste Recycled</p>
        </div>

        <div className='scaler bg-[#ffffff] ring-[1rem] ring-[#b9b9b9] flex flex-col justify-between rounded-3xl p-2'>
          <Image
            src="/landingpage/user.svg"
            alt='Impact Image 3'
            width={300}
            height={300}
            className='w-full h-auto mb-4'
          />
          <p className='text-base sm:text-2xl text-center font-bold text-[#01185b]'>3200 Happy Users</p>
        </div>
        <div className='scaler bg-[#ffffff] ring-[1rem] ring-[#b9b9b9] flex flex-col justify-between rounded-3xl p-2'>
          <Image
            src="/landingpage/co2.svg"
            alt='Impact Image 4'
            width={300}
            height={300}
            className='w-full h-auto mb-4'
          />
          <p className='text-base sm:text-2xl text-center font-bold text-[#01185b]'>450 Estimated CO2 Saved (kg)</p>
        </div>
      </div>
    </div>
  )
}

export default ourimpact
