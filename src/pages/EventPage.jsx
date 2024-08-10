import { Navbar } from "../components/Navbar";
import { EventHero1 } from "../components/events/eventHero1";
import { EventHero2 } from "../components/events/eventHero2";
import { EventHero3 } from "../components/events/EventHero3";
import { EventHero4 } from "../components/events/eventHero4";
import { EventHero5 } from "../components/events/eventHero5";
import { Footer } from "../components/Footer";

export default function EventPage() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-8">
      <Navbar />
      <EventHero1 />
      <EventHero2 />
      <EventHero3 />
      <EventHero4 />
      <EventHero5 />
      <Footer />
    </div>
  );
}
