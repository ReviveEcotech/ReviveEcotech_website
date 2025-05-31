"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="p-6 py-4 z-10">
            <nav className="flex rounded-full w-full lg:px-20 md:px-10 sm:px-4">
                {/* Desktop Navigation */}
                <ul className="rounded-full lg:flex justify-center gap-10 py-3 max-w-5xl mx-auto hidden">
                    <Link href="/home">
                        <li className="cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-8 py-2 rounded-2xl">
                            Home
                        </li>
                    </Link>
                    <Link href="/service">
                        <li className="cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-8 py-2 rounded-2xl">
                            Service
                        </li>
                    </Link>
                    <Link href="/joinus">
                        <button className=" cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-8 py-2 rounded-2xl">
                            Join Us
                        </button>
                    </Link>
                    <Link href="/contact-us">
                        <li className="cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-8 py-2 rounded-2xl">
                            Contacts
                        </li>
                    </Link>
                    <Link href="/aboutus">
                        <li className="cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-8 py-2 rounded-2xl">
                            About us
                        </li>
                    </Link>
                </ul>

                {/* Mobile Hamburger Button */}
                <div className="lg:hidden flex justify-end w-full">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded-md hover:bg-[#A7CB4F] transition-colors"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className="w-full h-0.5 bg-black transition-all"></span>
                            <span className="w-full h-0.5 bg-black transition-all"></span>
                            <span className="w-full h-0.5 bg-black transition-all"></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-16 left-6 right-6 bg-white rounded-2xl shadow-lg border border-gray-200 z-50">
                        <ul className="flex flex-col p-4 gap-2">
                            <Link href="/home">
                                <li className="cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-4 py-3 rounded-xl text-center">
                                    Home
                                </li>
                            </Link>
                            <Link href="/service">
                                <li className="cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-4 py-3 rounded-xl text-center">
                                    Service
                                </li>
                            </Link>
                            <Link href="/joinus">
                                <li className="cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-4 py-3 rounded-xl text-center">
                                    Join Us
                                </li>
                            </Link>
                            <Link href="/contact-us">
                                <li className="cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-4 py-3 rounded-xl text-center">
                                    Contacts
                                </li>
                            </Link>
                            <Link href="/aboutus">
                                <li className="cursor-pointer hover:bg-[#A7CB4F] font-bold text-black px-4 py-3 rounded-xl text-center">
                                    About us
                                </li>
                            </Link>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
