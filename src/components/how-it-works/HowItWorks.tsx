import React from 'react';
import Hero from '../hero-card/HeroCard';
import HowItWorksCard from '../how-it-works-card/HowItWorksCard';
import { howItWorksData } from '@/data';

const HowItWorksChild = () => {
  return (
    <div className='gap-6'>
      {howItWorksData.steps.map((item, index) => (
        <HowItWorksCard
          key={index}
          icon={item.icon}
          step={item.step}
          procedure={item.procedure}
        />
      ))}
    </div>
  );
}

interface HowItWorksProps {
  reverse?: boolean;
}

const HowItWorks = ({ reverse = false }: HowItWorksProps) => {
  return (
    <div className='space-y-8'>
      <Hero
        header="How It Works"
        description="We are a dedicated team of payment processing experts committed to providing the best solutions for your business. Our mission is to simplify payments and ensure your transactions are secure and efficient."
        primaryButtonText="Click Here"
        secondaryButtonText="Click Here"
        primaryButtonLink="/"
        secondaryButtonLink="/"
        imageUrl="https://picsum.photos/500/500?random=$100"
        children={<HowItWorksChild />}
        reverse={reverse}
      />
    </div>
  )
}

export default HowItWorks;
