import Hero from "@/components/hero-card/HeroCard";
import { whatWeOfferData } from "@/data";

interface WhatWeOfferProps {
  reverse?: boolean;
}

const WhatWeOffer = ({ reverse= false} : WhatWeOfferProps) => {
  return (
    <Hero
      header={whatWeOfferData.header}
      description={whatWeOfferData.description}
      primaryButtonText={whatWeOfferData.primaryButtonText}
      secondaryButtonText={whatWeOfferData.secondaryButtonText}
      primaryButtonLink={whatWeOfferData.primaryButtonLink}
      secondaryButtonLink={whatWeOfferData.secondaryButtonLink}
      imageUrl={whatWeOfferData.imageUrl}
      reverse={reverse}
    />

  );
};

export default WhatWeOffer;
