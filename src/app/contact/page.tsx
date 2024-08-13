"use client"
import ContactUsForm from "@/components/contact-us-form/ContactUsForm";
import ContactUSInfo from "@/components/contact-us-info/ContactUsInfo";
import Location from "@/components/our-head-quarters/Location";
import HeaderCard from "@/components/header-card/HeaderCard";


export default function Home() {

  return (
    <main>
      <div className="pt-[150px]">
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
      </div>
    </main>
  );
}
