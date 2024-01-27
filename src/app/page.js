import { EventSummary } from "@/components/EventSummary";
import { HeroSection } from "@/components/HeroSection";
import { RundownEvent } from "@/components/RundownEvent";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-[220px]"></div>
      <EventSummary />
      <div className="h-[120px]"></div>
      <RundownEvent />
    </>
  );
}
