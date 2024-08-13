import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface TestimonialCardProps {
    imageUrl: string;
    quote: string;
    rate: number;
    name: string;
    title: string;
    onPrev?: () => void;
    onNext?: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    imageUrl,
    quote,
    rate,
    name,
    title,
}) => {

    return (
        <div className={`bg-blue-100 border border-blue-300 p-8 rounded-lg text-center relative mx-auto`}>
            <div className="flex justify-center mb-4">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-24 h-24 rounded-full border-4 border-blue-700 absolute -top-12"
                />
            </div>
            <p className="italic mb-4">{quote}</p>
            <div className="flex justify-center mb-4">
                {Array.from({ length: rate }).map((_, index) => (
                    <AiFillStar key={index} className="text-yellow-400" />
                ))}
                {Array.from({ length: 5 - rate }).map((_, index) => (
                    <AiOutlineStar key={index} className="text-yellow-400" />
                ))}
            </div>
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-gray-400">{title}</p>
        </div>
    );
};

export default TestimonialCard;
