import React from "react";
import { Navbar } from "./Navbar";
import { HomeBg } from "./HomeBg";
export const Hero = () => {
  return (
    <div className="w-full md:h-screen h-fit overflow-hidden mt-10">
      <Navbar />
      <HomeBg />
    </div>
  );
};
