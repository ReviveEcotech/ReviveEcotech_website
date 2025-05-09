import Hero from "./_components/hero";
import BePartOfRevive from "./_components/be-partof-revive";
import Footer from "./_components/footer";
import HowItWorks from "./_components/how-it-works";
import OurApp from "./_components/our-app";
import OurImpact from "./_components/our-impact";
import WhatPeopleSay from "./_components/what-people-say";
import WhoWeServe from "./_components/who-we-serve";
import WhyChoose from "./_components/why-choose";

export default function Home() {
  return (
    <div className="bg-[#023d5b]">
      <Hero/>
      <HowItWorks/>
      <WhyChoose/>
      <OurImpact/>
      <WhatPeopleSay/>
      <WhoWeServe/>
      <OurApp/>
      <BePartOfRevive/>
      <Footer/>
    </div>
  );
}



