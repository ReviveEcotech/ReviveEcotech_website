// import Hero from "@/components/landingpage/hero";
// import HowItWorks from "@/components/landingpage/how-it-works";
import OurImpact from "@/components/landingpage/our-impact";
import Whatpeoplesay from "@/components/landingpage/what-people-say";
// import WhoWeServe from "@/components/landingpage/who-we-serve";
// import Questions from "@/components/landingpage/questions";
import WhyChoose from "@/components/landingpage/why-choose";
import OurApp from "@/components/landingpage/our-app";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/landingpage/hero";
import Questions from "@/components/landingpage/questions";
import ReviveHelps from "@/components/landingpage/revive-helps";
import Brands from "@/components/landingpage/brands";
import HowItWorks from "@/components/landingpage/how-it-works";
import WhyChooseUs from "@/components/landingpage/why-choose";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <div className="bgimage ">
        <Navbar />
        <Hero />
      </div>
      <ReviveHelps />
      <Brands />
      <HowItWorks />
      <WhyChoose />
      <div className="bg-[#e8e8e8] mx-8 rounded-4xl">
        <OurImpact />
        <Whatpeoplesay/>
      </div>
      <Questions />
      <OurApp />
      <Footer />
    </div>
  );
}
