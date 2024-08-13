import React from 'react';
import ThreeRecursiveCard from '../three-recursive-cards/ThreeRecursiveCards';
import Hero from '../hero-card/HeroCard';
import HeaderCard from '../header-card/HeaderCard';
import { integrationData } from '@/data';

interface IntegrationProps {
  reverse?: boolean;
}

const Integration = ({ reverse = false }: IntegrationProps) => {
  return (
    <div className='p-8'>
      <ThreeRecursiveCard
        outerImageUrl={integrationData.outerImageUrl}
        innerImageUrl={integrationData.innerImageUrl}
      >
        <Hero
          header={integrationData.header}
          description={integrationData.description}
          imageUrl={<HeaderCard title={integrationData.headerCard.title} subtitle={integrationData.headerCard.subtitle} />}
          primaryButtonLink={integrationData.primaryButtonLink}
          primaryButtonText={integrationData.primaryButtonText}
          secondaryButtonLink={integrationData.secondaryButtonLink}
          secondaryButtonText={integrationData.secondaryButtonText}
          reverse={reverse}
        >
          {integrationData.heroContent}
        </Hero>
      </ThreeRecursiveCard>
    </div>
  )
}

export default Integration;
