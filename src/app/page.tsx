import Integration from "@/components/api-integration/Integration";
import Faqs from "@/components/faqs/Faqs";
import Footer from "@/components/footer/Footer";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import NavBar from "@/components/nav-bar/NavBar";
import OurMainCatch from "@/components/our-main-catch/OurMainCatch";
import MeasureServices from "@/components/services/MeasureServices";
import OtherServices from "@/components/services/OtherServices";
import Slogan from "@/components/slogan/Slogan";
import WhatWeAre from "@/components/what-we-are-card/WhatWeAre";
import WhatWeOffer from "@/components/what-we-offer/WhatWeOffer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section id="hero">
        <Slogan />
        <WhatWeAre />
        <WhatWeOffer />
      </section>
      <section id="features">
        <OurMainCatch />
        <HowItWorks />
      </section>
      <section id="services">
        <Integration />
        <MeasureServices />
        <OtherServices />
      </section>
      <section id="support">
        <Faqs />
      </section>
      <Footer />
    </main>
  );
}
