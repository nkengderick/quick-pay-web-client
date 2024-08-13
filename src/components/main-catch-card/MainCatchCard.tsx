import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface MainCatchCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

const MainCatchCard: React.FC<MainCatchCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#13243A] text-white p-6 rounded-lg text-center shadow-md">
      <div className="mb-4">
        <FontAwesomeIcon icon={icon} size='2xl' color='#FEC84B' />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MainCatchCard;
