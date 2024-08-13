"use client"
import Integration from "@/components/api-integration/Integration";
import CoreFeatures from "@/components/core-features/CoreFeatures";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <div className="pt-[150px]">
        <WhyChooseUs />
        <CoreFeatures />
        <Integration />
      </div>
    </main>
  );
}
