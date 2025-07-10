import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex-1 p-6  py-4">
      <nav className="flex rounded-full bg-[#D9D9D9] px-20 m-3.5 ">
        <Link href="/">
          <button className="cursor-pointer bg-[#A7CB4F] font-bold text-black px-8 py-2  m-3 rounded-2xl ">
            Back
          </button>
        </Link>
        <ul className=" rounded-full flex justify-center gap-10 py-3 max-w-5xl mx-auto">

          <Link href="/home">
            <li className="list-none font-bold text-[#000000] px-8 py-2">
              Home
            </li>
          </Link>
          <Link href="/service">
            <li className="list-none font-bold text-[#000000] px-8 py-2">
              Service
            </li>
          </Link>
          <Link href="/joinus">
            <button className=" cursor-pointer bg-[#A7CB4F] font-bold text-black px-8 py-2 rounded-2xl">
              Join Us
            </button>
          </Link>
          <Link href="/contact-us">
            <li className="list-none font-bold text-[#000000] px-8 py-2">
              Contact
            </li>
          </Link>
          <Link href="/aboutus">
            <li className="list-none font-bold text-[#000000] px-8 py-2">
              About us
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
