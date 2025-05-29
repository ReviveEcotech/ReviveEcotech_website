"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Hero = () => {
  return (
    <>
      {/* Ensure full height and content centering */}
      <div className="relative mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <Image
          src="/landingpage/home.svg" // Assuming this SVG provides the light blue background with abstract items
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="-z-10 absolute top-0" // Ensures image is in the background
          priority
        />
        {/* Hero content container: centered, max-width, and specific text color for children */}
        <div className="relative z-0 w-full max-w-3xl text-[#013C5A]"> {/* Default text color for this section */}
          {/* Main Heading: Changed <p> to <h1> for semantics */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Turn Your Waste into <span className="text-[#A7CB4F]">Worth</span>
          </h1>
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed"> {/* Removed explicit text-black, inherits from parent */}
            Recycle smartly. Earn rewards. Help the planet.
          </p>

          {/* Buttons container: centered buttons with spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/download" className="w-full sm:w-auto">
              <button className="cursor-pointer bg-[#A7CB4F] hover:bg-[#96b83e] shadow-md text-black font-medium text-base sm:text-lg py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-105 w-full sm:w-auto">
                Download the App
              </button>
            </Link>
            <Link href="/login" className="w-full sm:w-auto"> {/* Changed href to /login */}
              <button className="cursor-pointer bg-[#013C5A] hover:bg-[#012c42] shadow-md text-white font-medium text-base sm:text-lg py-3 px-12 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-105 w-full sm:w-auto">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
