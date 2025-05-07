"use client"
import React from 'react';
import Image from 'next/image';
import buildingImage from '../../images/building.png';
import deviceLogoImage from '../../images/device_logo.png';
import recycleLogoImage from '../../images/recycle_logo.png';

const Step = ({ imageUrl, title, description }) => {
  return (
    <div className="flex-1 max-w-80 mx-4 mb-8 text-center pt-3 pb-10 px-5 rounded-3xl border border-black bg-gradient-to-b from-[#ebebe9] to-[#d4dfad] transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="px-1.5 py-2 rounded-xl text-2xl font-bold mb-10 text-[#013C5A] bg-[#A7CB4F]">{title}</h3>
      <div className="mb-5 w-32 h-32 mx-auto relative">
        <Image
          src={imageUrl} 
          alt={title}
          width={100}
          height={128}
          className="object-contain"
        />
      </div>
      <p className='margin-left: auto text-2xl justify-baseline font-light'>{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="mt-11">
      <div className="container mx-auto px-10 rounded-lg">
        <h2 className="text-4xl font-bold text-center text-black mb-8 relative">
          How it Works
          <span className="block w-64 h-1 bg-[#a7cb4f] mx-auto mt-3"></span>
        </h2>

        <div className="flex flex-wrap justify-between gap-32 py-10 px-20 mt-9 rounded-md bg-[#013c5a]">
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