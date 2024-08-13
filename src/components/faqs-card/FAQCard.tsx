"use client";
import { FAQ } from '@/data';
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQCardProps {
    faqs: FAQ[];
}

const FAQCard: React.FC<FAQCardProps> = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full mx-auto">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => handleToggle(index)}
                    >
                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                        <div className="ml-2">
                            {activeIndex === index ? <FiMinus /> : <FiPlus />}
                        </div>
                    </div>
                    <div
                        className={`mt-4 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                            activeIndex === index ? 'max-h-96' : 'max-h-0'
                        }`}
                    >
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>
                    {index < faqs.length - 1 && <hr className="my-4" />}
                </div>
            ))}
        </div>
    );
};

export default FAQCard;
