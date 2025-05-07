import React from 'react';

const JoinMovement = () => {
  return (
    <section className="py-24 text-center text-white bg-green-800 bg-opacity-90 bg-blend-overlay" style={{backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-white">Be Part of India's Recycling Revolution</h2>
        <p className="max-w-3xl mx-auto text-lg mb-10">
          Join thousands of households and businesses who are transforming waste into valuable resources while earning rewards and helping the planet.
        </p>
        <a 
          href="#" 
          className="inline-block px-8 py-3 rounded-full bg-yellow-500 text-green-800 font-semibold border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition duration-300"
        >
          Join Us Today
        </a>
      </div>
    </section>
  );
};

export default JoinMovement;