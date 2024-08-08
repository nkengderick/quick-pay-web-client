import Hero from "@/components/hero-card/HeroCard";

const WhatWeOffer = () => {
  return (
    <Hero
      header="What We Offer"
      description="We provide a range of services to help you manage payments effortlessly. Whether it's handling transactions, creating invoices, or generating payment links, our platform has you covered."
      primaryButtonText="Learn More"
      secondaryButtonText="Get Started"
      primaryButtonLink="/learn-more"
      secondaryButtonLink="/get-started"
      imageUrl="/images/what-we-offer.png" // Replace with the actual image path
    />
  );
};

export default WhatWeOffer;
