import Hero from "@/components/hero-card/HeroCard";
import { whyChooseUsData } from "@/data";


const ChooseCard = () => {
  return (
    <div className="flex gap-5 max-w-50">
      {whyChooseUsData.whyUs.map(why => (
        <div className={`max-w-xl p-6 rounded-lg border shadow-md flex flex-col justify-between bg-blue-100`}>
          <>
            <h3 className="text-2xl font-bold mb-4">{why.title}</h3>
            <p className="mb-6">{why.description}</p>
          </>
        </div>
      ))
      }
    </div>
  )
}

interface WhyChooseUsProps {
  reverse?: boolean;
}

const WhyChooseUs = ({ reverse = false }: WhyChooseUsProps) => {
  return (
    <>
      <Hero
        header={whyChooseUsData.header}
        description={whyChooseUsData.description}
        primaryButtonText={whyChooseUsData.primaryButtonText}
        secondaryButtonText={whyChooseUsData.secondaryButtonText}
        primaryButtonLink={whyChooseUsData.primaryButtonLink}
        secondaryButtonLink={whyChooseUsData.secondaryButtonLink}
        imageUrl={whyChooseUsData.imageUrl}
        children={<ChooseCard />}
        reverse={reverse}
      />
    </>
  );
};

export default WhyChooseUs;
