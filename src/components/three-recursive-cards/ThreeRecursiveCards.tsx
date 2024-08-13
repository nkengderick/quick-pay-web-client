import React from 'react';

interface ThreeRecursiveCardProps {
    outerImageUrl: string;
    innerImageUrl: string;
    children: React.ReactNode;
}

const ThreeRecursiveCard: React.FC<ThreeRecursiveCardProps> = ({ outerImageUrl, innerImageUrl, children }) => {
    return (
        <div
            className="relative lg:mb-[400px]"
        >
            <div>
                <img className='w-full h-[400px] rounded-3xl' src={outerImageUrl} alt="" />
            </div>
            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-blue-100 p-6 rounded-lg shadow-lg lg:w-2/3">
                {children}
                <div className='lg:absolute lg:left-[75%] lg:-translate-x-[50%] lg:top-1/2 lg:translate-y-1/2'>
                    <img className='w-full h-full rounded-xl' src={innerImageUrl} alt="" />
                </div>
            </div>
        </div>

    );
};

export default ThreeRecursiveCard;
