"use client"
import FAQSection from "@/components/faqs-section/Faqs";
import HeaderCard from "@/components/header-card/HeaderCard";
import Pricing from "@/components/our-pricing/Pricing";


export default function Home() {
  return (
    <main>
      <div className="pt-[150px]">
              <HeaderCard title="Pricing" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur." />
              <Pricing />
              <FAQSection />
      </div>
    </main>
  );
}
