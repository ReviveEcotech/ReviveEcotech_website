"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-8 bg-white">

    {/* Back Button */}
    <Link href="/" className="absolute top-1 left-2 pl-2 md:pl-6 mt-2 md:mt-4 text-black font-bold text-sm rounded hover:underline">
      &lt;Back
    </Link>

    <aside className="bg-[#5E5D5D1A] rounded-3xl flex flex-col items-center justify-center p-6 w-full md:w-[25rem] h-auto md:h-[30rem]">
      {/* Logo */}
      <header className="w-full flex justify-center z-10">
      <div className="w-[40%]">
        <Image className="block h-auto w-full object-contain" src="/revive-logo.svg" alt="Revive logo" width={250} height={300}/>
      </div>
      </header>

      {/* Side Illustration (moved up) */}
      <figure className="w-full flex justify-center -mt-20 z-0 mb-8"> {/* Pull upward by 2.5rem */}
      <div className="w-[65%]">
       <Image className="block h-auto w-full object-contain" src="/side-image.svg" alt="Recycling theme illustration" width={500} height={500}/>
      </div>
      </figure>
   </aside>

{/* Right Panel */}
<section className="bg-[#5E5D5D1A] rounded-3xl flex flex-col items-center justify-center p-6 w-full md:w-[35rem] h-auto md:h-[30rem]">
  <div className="w-full max-w-md">
    {/* Tabs */}
      <nav className="flex justify-center mb-4" aria-label="Login or Sign up navigation">
        <ul className="flex gap-20">
          <li>
            <Link href="/login" className="inline-block w-32 border-b-2 border-green-700 text-center font-bold pb-2">
              Login
            </Link>

          </li>
          <li>
            <Link href="/signup" className="inline-block w-32 text-center font-bold text-black pb-2 hover:border-b-2 hover:border-green-700">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>

    {/* Login Form */}
      <form className="flex flex-col items-center justify-center gap-4" aria-label="Login form">
        {/* Email field */}
          <div className="flex flex-col items-start w-80">
            <label htmlFor="email" className="text-sm">Your Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg hover:border-[#a3d133] focus:border-[#a3d133] focus:outline-none transition-colors duration-200 text-sm" placeholder="you@example.com" defaultValue="contact@dscodetech.com" required autoComplete="email"/>
          </div>

        {/* Password field */}
          <div className="flex flex-col items-start w-80">
            <label htmlFor="password" className="text-sm">Password</label>
              <input type="password" id="password" name="password" className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg hover:border-[#a3d133] focus:border-[#a3d133] focus:outline-none transition-colors duration-200 text-sm" placeholder="Enter your password" required minLength={6}autoComplete="current-password"/>
          </div>

        {/* Error & Link */}
          <div className="flex justify-between w-80 text-xs">
            <span id="wrong-password-text" className="text-red-500 invisible">Wrong password</span>
            <Link href="/forgot-password" className="text-blue-500">Forgot password?</Link>
          </div>

          <button type="submit" className="w-80 bg-[#a3d133] hover:bg-[#8fcf2e] text-white py-2 rounded font-bold text-sm mt-2 transition-colors duration-200">
            Continue
          </button>
      </form>

      {/* Social Login */}
        <div className="mt-6 flex flex-col items-center gap-3" aria-label="Social login options">
          <button type="button"
          // onClick={() => router.push('/auth/google')}
          className="w-80 h-10 border-2 border-black py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
            <Image src="/google-icon.svg" alt="Google logo" width={20} height={20} />
            Login with Google
          </button>

          <button type="button"
          // onClick={() => router.push('/auth/apple')}
          className="w-80 h-10 border-2 border-black py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
            <Image src="/apple-icon.svg" alt="Apple logo" width={20} height={20} />
            Login with Apple
          </button>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-500">Sign up</Link>
          </p>
        </div>
  </div>
  </section>
  </main>
  );
}
