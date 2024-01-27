import { EventSummary } from "@/components/EventSummary";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-[220px]"></div>
      <EventSummary />
    </>
  );
}
