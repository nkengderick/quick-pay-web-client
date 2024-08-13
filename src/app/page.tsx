"use client"
import AllFaqs from "@/components/all-faqs/AllFaqs";
import Integration from "@/components/api-integration/Integration";
import CoreFeatures from "@/components/core-features/CoreFeatures";
import FAQSection from "@/components/faqs-section/Faqs";
import Footer from "@/components/footer/Footer";
import HeaderCard from "@/components/header-card/HeaderCard";
import Hero from "@/components/hero-card/HeroCard";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import OurMainCatch from "@/components/our-main-catch/OurMainCatch";
import Pricing from "@/components/our-pricing/Pricing";
import AboutCard from "@/components/slogan/AboutCard";
import Slogan from "@/components/slogan/Slogan";
import StatsCard from "@/components/slogan/StatsCard";
import Testimonials from "@/components/testimonials-section/Testimonials";
import WhatWeAre from "@/components/what-we-are-card/WhatWeAre";
import WhereWeHaveGone from "@/components/where-we-hane-gone/WhereWeHaveGone";
import Team from "@/components/our-team/OurTeam";
import { useState } from "react";
import ContactUsForm from "@/components/contact-us-form/ContactUsForm";
import ContactUSInfo from "@/components/contact-us-info/ContactUsInfo";
import Location from "@/components/our-head-quarters/Location";
import { testimonialsData } from "@/data";
import TestimonialCard from "@/components/testimonials-card/TestimonialCards";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  return (
    <main>

      <div className="pt-[150px]">


        {/* Default Tab or Home tab clicked */
          activeSection === 'home' && (
            <>
              <Slogan />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "2em",
                  flexWrap: "wrap",
                  padding: "2em",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AboutCard classes="border-blue-300 h-72 transition-all duration-500" />
                <StatsCard classes="h-72" />
              </div>
              <OurMainCatch />
              <HowItWorks reverse />
              <WhyChooseUs />
              <Pricing reverse/>
              <Testimonials />
              <FAQSection/>
            </>
          )
        }


        {/*Faqs Tab Click */
          activeSection === 'faqs' && (
            <>
              <Hero
                header="Frequently Asked Questions"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem deleniti harum sint porro atque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem deleniti harum sint porro atque!"
                primaryButtonText="More FAQs"
                primaryButtonLink="/faqs"
                children={<AllFaqs />}
              />
            </>
          )
        }

        {/*Features Tab Click */
          activeSection === 'features' && (
            <>
              <WhyChooseUs />
              <CoreFeatures />
              <Integration />
            </>
          )
        }

        {/*About Tab Click */
          activeSection === 'about us' && (
            <>
              <WhatWeAre />
              <OurMainCatch />
              <Integration />
              <HowItWorks reverse/>
              <WhereWeHaveGone />
              <Team showAll={false} />
              <Testimonials />
            </>
          )
        }

        {/*team Tab Click */
          activeSection === 'team' && (
            <>
              <HeaderCard title="Our Team" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur." />
              <Team showAll={true} />
            </>
          )
        }

        {/*About Tab Click */
          activeSection === 'pricing' && (
            <>
              <HeaderCard title="Pricing" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur." />
              <Pricing />
              <FAQSection />
            </>
          )
        }

        {/*Testimonials Tab Click */}
        {activeSection === 'testimonials' && (
          <>
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
          </>
        )}


        {/*Contact Us Tab Click */
          activeSection === 'contact us' && (
            <>
              <HeaderCard title="Contact Us" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur." />
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Our Locations</h2>
                <Location locationIndex={0} />
                <Location locationIndex={1} />
                <Location locationIndex={2} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-900 text-white">
                <ContactUSInfo />
                <ContactUsForm />
              </div>
            </>
          )
        }

      </div>

      <Footer />
    </main>
  );
}
