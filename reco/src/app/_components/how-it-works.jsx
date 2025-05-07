"use client"
import React from 'react';
import Image from 'next/image';
import buildingImage from '../../images/building.png';
import deviceLogoImage from '../../images/device_logo.png';
import recycleLogoImage from '../../images/recycle_logo.png';

const Step = ({ imageUrl, title, description }) => {
  return (
    <div className="w-full lg:w-1/3 md:w-1/2 p-4 flex flex-col items-center mb-8 text-center rounded-3xl border border-black bg-gradient-to-b from-[#ebebe9] to-[#d4dfad] transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="w-full px-1.5 py-2 rounded-xl text-xl lg:text-2xl font-bold mb-6 text-[#013C5A] bg-[#A7CB4F]">
        {title}
      </h3>
      <div className="mb-5 w-24 h-24 lg:w-32 lg:h-32 relative flex items-center justify-center">
        <Image
          src={imageUrl} 
          alt={title}
          width={100}
          height={100}
          className="object-contain"
          priority
        />
      </div>
      <p className='text-lg lg:text-2xl font-light max-w-sm'>
        {description}
      </p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="mt-8 lg:mt-11 px-4">
      <div className="container mx-auto ">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-black mb-6 lg:mb-8 relative">
          How it Works
          <span className="block w-40 lg:w-64 h-1 bg-[#a7cb4f] mx-auto mt-3"></span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 py-8 lg:py-10 px-5 lg:px-20 mt-6 lg:mt-9 items-center rounded-2xl bg-[#013c5a]">
          <Step
            imageUrl={deviceLogoImage} 
            title="How It Works"
            description="Use our simple app to list the recyclable waste you have for collection."
          />

          <Step
            imageUrl={recycleLogoImage}
            title="We Collect & Sort"
            description="Our team collects, verifies, and sorts the materials to ensure quality standards."
          />

          <Step
            imageUrl={buildingImage}
            title="Industries Reuse"
            description="Manufacturers get high-quality recycled materials to create new products."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;