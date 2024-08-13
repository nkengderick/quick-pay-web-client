import React from 'react';
import Hero from '../hero-card/HeroCard';
import { sloganData } from '@/data'; // Adjust the import path as necessary

const Slogan = () => {
  return (
    <div className=''>
      <Hero
        header={sloganData.header}
        description={sloganData.description}
        primaryButtonText={sloganData.primaryButtonText}
        secondaryButtonText={sloganData.secondaryButtonText}
        primaryButtonLink={sloganData.primaryButtonLink}
        secondaryButtonLink={sloganData.secondaryButtonLink}
        imageUrl={sloganData.imageUrl}
        reverse={sloganData.reverse}
      />
    </div>
  );
}

export default Slogan;
