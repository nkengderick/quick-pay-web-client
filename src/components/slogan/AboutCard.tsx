import React from 'react';

interface AboutCardProps {
    classes?: string
}

const AboutCard = ({ classes }: AboutCardProps) => {

    return (
        <div className={`${classes} max-w-xl p-6 rounded-lg border shadow-md flex flex-col justify-between hover:bg-blue-100`}>
            <div>
                <h3 className="text-2xl font-bold mb-4">About</h3>
                <p className="mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled.
                </p>
            </div>
            <div className="flex gap-4">
                <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold py-2 px-4 rounded-full">
                    Learn More
                </button>
                <button className="bg-transparent border-0 flex items-center gap-2 font-semibold py-2 px-4 rounded-full">
                    <div className="bg-yellow-500 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197 1.832a1 1 0 01-1.555-.832v-3.664a1 1 0 011.555-.832l3.197 1.832a1 1 0 010 1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 8v1m0 8v1m-5-4h1m8 0h1m1.464-5.121l-.707-.707m-9.9 9.9l-.707-.707M4 15H3m16 0h-1m1.464-5.121l-.707-.707M7.636 4.464l-.707-.707m9.9 9.9l-.707-.707M12 5h1m0 8h1m4-4V8m0 8v-1M5 12H4m8-8h1" />
                        </svg>
                    </div>
                    <div>
                        Watch Video
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AboutCard;
