"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Hero = () => {
  return (
    <>
      {/* Ensure full height and content centering */}
      <div className="mx-auto min-h-screen flex flex-col items-center mt-20 text-center px-4 sm:px-6 lg:px-8">
        {/* Hero content container: centered, max-width, and specific text color for children */}
        <div className="w-full  text-[#013C5A]"> {/* Default text color for this section */}
          {/* Main Heading: Changed <p> to <h1> for semantics */}
          <div className="mb-6 fontcolorgradient leading-tight">
            Turn Your Waste into Worth
          </div>
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl mb-14 leading-relaxed italic text-black"> {/* Removed explicit text-black, inherits from parent */}
            Recycle smartly. Earn rewards. Help the planet.
          </p>

          {/* Buttons container: centered buttons with spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/download" className="w-2/3 sm:w-auto">
              <button className="greenbutton">
                Download the App
              </button>
            </Link>
            <Link href="/login" className="w-2/3 sm:w-auto"> {/* Changed href to /login */}
              <button className="bluebutton">
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
