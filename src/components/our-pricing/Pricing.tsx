import React from 'react'
import Hero from '../hero-card/HeroCard'
import PricingCard, { PricingCardProps } from '../pricing-card/PricingCard';
import { pricingPlans } from '@/data';

const PricingCardDetails = () => {
  return (
    <div className="space-y-6">
      {pricingPlans.map((plan: PricingCardProps, index: number) => (
        <PricingCard
          key={index}
          plan={plan.plan}
          amount={plan.amount}
          duration={plan.duration}
          description={plan.description}
        />
      ))}
    </div>
  );
};

interface PricingProps {
  reverse?: boolean;
}

const Pricing = ({ reverse = false }: PricingProps) => {
  return (
    <div className=''>
      <Hero
        header="AFFORDABLE PLANCS TO EXPLORE"
        description="We are a dedicated team of payment processing experts committed to providing the best solutions for your business. Our mission is to simplify payments and ensure your transactions are secure and efficient."
        primaryButtonText="Click Here"
        secondaryButtonText="Click Here"
        primaryButtonLink="/"
        secondaryButtonLink="/"
        imageUrl="https://picsum.photos/500/500?random=$100"
        children={<PricingCardDetails />}
        reverse={reverse}
      />
    </div>
  )
}

export default Pricing