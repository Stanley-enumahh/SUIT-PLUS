import blackpiece from "../assets/blackpiece.png";
import blaskpieceMobile from "../assets/blackpieceMobile.png";
import saxepiece from "../assets/saxe piece.png";
import saxepieceMobile from "../assets/saxepieceMobile.png";

export const Hero3 = () => {
  return (
    <div className="w-[90%] md:h-screen h-fit flex items-center justify-between md:flex-row flex-col gap-8 md:gap-0">
      <div className="md:w-[47%] w-[80%] piece h-fit md:h-[80%] flex  md:items-center">
        <div className="flex md:flex-row flex-col md:gap-0 gap-10  justify-between items-center w-full left-[-50px] h-[80%]">
          <div className="h-full overflow-hidden w-full flex items-center">
            <img
              className="h-full md:flex hidden w-[80%] object-cover"
              src={blackpiece}
              alt="man on black suit"
            />
            <img
              className="h-full md:hidden flex w-full object-cover"
              src={blaskpieceMobile}
              alt="man on black suit"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-5 justify-center w-full ">
            <div>
              <p className=" h-[2px] bg-black w-[40px]"></p>
            </div>
            <div></div>
            <div>
              <h1 className="text-2xl md:text-xl font-bold">BLACK PIECE</h1>
            </div>

            <div>
              <button className="bg-[#151433] text-white px-10 md:px-8 py-2 text-sm mb-14">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* element start */}
      <div className="md:w-[47%] w-[80%] md:mt-0 mt-7 piece2 h-fit md:h-[80%] flex  md:items-center">
        <div className="flex md:flex-row flex-col md:gap-0 gap-10  justify-between items-center w-full left-[-50px] h-[80%]">
          <div className="h-full overflow-hidden w-full flex items-center">
            <img
              className="h-full md:flex hidden w-[80%] object-cover"
              src={saxepiece}
              alt="man on black suit"
            />
            <img
              className="h-full md:hidden flex w-full object-cover"
              src={saxepieceMobile}
              alt="man on black suit"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-5 justify-center w-full ">
            <div>
              <p className=" h-[2px] bg-black w-[40px]"></p>
            </div>
            <div></div>
            <div>
              <h1 className="text-2xl md:text-xl font-bold">SAXE PIECE</h1>
            </div>

            <div>
              <button className="bg-[#151433] text-white px-10 md:px-8 py-2 text-sm mb-14">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
