import React from 'react'
import headphone from "../../../../public/prices/headphones.svg" 
import shield from "../../../../public/prices/shield.svg" 
import delivery from "../../../../public/prices/delivery.svg" 
import Image from 'next/image'

const Service = () => {
  return (
    <section className='flex flex-col sm:flex-row items-center justify-evenly w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-4 gap-6 sm:gap-2 py-4'>
      <div className='flex flex-col items-center gap-2 p-2 sm:p-4'>
        <Image
          src={delivery}
          alt='delivery'
          width={32}
          height={32}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <p className='font-bold text-center text-sm sm:text-base text-white'>Free and Fast delivery</p>
        <p className='font-light text-center text-xs sm:text-sm text-white'>Free delivery for all orders above ₹140/-</p>
      </div>
      <div className='flex flex-col items-center gap-2 p-2 sm:p-4'>
        <Image
          src={headphone}
          alt='customer service'
          width={32}
          height={32}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <p className='font-bold text-center text-sm sm:text-base text-white'>24/7 Customer service</p>
        <p className='font-light text-center text-xs sm:text-sm text-white'>Friendly 24/7 customer support</p>
      </div>
      <div className='flex flex-col items-center gap-2 p-2 sm:p-4'>
        <Image
          src={shield}
          alt='money back guarantee'
          width={32}
          height={32}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <p className='font-bold text-center text-sm sm:text-base text-white'>Money back guarantee</p>
        <p className='font-light text-center text-xs sm:text-sm text-white'>We return money within 30 days</p>
      </div>
    </section>
  )
}

export default Service