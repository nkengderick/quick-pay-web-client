import { successData } from "@/data";
import React from "react";

const SuccessCards = () => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 py-16 px-4 md:px-16 lg:px-32">
      {successData.map((item, index) => (
        <div
          key={index}
          className={`${(index === 0 || index === 3) ? "bg:none hover:bg-blue-100" : "bg-blue-100 hover:bg-opacity-0" } border border-blue-300 p-6 rounded-lg transition-all duration-500 text-center`}
        >
          <h3 className="text-3xl font-bold mb-4">{item.value}</h3>
          <p className="text-gray-800">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SuccessCards;
