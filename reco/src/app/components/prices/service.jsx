import React from 'react'
import headphone from "../../../../public/prices/headphones.svg" 
import shield from "../../../../public/prices/shield.svg" 
import delivery from "../../../../public/prices/delivery.svg" 
import Image from 'next/image'

const Service = () => {
  return (
    <section className='flex flex-row items-center justify-evenly w-1/2'>
      <div className='flex flex-col items-center gap-2 p-4'>
        <Image
          src={delivery}
          alt='delivery'
          width={40}
          height={40}
        />
        <p className='font-bold text-center'>Free and Fast delivery</p>
        <p className='font-light text-center'>Free delivery for all orders above ₹140/-</p>
      </div>
      <div className='flex flex-col items-center gap-2 p-4'>
        <Image
          src={headphone}
          alt='customer service'
          width={40}
          height={40}
        />
        <p className='font-bold text-center'>24/7 Customer service</p>
        <p className='font-light text-center'>Friendly 24/7 customer support</p>
      </div>
      <div className='flex flex-col items-center gap-2 p-4'>
        <Image
          src={shield}
          alt='money back guarantee'
          width={40}
          height={40}
        />
        <p className='font-bold text-center'>Money back guarantee</p>
        <p className='font-light text-center'>We return money within 30 days</p>
      </div>
    </section>
  )
}

export default Service