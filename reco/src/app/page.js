import OurImpact from "@/components/landingpage/our-impact";
import WhatPeopleSay from "@/components/landingpage/what-people-say";
import WhyChooseUs from "@/components/landingpage/why-choose";
import OurApp from "@/components/landingpage/our-app";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/landingpage/hero";
import Questions from "@/components/landingpage/questions";
import ReviveHelps from "@/components/landingpage/revive-helps";
import Brands from "@/components/landingpage/brands";
import HowItWorks from "@/components/landingpage/how-it-works";
import Liner from "@/components/landingpage/liner";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <div className="bgimage">
        <Navbar />
        <Hero />
      </div>
      <Liner/>
      <ReviveHelps />
      <Brands />
      <HowItWorks />
      <WhyChooseUs />
      <div className="bg-[#e8e8e8] m-2 sm:m-8 p-1 rounded-3xl">
        <OurImpact />
        <WhatPeopleSay/>
      </div>
      <Questions /> 
      <OurApp />
      <Footer />
    </div>
  );
}
