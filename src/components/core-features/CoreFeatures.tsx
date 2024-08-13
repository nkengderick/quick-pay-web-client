import React from "react";
import { coreFeaturesData } from "@/data";
import HeaderCard from "../header-card/HeaderCard";

const CoreFeatures = () => {
  const { title, subtitle, imageUrl, features } = coreFeaturesData;

  return (
    <div className="bg-dark-blue py-16 px-4 md:px-16 lg:px-32 text-white">
      <HeaderCard title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:items-center">
        
        {/* Left side features */}
        <div className="flex flex-col justify-between h-full space-y-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="bg-blue-900 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Center image */}
        <div className="flex w-full h-full border border-blue-300">
          <img
            src={imageUrl}
            alt="Core Features"
            className="w-full h-auto lg:h-full object-cover lg:max-w-full"
          />
        </div>

        {/* Right side features */}
        <div className="flex flex-col justify-between h-full space-y-8">
          {features.slice(3).map((feature, index) => (
            <div key={index} className="bg-blue-900 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
