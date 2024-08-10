import { Navbar } from "./Navbar";
import HomeBgImage from "../assets/Mask group.jpg";
import HomeBgImageMobile from "../assets/image 19.png";
import playIcon from "../assets/Polygon 1.png";
const HomeBg = () => {
  return (
    <div className="w-full md:h-full h-[65%]">
      <div className="absolute w-full h-full flex justify-center items-center">
        <img
          className="p-4 rounded-full bg-[#D1D1D1] w-[70px]"
          src={playIcon}
        />
      </div>
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
