"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Trash2, DollarSign, Users, Cloud } from 'lucide-react';

const CounterItem = ({ icon, endValue, label }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startValue = 0;
          const increment = Math.ceil(endValue / 60); // Adjust for animation speed
          
          const timer = setInterval(() => {
            startValue += increment;
            
            if (startValue > endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(startValue);
            }
          }, 30);
          
          // Clean up
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [endValue]);
  
  return (
    <div ref={counterRef} className="mx-5 mb-10 min-w-[200px]">
      <div className="text-3xl text-yellow-500 mb-4 flex justify-center">
        {icon}
      </div>
      <div className="text-5xl font-bold mb-2 text-yellow-500">{count}</div>
      <div className="text-lg text-white">{label}</div>
    </div>
  );
};

const ImpactCounter = () => {
  return (
    <section className="py-20 bg-green-800 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 relative">
          Our Impact
          <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="flex flex-wrap justify-around mt-12">
          <CounterItem 
            icon={<Trash2 size={32} />}
            endValue={1250}
            label="KGs of Waste Recycled"
          />
          
          <CounterItem 
            icon={<DollarSign size={32} />}
            endValue={850}
            label="Rewards Distributed"
          />
          
          <CounterItem 
            icon={<Users size={32} />}
            endValue={3200}
            label="Happy Users"
          />
          
          <CounterItem 
            icon={<Cloud size={32} />}
            endValue={450}
            label="Estimated CO2 Saved (kg)"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;