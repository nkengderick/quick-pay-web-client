"use client"
import HeaderCard from "@/components/header-card/HeaderCard";
import { testimonialsData } from "@/data";
import TestimonialCard from "@/components/testimonials-card/TestimonialCards";

export default function Home() {
  return (
    <main>

      <div className="pt-[150px]">
        <HeaderCard
          title="Testimonials"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur."
        />
        <div className="text-center py-12">
          <HeaderCard title={testimonialsData.header} subtitle={testimonialsData.description} />
          <div className="flex flex-col space-y-8">
            {testimonialsData.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                imageUrl={testimonial.imageUrl}
                quote={testimonial.quote}
                rate={testimonial.rate}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
