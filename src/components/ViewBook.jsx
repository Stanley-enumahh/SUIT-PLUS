import viewBookImg from "../assets/viewBook.png";
import viewBookMobile from "../assets/lookbookmobile.png";

export const LookBook = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] flex justify-center items-center">
      <div className="flex relative w-[90%]">
        <div className="w-full h-full overflow-hidden">
          <img
            className="h-full hidden md:flex w-full object-cover"
            src={viewBookImg}
            alt="loading"
          />
          <img
            className="h-full flex md:hidden w-full object-cover"
            src={viewBookMobile}
            alt="loading"
          />
        </div>
        <div className="absolute w-full h-full flex justify-center items-center">
          <button className="border hover:bg-[#151433] hover:text-white transition-all duration-150 hover:border-none border-white px-7 md:px-5 py-3 text-white text-xs">
            View Look Book
          </button>
        </div>
      </div>
    </div>
  );
};
