import React from 'react';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="bg-[#D9D9D9] p-6 py-10 rounded-4xl text-center transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg shadow-[-8px_8px_4px_0px_rgba(167,203,79,0.7)]">
      <h3 className="font-bold text-3xl mb-4 text-black">{title}</h3>
      <p className='font-light text-2xl'>{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
      <div className="my-32">
        <div className="fontcolorgradient text-center">
          Why Choose Revives
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          
          <Feature 
            title="Easy-to-Use App" 
            description="Our intuitive platform makes recycling accessible to everyone."
          />
          
          <Feature 
            title="Rewards & Referrals" 
            description="Earn points, discounts, and bonuses for recycling and referring friends."
          />
          
          <Feature 
            title="Trusted by Industries" 
            description="Leading manufacturers rely on our high-quality recycled materials."
          />

        </div>
      </div>
  );
};

export default WhyChooseUs;