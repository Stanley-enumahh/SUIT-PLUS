import TrendBg from "../../assets/TrendImage.png";
import TrendBgMobile from "../../assets/image_27 1 (1).png";
import { Navbar } from "../Navbar";

export default function TrendMain() {
  return (
    <div className="w-full flex flex-col h-fit md:h-screen overflow-hidden">
      <Navbar />
      <TrendHero />
    </div>
  );
}

function TrendHero() {
  return (
    <div className=" bg-[#F5F5F7] flex justify-center h-[420px] items-center md:h-[100%]">
      <div className="flex flex-row justify-between items-end md:items-center w-[95%] md:w-[75%] h-[90%] md:mb-0 mb-8 mt-20 overflow-hidden">
        <div className="w-[50%] hidden  md:flex h-[95%]">
          <img
            className="object-cover h-full"
            src={TrendBg}
            alt="Man on blue suit"
          />
        </div>
        <div className="w-[70%] items-center justify-center flex md:hidden h-[85%] md:h-[95%]">
          <img
            className="object-cover h-full w-full"
            src={TrendBgMobile}
            alt="Man on blue suit"
          />
        </div>

        <div className="md:h-full  h-[75%] flex items-center justify-center md:w-[70%]">
          <h1 className="text-2xl md:text-4xl mb-16 md:mb-20 font-bold md:leading-normal">
            SUIT <br /> COLLECTION
          </h1>
        </div>
      </div>
    </div>
  );
}
