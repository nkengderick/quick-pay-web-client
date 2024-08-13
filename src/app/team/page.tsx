"use client"
import HeaderCard from "@/components/header-card/HeaderCard";
import Team from "@/components/our-team/OurTeam";

export default function Home() {
  return (
    <main>
      <div className="pt-[150px]">
              <HeaderCard title="Our Team" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur." />
              <Team showAll={true} />
         </div>
    </main>
  );
}
