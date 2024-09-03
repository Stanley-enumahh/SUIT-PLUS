import { Navbar } from "./Navbar";
import HomeBgImage from "../assets/Mask group.jpg";
import HomeBgImageMobile from "../assets/image 19.png";

const HomeBg = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col md:h-full h-[65%]">
      <img
        className="object-cover w-full h-full md:flex hidden"
        src={HomeBgImage}
        alt="Loading"
      />
      <img
        className="object-cover w-full h-full md:hidden flex"
        src={HomeBgImageMobile}
        alt="Loading"
      />
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="w-full md:h-screen h-fit overflow-hidden mt-10">
      <Navbar />
      <HomeBg />
    </div>
  );
};
