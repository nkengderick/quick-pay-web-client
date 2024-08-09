import Integration from "@/components/api-integration/Integration";
import Faqs from "@/components/faqs/Faqs";
import Footer from "@/components/footer/Footer";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import OurMainCatch from "@/components/our-main-catch/OurMainCatch";
import Pricing from "@/components/our-pricing/Pricing";
import MeasureServices from "@/components/services/MeasureServices";
import OtherServices from "@/components/services/OtherServices";
import AboutCard from "@/components/slogan/AboutCard";
import Slogan from "@/components/slogan/Slogan";
import StatsCard from "@/components/slogan/StatsCard";
import WhatWeAre from "@/components/what-we-are-card/WhatWeAre";
import WhatWeOffer from "@/components/what-we-offer/WhatWeOffer";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Slogan />
      </section>
      <section id="about">
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
      </section>
      <section id="home"></section>
      <section id="home"></section>
      <section id="features">
        <MeasureServices />
        <OtherServices />
      </section>
      <WhatWeOffer />
      <Pricing />
      <section id="features">
        <OurMainCatch />
        <HowItWorks />
      </section>
      <Integration />
      <section id="support">
        <Faqs />
      </section>
      <Footer />
    </main>
  );
}
