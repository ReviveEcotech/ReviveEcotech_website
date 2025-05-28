import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import OurApp from "./components/our-app";
import OurImpact from "./components/our-impact";
import WhatPeopleSay from "./components/what-people-say";
import WhoWeServe from "./components/who-we-serve";
import WhyChoose from "./components/why-choose";
import Questions from "./components/questions";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-[#023d5b] py-5 lg:py-9 relative overflow-hidden">
      {/* Main container ellipse effects */}
      <div className="absolute -left-64 top-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#a7cb4f]/60 to-[#84a82d]/40 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-10 top-2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#A7CB4F]/50 to-[#B1FFFF]/30 blur-3xl pointer-events-none"></div>
      <div className="bg-[#EDEDED] md:px-5 pb-16 pt-6 mx-4 md:mx-10 rounded-t-3xl relative z-10">
        {/* Hero section ellipses */}
        <div className="absolute -left-40 top-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#a7cb4f]/50 to-[#84a82d]/30 blur-3xl pointer-events-none"></div>
        <Navbar />
        <Hero />

        {/* How It Works section ellipses */}
        <div className="absolute -right-40 top-[40%] w-[350px] h-[350px] rounded-full bg-gradient-to-l from-[#a7cb4f]/45 to-[#84a82d]/25 blur-3xl pointer-events-none"></div>
        <HowItWorks />
      </div>

      {/* Why Choose section ellipses */}
      <div className="relative overflow-hidden">
        <div className="absolute -left-52 top-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#a7cb4f]/55 to-[#84a82d]/35 blur-3xl pointer-events-none"></div>
        <WhyChoose />
      </div>

      {/* Our Impact section ellipses */}
      <div className="relative overflow-hidden">
        <div className="absolute -left-48 bottom-20 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#a7cb4f]/55 to-[#84a82d]/35 blur-3xl pointer-events-none"></div>
        <OurImpact />
      </div>

      {/* What People Say section ellipses */}
      <div className="relative overflow-hidden">
        <div className="absolute -left-60 top-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#a7cb4f]/50 to-[#84a82d]/30 blur-3xl pointer-events-none"></div>
        <WhatPeopleSay />
      </div>

      {/* Who We Serve section ellipses */}
      <div className="relative overflow-hidden">
        <div className="absolute -right-40 top-20 w-[380px] h-[380px] rounded-full bg-gradient-to-l from-[#a7cb4f]/55 to-[#84a82d]/35 blur-3xl pointer-events-none"></div>
        <WhoWeServe />
      </div>

      {/* Questions section ellipses */}
      <div className="relative overflow-hidden">
        <div className="absolute -left-52 top-1/3 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#a7cb4f]/45 to-[#84a82d]/25 blur-3xl pointer-events-none"></div>
        <Questions />
      </div>

      {/* Our App section ellipses */}
      <div className="relative overflow-hidden">
        <OurApp />
      </div>
    </div>
  );
}
