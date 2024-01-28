import { EventSummary } from "@/components/EventSummary";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { RegistrationForm } from "@/components/RegistrationForm";
import { RundownEvent } from "@/components/RundownEvent";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-[220px]"></div>
      <EventSummary />
      <div className="h-[120px]"></div>
      <RundownEvent />
      <div className="h-[220px]"></div>
      <RegistrationForm />
      <div className="h-[220px]"></div>
      <Footer />
    </>
  );
}
