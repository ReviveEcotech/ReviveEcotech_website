"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowDownToLine } from 'lucide-react';
import { CircleHelp } from 'lucide-react';
import Navbar from './navbar';


const Hero = () => {
  return (
    <div className="min-h-screen bg-[image:url('/hero.jpeg')] bg-cover bg-center relative contrast-[120%] brightness-105">
      <Navbar/>
      <div className="absolute inset-0 backdrop-blur-[1.7px] mx-auto mt-16 md:mt-0 px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Hero content */}
        <div
          className="text-black max-w-2xl mb-12 md:mb-0 lg:px-10">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight >">
            Turn Your Waste into <span className="text-emerald-600">Worth</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-black leading-relaxed">
            Recycle smartly. Earn rewards. Help the planet.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/download" className="w-full sm:w-auto">
              <button className="cursor-pointer bg-black/85 hover:bg-black text-neutral-200 hover:text-white font-medium py-3 px-5 rounded-full  transition-all duration-300 flex items-center justify-center hover:scale-105">
                <ArrowDownToLine className='p-1 mr-1'/>
                Download the App
              </button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <button className="cursor-pointer border-2 border-black bg-white/30 hover:bg-white text-black font-medium py-3 px-8 rounded-full  transition-all duration-300 flex items-center justify-center  hover:scale-105">
                <CircleHelp className='p-1 mr-1'/>
                How it Works
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
