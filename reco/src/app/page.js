// import Hero from "@/components/landingpage/hero";
// import HowItWorks from "@/components/landingpage/how-it-works";
// import OurImpact from "@/components/landingpage/our-impact";
// import WhatPeopleSay from "@/components/landingpage/what-people-say";
// import WhoWeServe from "@/components/landingpage/who-we-serve";
// import WhyChoose from "@/components/landingpage/why-choose";
// import Questions from "@/components/landingpage/questions";
import OurApp from "@/components/landingpage/our-app";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/landingpage/hero";
import Questions from "@/components/landingpage/questions";
import Image from "next/image";
import ReviveHelps from "@/components/landingpage/revive-helps";

export default function Home() {
  return (
    <div className="bg-white ">
        <div className="bgimage">
          <Navbar />
          <Hero />
        </div>
        <ReviveHelps/>
      <Questions />
      <OurApp />
      <Footer />
    </div>
  );
}
