import TrendMain from "./TrendHero";
import { TrendsSection } from "./TrendsDisplay";
import { Footer } from "../Footer";

export default function Trends() {
  return (
    <div className="flex flex-col w-full h-fit">
      <TrendMain />
      <TrendsSection />
      <Footer />
    </div>
  );
}
