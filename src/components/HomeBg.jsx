import React from "react";
import HomeBgImage from "../assets/Mask group.jpg";
import HomeBgImageMobile from "../assets/image 19.png";
export const HomeBg = () => {
  return (
    <div className="w-full md:h-full h-[65%]">
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
