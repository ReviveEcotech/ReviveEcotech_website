import React from 'react';
import household from '../../images/household.png';
import industry from '../../images/industry.png';
import Image from 'next/image';

const ServeCard = ({ image, title, benefits, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col py-3.5 lg:py-6 xl:pb-16 lg:px-9 xl:px-20 gap-6 bg-gray-50 p-8 rounded-3xl  item-center h-full justify-between ">
      <div>
        <p className="text-4xl flex font-normal justify-center mb-6">{title}</p>
        <div className='mb-3'>
          <Image
            src={image}
            alt={title}
            width={430}
            height={287}
            priority
          />
        </div>
        <div>
          <ul className="list-disc pl-5 text-xl md:text-[1.7rem] font-light mb-3">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='flex justify-center mt-auto'>
        <a
          href={buttonLink}
          className="bg-[#a7cb4f] hover:bg-[#a1ba62] text-white px-16 py-1 pb-3 md:text-3xl rounded-2xl text-center mt-4"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const WhoWeServe = () => {
  return (
    <section id="who-we-serve" className="py-20">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-4xl text-center font-bold text-white mb-2 relative">
          Who
          <span>
            <span className="text-[#a7cb4f]"> We Serve</span>
          </span>
          <span className="block w-72 h-1 bg-[#a7cb4f] mx-auto mt-3"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-7 py-9 justify-items-center lg:mx-11">
          <ServeCard
            image={household}
            title="Households"
            benefits={[
              "Earn money from your recyclable waste",
              "Convenient doorstep collection",
              "Reduce your environmental footprint",
              "Track your impact through the app"
            ]}
            buttonText="Learn More"
            buttonLink="#"
          />

          <ServeCard
            image={industry}
            title="Industries"
            benefits={[
              "Get affordable, quality raw materials",
              "Consistent supply of sorted recyclables",
              "Meet your sustainability goals",
              "Reduce production costs"
            ]}
            buttonText="Learn More"
            buttonLink="#"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;