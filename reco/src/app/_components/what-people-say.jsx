import React from 'react';

const TestimonialCard = ({ avatar, name, role, quote }) => {
  return (
    <div className="flex-1 min-w-[300px] max-w-md bg-gray-50 p-8 rounded-lg shadow-sm">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-semibold text-green-800">{name}</div>
          <div className="text-gray-500 text-sm">{role}</div>
        </div>
      </div>
      <div className="relative italic">
        <div className="absolute -top-5 -left-2 text-6xl text-green-500 opacity-30">"</div>
        <p className="relative z-10">{quote}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12 relative">
          What People Say
          <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <TestimonialCard 
            avatar="https://randomuser.me/api/portraits/women/43.jpg"
            name="Priya K."
            role="Household User"
            quote="Easy to use and great rewards for my dry waste. I've earned over ₹2000 in just three months while helping the environment!"
          />
          
          <TestimonialCard 
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
            name="Rajesh P."
            role="Industry Partner"
            quote="Reliable, sorted materials—perfect for our manufacturing needs. Revives has become an essential part of our supply chain."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;