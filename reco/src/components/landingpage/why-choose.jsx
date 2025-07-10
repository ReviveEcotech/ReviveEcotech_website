import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="my-24"> {/* Further reduced from my-16 to my-8 */}
      <h1 className="fontcolorgradient text-center mb-28"> {/* Added mb-8 to reduce space */}
        Why Choose Revives
      </h1>
      <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-10 lg:gap-20 xl:gap-28 px-10 md:px-8 lg:px-20 xl:px-36 '>
        <div className='relative w-full self-start mb-20 md:mb-0 flex flex-col gap-4 pb-14 pt-32 px-2 lg:px-12 items-center justify-center text-center text-white bg-[#013C5A] rounded-3xl'> {/* Reduced pt-32 to pt-24 */}
          {/* Rest of the code remains the same */}
          <div>
            <Image
              src="/landingpage/icon1.svg"
              height={200}
              width={200}
              alt='Icon 1'
              className='absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
          </div>
          <p className='text-[#FF326F] text-3xl md:text-5xl lg:text-7xl font-bold'>1</p>
          <p className='font-bold text-2xl'>Easy-to-Use App</p>
          <p className='font-mono '>Our intuitive platform makes recycling accessible to everyone.</p>
        </div>
        {/* Similar changes for other boxes */}
        <div className='relative w-full self-start mb-20 md:mb-0 md:mt-[6rem] flex flex-col gap-4 pb-14 pt-32 px-2 lg:px-12 items-center justify-center text-center text-black bg-[#A7CB4F] rounded-3xl'> {/* Changed pt-40 to pt-32 */}
          {/* Second box content */}
          <div>
            <Image
              src="/landingpage/icon2.svg"
              height={200}
              width={200}
              alt='Icon 2'
              className='absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
          </div>
          <p className='text-[#FF326F] text-3xl md:text-5xl lg:text-7xl font-bold'>2</p>
          <p className='font-bold text-2xl'>Rewards & Referrals</p>
          <p className='font-mono'>Earn points, discounts, and bonuses for recycling and referring friends.</p>
        </div>
        <div className='relative w-full self-start mb-20 md:mb-0 md:mt-[14rem] flex flex-col gap-4 pb-14 pt-32 px-2 lg:px-12 items-center justify-center text-center text-white bg-[#013C5A] rounded-3xl'> {/* Changed pt-40 to pt-32 */}
          {/* Third box content */}
          <div>
            <Image
              src="/landingpage/icon3.svg"
              height={200}
              width={200}
              alt='Icon 3'
              className='absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
          </div>
          <p className='text-[#FF326F] text-3xl md:text-5xl lg:text-7xl font-bold'>3</p>
          <p className='font-bold text-2xl'>Trusted by Industries</p>
          <p className='font-mono'>Leading manufacturers rely on our high-quality recycled materials..</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;