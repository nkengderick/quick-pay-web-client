"use client"
import AllFaqs from "@/components/all-faqs/AllFaqs";
import Hero from "@/components/hero-card/HeroCard";

export default function Home() {
  return (
    <main>

      <div className="pt-[150px]">
        <Hero
          header="Frequently Asked Questions"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem deleniti harum sint porro atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem deleniti harum sint porro atque!"
          primaryButtonText="More FAQs"
          primaryButtonLink="/faqs"
          children={<AllFaqs />}
        />
      </div>
    </main>
  );
}
