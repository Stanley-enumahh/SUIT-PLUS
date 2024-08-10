import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [sideBar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sideBar);
  };
  return (
    <div className="w-full flex justify-center items-center h-fit fixed top-0 bg-white z-50">
      <div className="flex flex-row justify-between md:w-[90%] w-[95%] h-full  p-3  items-center">
        <div className="">
          <RxHamburgerMenu className="cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div>
          <h1 className="font-bold">SUITPLUS</h1>
        </div>
        <div>
          <ul className="flex flex-row gap-5 items-center justify-center">
            <li>
              <Link>
                <IoSearchOutline />
              </Link>
            </li>
            <li>
              <Link>
                <FaRegCircleUser />
              </Link>
            </li>
          </ul>
        </div>
        {/* sidebar start*/}
        <div
          className={`absolute top-0 w-full h-screen bg-white text-center left-0 flex flex-col items-center gap-10 transition-all duration-150 ${
            sideBar ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="relative w-[90%] flex items-center justify-center p-3">
            <FaXmark
              onClick={toggleSidebar}
              className="absolute cursor-pointer md:left-2 right-0 md:mt-0 mt-5"
            />
            <h1 className="font-bold md:flex hidden text-xl">SUITPLUS</h1>
          </div>
          <div className="md:mt-0 mt-6">
            <ul className="text-sm flex flex-col gap-8 text-[#191919]">
              <li>
                <Link onClick={toggleSidebar} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={toggleSidebar} to="/trends">
                  Trends
                </Link>
              </li>
              <li>
                <Link
                  to="/eventspage"
                  className="flex flex-row gap-4 items-center justify-center"
                >
                  Events
                  <IoIosArrowDown />
                </Link>
              </li>
              <li>
                <Link to="/customPage">Custom Made</Link>
              </li>
              <li>
                <Link onClick={toggleSidebar} to="/aboutUs">
                  About us
                </Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
              <ul className="mt-8 md:mt-10 flex flex-col gap-4">
                <li className="">
                  <Link onClick={toggleSidebar} to="/Login">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleSidebar} to="/CreateAccount">
                    Create Account
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        {/* sidebar end*/}
      </div>
    </div>
  );
};
