import { Navbar } from "../components/Navbar";
import instagram from "../assets/Vector.png";
import google from "../assets/Icons.png";
import facebook from "../assets/Color- (1).png";

export default function CreateAccount() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Navbar />
      <div className=" flex h-fit flex-col gap-5 w-[90%] md:w-[35%] bg-blue-50 md:px-12 px-5 md:py-8 py-5 justify-center md:justify-start ">
        <h2 className="font-bold text-lg">Sign Up</h2>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="uppercase text-xs font-semibold">
              Email address
            </label>
            <input
              className="outline-none border-none text-xs text-gray-800 p-2"
              id="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="uppercase text-xs font-semibold"
            >
              Password
            </label>
            <input
              className="outline-none border-none text-xs text-gray-800 p-2"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="uppercase text-xs font-semibold"
            >
              Confirm Password
            </label>
            <input
              className="outline-none border-none text-xs text-gray-800 p-2"
              id="password"
              type="password"
              placeholder=" Confirm Your Password"
            />
          </div>

          <div className="w-full flex justify-end text-xs">
            <button className="w-full bg-[#151433] text-gray-300 py-2">
              Sign Up
            </button>
          </div>
          <div className="w-full flex justify-center text-xs text-blue-700">
            <a href="#">sign up with other accounts</a>
          </div>
          <div className="justify-center w-full flex">
            <div className="flex flex-row gap-6 w-[40%] ">
              <img
                src={google}
                className="object-fit size-6 cursor-pointer"
                alt=""
              />
              <img
                src={facebook}
                className="object-fit size-6 cursor-pointer"
                alt=""
              />
              <img
                src={instagram}
                className="object-fit size-6 cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
