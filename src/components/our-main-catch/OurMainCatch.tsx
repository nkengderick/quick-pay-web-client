import React from 'react';
import MainCatchCard from '../main-catch-card/MainCatchCard';
import { mainCatchCardData } from '@/data';

const OurMainCatch = () => {
  return (
    <section className="bg-[#0D1B2A] py-16 text-center">
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl font-bold text-[#FEC84B] mb-4">
          {mainCatchCardData.header}
        </h2>
        <p className="text-[#CAD4DE]">
          {mainCatchCardData.description}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        {mainCatchCardData.catches.map((card, index) => (
          <MainCatchCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default OurMainCatch;
