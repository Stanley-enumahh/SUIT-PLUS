import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Footer = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  function toggleDropDown() {
    setDropDown(!dropDown);
  }
  function toggleDropDown2() {
    setDropDown2(!dropDown2);
  }
  function toggleDropDown3() {
    setDropDown3(!dropDown3);
  }
  return (
    <div className="w-full h-fit md:h-[350px] justify-center md:justify-end flex-col gap-6 md:gap-16 flex items-center bg-[#151433] text-white ">
      <div className="w-[90%] flex flex-col-reverse md:flex-row justify-between">
        <div className="w-full md:w-[23%] flex flex-col gap-2 mt-8 md:mt-0">
          <h1 className="font-bold">SuitPlus</h1>
          <div>
            <ul>
              <li className="text-sm flex flex-col md:gap-8 text-gray-400">
                <p>No 4 Marja Close 2 Abuja</p>
                <p>+2349099653136</p>
                <p>Instagram Suit-plus</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  w-full md:w-[76%] flex-col md:flex-row justify-end items-end">
          <ul className="md:grid flex flex-col md:gap-0 gap-6 justify-start w-full md:w-fit md:grid-cols-4 ">
            <li className="flex flex-col gap-4 w-full md:mt-0 mt-6 md:hidden  md:w-fit">
              <h1 className="text-sm">Join our Mailing List </h1>
              <div className="flex flex-col gap-2 text-gray-400">
                <p className="text-xs">Sign up for updates and promotions</p>
                <input
                  className="border bg-transparent text-sm px-2 py-1 border-gray-400 outline-none"
                  type="email"
                  placeholder="email"
                  id=""
                />
              </div>
            </li>
            <li className="flex relative border-b transition-all duration-150 md:border-none border-t border-gray-700 flex-row justify-between md:justify-normal  md:p-0 py-2 gap-4 w-full">
              <div className="flex flex-col gap-3 transition-all duration-150">
                <h1 className="sm">Company</h1>
                <div
                  className={` md:h-fit md:flex transition-all duration-150 w-full flex-col overflow-hidden gap-2 text-xs text-gray-400 ${
                    dropDown ? "h-fit top-8" : "h-0"
                  }`}
                >
                  <p>About Us</p>
                  <p>Our look Book</p>
                  <p>Customer Reviews</p>
                </div>
              </div>

              <p onClick={toggleDropDown} className="md:hidden flex mr-8">
                <MdKeyboardArrowDown size={30} />
              </p>
            </li>
            <li className="flex relative border-b transition-all duration-150 md:border-none border-t border-gray-700 flex-row justify-between md:justify-normal  md:p-0 py-2 gap-4 w-full">
              <div className="flex flex-col gap-3 transition-all duration-150">
                <h1 className="sm">Collections</h1>
                <div
                  className={` md:h-fit md:flex transition-all duration-150 w-full flex-col overflow-hidden gap-2 text-xs text-gray-400 ${
                    dropDown2 ? "h-fit top-8" : "h-0"
                  }`}
                >
                  <p>Suits</p>
                  <p>Tuxedos</p>
                  <p> Pants</p>
                  <p>Brands</p>
                </div>
              </div>

              <p onClick={toggleDropDown2} className="md:hidden flex mr-8">
                <MdKeyboardArrowDown size={30} />
              </p>
            </li>

            <li className="flex relative border-b transition-all duration-150 md:border-none border-t border-gray-700 flex-row justify-between md:justify-normal  md:p-0 py-2 gap-4 w-full">
              <div className="flex flex-col gap-3 transition-all duration-150">
                <h1 className="sm">Support</h1>
                <div
                  className={` md:h-fit md:flex transition-all duration-150 w-full flex-col overflow-hidden gap-2 text-xs text-gray-400 ${
                    dropDown3 ? "h-fit top-8" : "h-0"
                  }`}
                >
                  <p>FAQ</p>
                  <p>Contact Us</p>
                  <p>Perfect Fit Gurantee</p>
                  <p>Return & Remake Policy</p>
                </div>
              </div>

              <p onClick={toggleDropDown3} className="md:hidden flex mr-8">
                <MdKeyboardArrowDown size={30} />
              </p>
            </li>

            <li className=" flex-col gap-4 w-full md:flex hidden md:w-fit">
              <h1 className="text-sm">Join our Mailing List </h1>
              <div className="flex flex-col gap-2 text-gray-400">
                <p className="text-xs">Sign up for updates and promotions</p>
                <input
                  className="border bg-transparent text-sm px-2 py-1 border-gray-400 outline-none"
                  type="email"
                  placeholder="email"
                  id=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-[90%] text-sm mb-6 text-gray-400">
        <p>Copyright &copy; {new Date().getFullYear()}, SuitPlus</p>
      </div>
    </div>
  );
};
