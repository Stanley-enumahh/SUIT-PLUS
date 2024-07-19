import { Hero } from "../components/Hero";
import { Hero2 } from "../components/hero2";

export default function HomePage() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-8">
      <Hero />
      <Hero2 />
    </div>
  );
}
