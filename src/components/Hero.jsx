import React from "react";
import { Navbar } from "./Navbar";
import { HomeBg } from "./HomeBg";
export const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar />
      <HomeBg />
    </div>
  );
};
