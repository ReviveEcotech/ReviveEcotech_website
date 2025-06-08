"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-8 bg-white">

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-1 left-2 pl-2 md:pl-6 mt-2 md:mt-4 text-black font-bold text-sm rounded hover:underline"
      >
        &lt;Back
      </Link>

      {/* Left Panel */}
      <aside className="bg-[#5E5D5D1A] rounded-3xl flex flex-col items-center justify-center p-6 w-full md:w-[25rem] h-auto md:h-[30rem]">
        <header className="w-full flex justify-center z-10">
          <div className="w-[40%]">
            <Image
              className="block h-auto w-full object-contain"
              src="/revivelogo.svg"
              alt="Revive logo"
              width={250}
              height={300}
            />
          </div>
        </header>

        <figure className="w-full flex justify-center -mt-20 z-0 mb-8">
          <div className="w-[65%]">
            <Image
              className="block h-auto w-full object-contain"
              src="/sideimg.svg"
              alt="Recycling theme illustration"
              width={500}
              height={500}
            />
          </div>
        </figure>
      </aside>

      {/* Right Panel */}
      <section className="bg-[#5E5D5D1A] rounded-3xl flex flex-col items-center justify-center p-6 w-full md:w-[35rem] h-auto md:h-[30rem]">
        <div className="w-full max-w-md">
          {/* Tabs */}
          <nav
            className="flex justify-center mb-4"
            aria-label="Login or Sign up navigation"
          >
            <ul className="flex gap-20">
              <li>
                <Link
                  href="/login"
                  className="inline-block w-25 text-center font-medium text-black pb-2 hover:border-b-2 hover:border-green-700"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="inline-block w-25 border-b-2 border-green-700 text-center font-medium text-black pb-2"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          {/* Signup Form */}
          <form
            className="flex flex-col items-center w-full mt-2 space-y-4 mb-6"
            aria-label="Sign up form"
          >
            <p className="text-center text-black/40 tracking-wide text-sm">
              Join our sustainable marketplace as a buyer or seller
            </p>

            <input
              type="text"
              placeholder="Full Name"
              className="border border-black/70 rounded-xl px-2 h-[1.5rem] w-full text-[13px] text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border border-black/70 rounded-xl px-2 h-[1.5rem] w-full text-[13px] text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-black/70 rounded-xl px-2 h-[1.5rem] w-full text-[13px] text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-black/70 rounded-xl px-2 h-[1.5rem] w-full text-[13px] text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-black/70 rounded-xl px-2 h-[1.5rem] w-full text-[13px] text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none"
            />
            <input
              type="text"
              placeholder="Join As: Customer, Raddi wala, Company"
              className="border border-black/70 rounded-xl px-2 h-[1.5rem] w-full text-[13px] text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none"
            />
          </form>

          {/* Buttons */}
          <footer className="flex flex-col items-center justify-center w-full space-y-2">
            <button className="w-full h-[1.5rem] text-[13px] font-medium bg-black text-white rounded-md">
              Register
            </button>
            <Link href="/login" className="w-full">
              <div className="h-[1.5rem] w-full text-[13px] font-medium bg-[#a3d133] text-black rounded-md flex items-center justify-center">
                Have account? Login
              </div>
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
