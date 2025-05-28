import Image from 'next/image';
import React from 'react';

import avatar from '../../images/Avatar.png';
import asterisk from '../../images/asterisk.png';
import neg_star from '../../images/neg_star.png';
import pos_star from '../../images/pos_star.png';

const TestimonialCard = ({ avatar, name, quote, star }) => {
  return (
    <div className="flex flex-col py-10 md:py-14  lg:py-16 xl:py-20 lg:px-9 xl:px-20 gap-6 bg-gray-50 p-8 rounded-3xl shadow-sm text-center item-center justify-center">
      <div className='flex item-center justify-center '>
        <Image
          src={avatar}
          alt='icon'
          width={100}
          height={100}
          className="object-contain"
          priority
        />
      </div>
      <div className='flex item-center justify-center '>
        <Image
          src={asterisk}
          alt='icon'
          width={24}
          height={24}
          className="object-contain"
          priority
        />
      </div>
      <div>
        <p className='text-[17px]'>{quote}</p>
      </div>
      <div className='text-[18px]'>
      {name}
        <div className="flex gap-2 justify-center mt-4">
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src={index < star ? pos_star : neg_star}
              alt="star rating"
              width={24}
              height={24}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const Testimonials = () => {
  return (
      <div className="container w-full mx-auto px-4">

        <h2 className="text-4xl text-center font-bold text-white mb-2 relative">
          What
          <span>
            <span className="text-[#a7cb4f]"> People Say</span>
          </span>
          <span className="block w-80 h-1 bg-[#a7cb4f] mx-auto mt-3"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-7 py-9 justify-items-center lg:mx-11">
          <TestimonialCard
            avatar={avatar}
            name="Lora Smith"
            quote="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            star="4"
          />

          <TestimonialCard
            avatar={avatar}
            name="Lora Smith"
            quote="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            star="5"
          />
          <TestimonialCard
            avatar={avatar}
            name="Lora Smith"
            quote="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            star="5"
          />
        </div>
      </div>
  );
};

export default Testimonials;