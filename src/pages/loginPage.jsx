import { Navbar } from "../components/Navbar";

export default function Login() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Navbar />
      <div className=" flex h-[70%] flex-col gap-5 w-[35%] bg-blue-50 px-12 py-8">
        <h2 className="font-bold text-lg">Account Login</h2>
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
          <div className="w-full flex justify-end text-xs text-blue-700">
            <a href="#">forgot password</a>
          </div>
          <div className="w-full flex justify-end text-xs">
            <button className="w-full bg-[#151433] text-gray-300 py-2">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
