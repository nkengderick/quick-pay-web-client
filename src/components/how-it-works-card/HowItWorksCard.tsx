import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FiSearch } from "react-icons/fi";

interface HowItWorksCardProps {
  icon: IconDefinition;
  step: string;
  procedure: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ icon, step, procedure }) => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
      {/* Icon section */}
      <div className="text-4xl text-blue-600">
        <FontAwesomeIcon icon={icon} color="blue" className="h-5 w-5"/>
      </div>

      {/* Text section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">{step}</h3>
        <p className="text-gray-600">
          {procedure}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
