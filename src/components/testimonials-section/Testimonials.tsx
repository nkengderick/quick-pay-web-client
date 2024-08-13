"use client"
import { testimonialsData } from '@/data';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface TestimonialProps {
    imageUrl: string;
    quote: string;
    rate: number;
    name: string;
    title: string;
}

const testimonials: TestimonialProps[] = testimonialsData.testimonials

const TestimonialCard: React.FC<TestimonialProps & { onPrev: () => void; onNext: () => void }> = ({
    imageUrl,
    quote,
    rate,
    name,
    title,
    onPrev,
    onNext,
}) => {
    return (
        <div className="bg-blue-100 border border-blue-300 p-8 rounded-lg text-center relative w-full max-w-md mx-auto">
            <button
                onClick={onPrev}
                className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 rounded-full"
            >
                <FiChevronLeft className="text-white w-6 h-6" />
            </button>
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
            <button
                onClick={onNext}
                className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 rounded-full"
            >
                <FiChevronRight className="text-white w-6 h-6" />
            </button>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">TRUSTED BY PROFESSIONALS</h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente vel asperiores vero
                repudiandae neque! Ut suscipit neque eligendi alias vero repellat enim corporis incidunt, ex,
                natus qui quia nulla sint.
            </p>
            <TestimonialCard
                {...testimonials[currentIndex]}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </div>
    );
};

export default Testimonials;
