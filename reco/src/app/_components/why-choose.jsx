import React from 'react';
// import { Leaf, ThumbsUp, Gift, Award, RefreshCw } from 'lucide-react';

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
    <section id="why-choose-us" className="py-20 bg-[#013C5A] mx-12">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] font-bold text-center text-white mb-12 relative">
          Why Choose 
          <span className="text-[#a7cb4f]"> Revive</span>
          <span className="block w-60 h-1 bg-[#A7CB4F] mx-auto mt-3"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-12">
          <Feature 
            title="Eco-Friendly Mission" 
            description="We're committed to reducing waste and creating a sustainable future for all."
          />
          
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
    </section>
  );
};

export default WhyChooseUs;