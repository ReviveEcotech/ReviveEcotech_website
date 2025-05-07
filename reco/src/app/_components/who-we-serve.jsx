import React from 'react';

const ServeCard = ({ image, title, benefits, buttonText, buttonLink }) => {
  return (
    <div className="flex-1 min-w-[300px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-4 text-green-800">{title}</h3>
        <ul className="list-disc pl-5 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="mb-2">{benefit}</li>
          ))}
        </ul>
        <a 
          href={buttonLink} 
          className="inline-block px-6 py-3 rounded-full bg-green-800 text-white font-semibold border-2 border-green-800 hover:bg-transparent hover:text-green-800 transition duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const WhoWeServe = () => {
  return (
    <section id="who-we-serve" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12 relative">
          Who We Serve
          <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="flex flex-wrap gap-8 mt-12">
          <ServeCard 
            image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
            image="https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="Industries"
            benefits={[
              "Get affordable, quality raw materials",
              "Consistent supply of sorted recyclables",
              "Meet your sustainability goals",
              "Reduce production costs"
            ]}
            buttonText="Partner With Us"
            buttonLink="#"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;