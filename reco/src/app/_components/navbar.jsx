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
      <div className='py-1.5 px-6 flex justify-end lg:justify-center mx-auto items-center text-black font-bold text-2xl'>
        <div className='hidden lg:flex gap-24'>
          <button className='px-3 py-2 hover:text-[#A7CB4F]'>
            <Link href="/">Home</Link>
          </button>
          <button className='px-3 py-2 hover:text-[#A7CB4F]'>
            <Link href="/">Service</Link>
          </button>
          <button className='px-3 py-2 hover:text-[#A7CB4F]'>
            <Link href="/">Join Us</Link>
          </button>
          <button className='px-3 py-2 hover:text-[#A7CB4F]'>
            <Link href="/contact">Contacts</Link>
          </button>
          <button className='px-3 py-2 hover:text-[#A7CB4F]'>
            <Link href="/">About Us</Link>
          </button>
        </div>

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

      {isOpen && (
        <div className="z-50 fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out lg:hidden">
          <button onClick={toggleMenu} className="cursor-pointer absolute top-3 right-6 text-black text-3xl focus:outline-none bg-white rounded-full p-1">
            <X />
          </button>
          <div className='flex flex-col space-y-7 items-center pt-20 px-4 text-black'>
            <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
              <Link href="/">Home</Link>
            </button>
            <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black '>
              <Link href="/">Service</Link>
            </button>
            <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
              <Link href="/">Join Us</Link>
            </button>
            <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
              <Link href="/">Contacts</Link>
            </button>
            <button className='px-3 py-2 rounded-3xl transition-colors hover:bg-white hover:text-black'>
              <Link href="/">About Us</Link>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
