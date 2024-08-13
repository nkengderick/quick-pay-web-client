import React from 'react';

interface HeaderCardProps {
  title: string;
  subtitle: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-none text-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-2">{title}</h1>
      <p className="text-lg text-gray-700 mb-4">{subtitle}</p>
    </div>
  );
};

export default HeaderCard;
