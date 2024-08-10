import { Navbar } from "../components/Navbar";
import { CustomComp } from "../components/customComponent";

export default function CustomPage() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-8">
      <Navbar />
      <CustomComp />
    </div>
  );
}
