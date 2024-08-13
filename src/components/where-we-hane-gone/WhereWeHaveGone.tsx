import React from 'react';
import Hero from "@/components/hero-card/HeroCard";
import SuccessCards from "../our-successes/SuccessCards";
import { whereWeHaveGoneData } from '@/data';

interface WherWeHaveGoneProps {
  reverse?: boolean;
}

const WhereWeHaveGone = ({ reverse = false }: WherWeHaveGoneProps) => {
  return (
    <Hero
      header={whereWeHaveGoneData.header}
      description={whereWeHaveGoneData.description}
      primaryButtonText={whereWeHaveGoneData.primaryButtonText}
      secondaryButtonText={whereWeHaveGoneData.secondaryButtonText}
      primaryButtonLink={whereWeHaveGoneData.primaryButtonLink}
      secondaryButtonLink={whereWeHaveGoneData.secondaryButtonLink}
      imageUrl={whereWeHaveGoneData.imageUrl}
      children={<SuccessCards />}
      reverse={reverse}
    />
  );
};

export default WhereWeHaveGone;
