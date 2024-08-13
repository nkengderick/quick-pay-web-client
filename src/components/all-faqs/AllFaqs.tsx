import FAQCard from "../faqs-card/FAQCard";
import { faqData } from "@/data";

const AllFaqs = () => {
    // Get unique categories
    const categories = Array.from(new Set(faqData.map(faq => faq.category)));

    return (
        <div>
            {categories.map((category) => (
                <div key={category} className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">{category}</h2>
                    <p className="text-xl text-gray-500 mb-2">{faqData.filter(faq => faq.category === category)[1].description}</p>
                    <FAQCard faqs={faqData.filter(faq => faq.category === category)} />
                </div>
            ))}
        </div>
    );
}

export default AllFaqs;
