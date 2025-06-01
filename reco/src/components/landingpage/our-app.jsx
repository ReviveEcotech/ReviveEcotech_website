
import React from 'react';
import Image from 'next/image';

const OurApp = () => {
  return (
    <div className='mb-10'>
      <div className="mt-2 text-black md:mt-12 bg-white rounded-3xl mx-4 lg:mx-20 py-5 md:py-7 px-3 md:px-24">
        <h2 className="text-3xl  md:text-[2.5rem] text-center font-bold mb-6 md:mb-2 relative">
          Download
          <span className="text-3xl md:text-[2.5rem] text-[#a7cb4f]"> Our App</span>
        </h2>
        <div className='flex flex-col xl:flex-row py-5 md:py-14 gap-10 px-4'>
          <div className='flex flex-col gap-6 items-center justify-center'>
            <div>
              <Image
                src="/landingpage/qr.svg"
                alt='icon'
                width={214}
                height={214}
                className="object-contain"
                priority
              />
            </div>
            <div className='flex sm:flex-row gap-4 justify-center items-center'>
              <Image
                src="/landingpage/apple.svg"
                alt='icon'
                width={205}
                height={61}
                className="object-contain w-1/2 sm:w-full"
                priority
              />
              <Image
                src="/landingpage/google.svg"
                alt='icon'
                width={189}
                height={60}
                className="object-contain w-1/2 sm:w-full"
                priority
              />
            </div>
          </div>
          <div className='flex flex-col gap-5 items-center justify-center px-2 md:px-6'>
            <p className='text-2xl md:text-3xl font-bold'>Everything You Need in One Place</p>
            <p className='text-xl md:text-2xl font-light'>Our mobile app makes recycling effortless and rewarding.
              With just a few taps, you can:</p>
            <ul className='text-xl md:text-2xl font-light list-disc'>
              <li>Schedule waste pickup at your convenience</li>
              <li>Track your recycling history and impact</li>
              <li>Redeem rewards and referral bonuses</li>
              <li>Get real-time updates on collection status</li>
              <li>Learn about proper waste segregation</li>
            </ul>
          </div>

        </div>
        <div className='flex flex-col gap-8 items-center justify-center text-base md:text-2xl font-light px-7 mt-12'>
          <p>Subscribe to get updates on our initiatives and recycling tips.</p>
          <div className='flex flex-col gap-3 w-full'>
            <button className='bg-[#A7CB4F] rounded-3xl py-3'>Enter Your Email</button>
            <button className='bg-[#E6F7BC] rounded-3xl py-3'>Share Response</button>
          </div>
          <p className='font-normal'>© 2025 Revives. All Rights Reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default OurApp;