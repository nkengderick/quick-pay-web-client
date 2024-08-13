import Integration from "@/components/api-integration/Integration";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import OurMainCatch from "@/components/our-main-catch/OurMainCatch";
import Testimonials from "@/components/testimonials-section/Testimonials";
import WhatWeAre from "@/components/what-we-are-card/WhatWeAre";
import WhereWeHaveGone from "@/components/where-we-hane-gone/WhereWeHaveGone";
import Team from "@/components/our-team/OurTeam";


export default function Home() {
  return (
    <main>

      <div>
        <>
          <WhatWeAre />
          <OurMainCatch />
          <Integration />
          <HowItWorks reverse />
          <WhereWeHaveGone />
          <Team showAll={false} />
          <Testimonials />
        </>
      </div>
    </main>
  );
}
