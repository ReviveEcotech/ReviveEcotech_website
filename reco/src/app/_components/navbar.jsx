"use client"
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='backdrop-blur-xl backdrop-brightness-105 font-sans bg-opacity-100 py-1.5 px-6 sticky top-0 z-50 flex justify-between mx-auto items-center text-black'>
        <div className='text-2xl font-bold text-black font-serif'>
          Revive
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-5'>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
            <Link href="/">How it Works</Link>
          </button>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
            <Link href="/">Why Choose Us</Link>
          </button>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
            <Link href="/">Who We Serve</Link>
          </button>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
            <Link href="/">Our App</Link>
          </button>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
            <Link href="/">Contact</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='lg:hidden cursor-pointer hover:bg-white p-1 rounded-full'
        >
          {isOpen ? (
            <X />
          ) : (
            <Menu />
          )}
        </button>
      </div>

      {isOpen&&(<div className={`z-50 fixed top-0 right-0 w-1/2 h-screen backdrop-blur-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button onClick={toggleMenu} className=" cursor-pointer absolute top-3 right-6 text-black text-3xl focus:outline-none bg-white rounded-full p-1">
          <X />
        </button>
        <div className='flex flex-col space-y-7 items-end pt-20 px-4 text-black'>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
            <Link href="/">How it Works</Link>
          </button>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black '>
            <Link href="/">Why Choose Us</Link>
          </button>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
            <Link href="/">Who We Serve</Link>
          </button>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
            <Link href="/">Our App</Link>
          </button>
          <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
            <Link href="/">Contact</Link>
          </button>
        </div>
      </div>)}
    </>
  )
}

export default Navbar
