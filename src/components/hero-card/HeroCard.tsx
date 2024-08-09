import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  header: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonLink: string;
  secondaryButtonLink?: string;
  imageUrl: string;
  children?: ReactNode;
  orientation?: "left"|"right";
}

const Hero = ({
  header,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  imageUrl,
  children,
  orientation,
}: HeroProps ) => {
  return (
    <div className="bg-light-gray flex flex-col items-center justify-around md:flex-row border-black">
      <div className="flex-1 flex flex-col items-center justify-center max-w-xl mb-8 md:mb-0">
        <h1 className={`${children ? "text-4xl md:text-5xl font-bolder " : "text-7xl md:text-9xl font-bold"} text-blue-800 mb-4 text-center`}>
          {header}
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          {description}
        </p>
        <div className="flex space-x-4 justify-center">
          <Link href={primaryButtonLink}>
            <button className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition">
              {primaryButtonText}
            </button>
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link href={secondaryButtonLink}>
              <button className="bg-white border border-navy text-navy font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                {secondaryButtonText}
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center max-w-xl mb-8 md:mb-0">
        <img
          src={imageUrl}
          alt="Hero Image"
          className="w-full h-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
