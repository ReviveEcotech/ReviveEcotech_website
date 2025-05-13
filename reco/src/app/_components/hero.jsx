"use client"
import React from 'react'
import Link from 'next/link'
import other from '../../images/Other.png';
import Image from 'next/image';


const Hero = () => {
  return (
    <>
      
      <div className=" mx-auto md:mt-16 md:mt-0 px-10 py-16 md:py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Hero content */}
        <div
          className="text-black max-w-2xl mb-12 md:mb-0 lg:pr-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight >">
            Turn Your Waste into Worth
          </h1>

          <p className="text-2xl md:text-3xl mb-8 italic pr-24 text-black leading-relaxed">
            Recycle smartly. Earn rewards. Help the planet.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/download" className="w-full sm:w-auto">
              <button className="cursor-pointer bg-[#A7CB4F] hover:bg-[#a8cb4fb6] shadow-lg/30 text-black font-light text-xl py-2 px-5  rounded-2xl  transition-all duration-300 flex items-center justify-center hover:scale-105">
                Download the App
              </button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <button className="cursor-pointer bg-[#013C5A] shadow-lg/30 text-white font-light text-xl py-2 px-14 rounded-2xl  transition-all duration-300 flex items-center justify-center  hover:scale-105">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className='hidden md:block'>
          <Image
            src={other}
            alt="hero"
            width={408}
            height={626}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </>
  )
}

export default Hero
