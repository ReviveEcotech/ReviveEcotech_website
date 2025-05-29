import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className=" flex-1 p-6 py-4">
            <nav className="flex rounded-full px-20">
                <ul className=" rounded-full flex justify-center gap-10 py-3 max-w-5xl mx-auto">

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
            </nav>
        </div>
    );
};

export default Navbar;