import Link from "next/link";
import { ReactNode } from "react";

export interface HeroProps {
  header: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonLink: string;
  secondaryButtonLink?: string;
  imageUrl?: string | ReactNode;
  children?: ReactNode;
  reverse?: boolean;
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
  reverse,
}: HeroProps) => {
  const hasImage = Boolean(imageUrl);

  return (
    <div className={`flex flex-col py-20 ${hasImage ? 'md:flex-row' : 'md:flex-col'} items-center justify-around border-black ${reverse ? "md:flex-row-reverse" : ""} bg-white dark:bg-gray-900 text-black dark:text-white`}>
      <div
        className={`flex-1 flex flex-col items-center justify-center max-w-xl mb-8 md:mb-0 ${hasImage ? 'md:w-1/2' : 'w-full'} font-dosis`}
      >
        <h1 className={`${children ? "text-4xl md:text-5xl font-semibold" : "text-7xl md:text-9xl font-bold"} mb-4 text-center text-[color:var(--text-color)]`}>
          {header}
        </h1>
        <p className="text-lg mb-6 text-center text-[color:var(--text-color)]">
          {description}
        </p>
        {children && (
          <div className="mt-8 mb-8 w-full">
            {children}
          </div>
        )}
        <div className="flex space-x-4 justify-center">
          <Link href={primaryButtonLink}>
            <button className="bg-[color:var(--background-color)] text-[color:var(--text-color)] font-semibold px-6 py-3 rounded-full hover:bg-[color:var(--primary-color)] transition">
              {primaryButtonText}
            </button>
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link href={secondaryButtonLink}>
              <button className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-[color:var(--text-color)] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                {secondaryButtonText}
              </button>
            </Link>
          )}
        </div>
      </div>
      {hasImage ? (
        <div className="flex-1 flex items-center justify-center max-w-xl mb-8 md:mb-0 md:w-1/2">
          {typeof imageUrl === 'string' ? (
            <img
              src={imageUrl}
              alt="Hero Image"
              className="w-full h-auto max-w-full"
            />
          ) : (
            imageUrl
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Hero;