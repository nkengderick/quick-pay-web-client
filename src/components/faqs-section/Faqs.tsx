import Hero from "@/components/hero-card/HeroCard";
import FAQCard from "../faqs-card/FAQCard";
import { faqData } from "@/data";

const PopularFaqs = () => {
  return (
    <div>
      <FAQCard faqs={faqData.filter(faq => faq.category === 'Popular')} />
    </div>
  )
}

interface FAQSectionProps {
  reverse?: boolean;
}

const FAQSection = ({ reverse = false }: FAQSectionProps) => {
  return (
    <Hero
      header="Frequently Asked Questions"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem deleniti harum sint porro atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem deleniti harum sint porro atque!"
      primaryButtonText="More FAQs"
      primaryButtonLink="/faqs"
      imageUrl={<PopularFaqs />}
      reverse={reverse}
    />
  );
};

export default FAQSection;
