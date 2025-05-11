"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Trash2, DollarSign, Users, Cloud } from 'lucide-react';
import Image from 'next/image';
import recycle from '../../images/recycle_logo.png';
import rewards from '../../images/rewards_logo.png';
import saved from '../../images/saved_logo.png';
import users from '../../images/users09 logo.png';


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
    <div ref={counterRef} className="font-bold text-3xl mx-5 mb-5 min-w-[200px] text-[#013C5A] flex flex-col items-center justify-between">
      <div className=" text-yellow-500 mb-6 flex justify-center ">
        <Image
          src={icon}
          alt='icon'
          width={100}
          height={100}
          className="object-contain"
          priority
        />
      </div>
      <div>
        <div>{count}</div>
        <div>{label}</div>
      </div>
    </div>
  );
};

const ImpactCounter = () => {
  return (
    <section className="py-20 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-2">
          Our
          <span>
            <span className="text-[#a7cb4f]"> Impact</span>
          </span>
          <span className="block w-52 h-1 bg-[#a7cb4f] mx-auto mt-3"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-12 py-9 bg-[#d9d9d9] rounded-3xl shadow-sm items-baseline lg:mx-11">
          <CounterItem
            icon={recycle}
            endValue={1250}
            label="KGs of Waste Recycled"
          />

          <CounterItem
            icon={rewards}
            endValue={850}
            label="Rewards Distributed"
          />

          <CounterItem
            icon={users}
            endValue={3200}
            label="Happy Users"
          />

          <CounterItem
            icon={saved}
            endValue={450}
            label="Estimated CO2 Saved (kg)"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;