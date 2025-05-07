import React from 'react';
import { Leaf, ThumbsUp, Gift, Award, RefreshCw } from 'lucide-react';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg text-center shadow-sm transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
      <div className="text-4xl text-green-500 mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-green-800">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12 relative">
          Why Choose Revives
          <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Feature 
            icon={<Leaf size={40} />}
            title="Eco-Friendly Mission" 
            description="We're committed to reducing waste and creating a sustainable future for all."
          />
          
          <Feature 
            icon={<ThumbsUp size={40} />}
            title="Easy-to-Use App" 
            description="Our intuitive platform makes recycling accessible to everyone."
          />
          
          <Feature 
            icon={<Gift size={40} />}
            title="Rewards & Referrals" 
            description="Earn points, discounts, and bonuses for recycling and referring friends."
          />
          
          <Feature 
            icon={<Award size={40} />}
            title="Trusted by Industries" 
            description="Leading manufacturers rely on our high-quality recycled materials."
          />
          
          <Feature 
            icon={<RefreshCw size={40} />}
            title="Circular Economy" 
            description="We close the loop by connecting waste producers with material users."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;