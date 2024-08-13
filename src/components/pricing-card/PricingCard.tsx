import React from 'react';

export interface PricingCardProps {
  plan: string;
  amount: string;
  duration: string;
  description: string;
  benefits?: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, amount, duration, description, benefits }) => {
  return (
    <div className="bg-blue-100 p-6 rounded-xl shadow-md border border-blue-300 flex justify-between items-center">
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm">
            {plan}
          </span>
        </div>
        <p className="text-sm mb-4">{description}</p>
        {benefits && (
          <ul className="text-xs space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">✔</span>
                {benefit}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-col font-bold items-end">
        <p className="text-4xl">{amount}</p>
        <span className="text-sm">{duration}</span>
      </div>
    </div>
  );
};

export default PricingCard;
