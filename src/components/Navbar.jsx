import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center h-fit fixed top-0 bg-white">
      <div className="flex flex-row justify-between md:w-[80%] w-[90%] h-full  p-3  items-center">
        <div className="">
          <RxHamburgerMenu />
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
      </div>
    </div>
  );
};
