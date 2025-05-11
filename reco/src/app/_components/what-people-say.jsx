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
    <section className="py-20">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl text-center font-bold text-white mb-2 relative">
          What
          <span>
            <span className="text-[#a7cb4f]"> People Say</span>
          </span>
          <span className="block w-80 h-1 bg-[#a7cb4f] mx-auto mt-3"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12 py-9 justify-items-center lg:mx-11">
          <TestimonialCard
            avatar="https://randomuser.me/api/portraits/women/43.jpg"
            name="Priya K."
            role="Household User"
            quote="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />

          <TestimonialCard
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
            name="Rajesh P."
            role="Industry Partner"
            quote="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <TestimonialCard
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
            name="Rajesh P."
            role="Industry Partner"
            quote="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;