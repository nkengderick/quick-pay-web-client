"use client"
import FAQSection from "@/components/faqs-section/Faqs";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import OurMainCatch from "@/components/our-main-catch/OurMainCatch";
import Pricing from "@/components/our-pricing/Pricing";
import AboutCard from "@/components/slogan/AboutCard";
import Slogan from "@/components/slogan/Slogan";
import StatsCard from "@/components/slogan/StatsCard";
import Testimonials from "@/components/testimonials-section/Testimonials";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <div className="flex-col  justify-center item-center">
        <Slogan />
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "2em",
            flexWrap: "wrap",
            padding: "2em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AboutCard classes="border-blue-300 h-72 transition-all duration-500" />
          <StatsCard classes="h-72" />
        </div>
        <OurMainCatch />
        <HowItWorks reverse />
        <WhyChooseUs />
        <Pricing reverse />
        <Testimonials />
        <FAQSection />
      </div>
    </main>
  );
}
