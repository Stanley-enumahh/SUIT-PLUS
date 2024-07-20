import { Hero } from "../components/Hero";
import { Hero2 } from "../components/hero2";
import { Hero3 } from "../components/hero3";
import { BestMatch } from "../components/bestmatch";

export default function HomePage() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-8">
      <Hero />
      <Hero2 />
      <Hero3 />
      <BestMatch />
    </div>
  );
}
