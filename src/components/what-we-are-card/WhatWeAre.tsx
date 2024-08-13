import Hero from "@/components/hero-card/HeroCard";

interface WhoWeAreProps {
  reverse?: boolean;
}

const WhatWeAre = ({ reverse = false }: WhoWeAreProps) => {
  return (
    <Hero
      header="Who We Are"
      description="We are a dedicated team of payment processing experts committed to providing the best solutions for your business. Our mission is to simplify payments and ensure your transactions are secure and efficient."
      primaryButtonText="Our Mission"
      secondaryButtonText="Join Us"
      primaryButtonLink="/our-mission"
      secondaryButtonLink="/join-us"
      imageUrl="https://picsum.photos/500/500?random=$100"
      reverse={reverse}
    />
  );
};

export default WhatWeAre;
