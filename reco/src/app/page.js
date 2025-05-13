import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import OurApp from "./_components/our-app";
import OurImpact from "./_components/our-impact";
import WhatPeopleSay from "./_components/what-people-say";
import WhoWeServe from "./_components/who-we-serve";
import WhyChoose from "./_components/why-choose";
import Questions from "./_components/questions";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <div className="bg-[#023d5b] py-9">
      <div className="bg-[#EDEDED] md:px-5 pb-16 pt-6 mx-4 md:mx-10 rounded-t-3xl">
        <Navbar />
        <Hero />
        <HowItWorks />
      </div>
      <WhyChoose />
      <OurImpact />
      <WhatPeopleSay />
      <WhoWeServe />
      <Questions />
      <OurApp />
    </div>
  );
}
