import maskGroup7 from "../../assets/Mask group (9).png";
import maskGroup6 from "../../assets/maskGroup6.png";
import maskGroup5 from "../../assets/maskGroup5.png";

export const EventHero4 = () => {
  return (
    <div className="md:w-full mt-4 md:mt-20 w-[90%] h-hit md:h-[85vh] flex flex-col justify-center items-center">
      <div className="md:w-[88%] w-full md:mt-0 h-full flex flex-col items-center gap-2">
        <div className="flex w-full md:w-[100%] flex-col md:flex-row md:justify-between justify-center items-center gap-10 md:gap-4 md:h-full h-fit">
          <div className="w-[100%] md:w-[400px] h-[100%]  flex flex-col justify-between gap-5">
            <div className="h-[100%] w-full">
              <img
                className="w-full h-full object-cover"
                src={maskGroup7}
                alt="men on blue suit"
              />
            </div>
            <div className="w-full flex flex-col text-center justify-center">
              <h2 className=" font-bold uppercase mt-5  md:text-md text-xl">
                CLASSIC SUITS
              </h2>
              <p className="text-gray-900 text-sm md:text-xs mt-2 capitalize">
                Affordable suit for every body
              </p>
            </div>
          </div>
          <div className="w-[100%] md:w-[400px] h-[100%]  flex flex-col justify-between gap-5">
            <div className="h-[100%] w-full">
              <img
                className="w-full h-full object-cover"
                src={maskGroup6}
                alt="cutton fabric suit"
              />
            </div>
            <div className="w-full flex flex-col text-center justify-center">
              <h2 className=" font-bold uppercase mt-5 md:text-md text-xl">
                100% CUTTON FABRIC
              </h2>
              <p className="text-gray-900 text-sm mt-2 md:text-xs capitalize">
                Affordable suit for every body
              </p>
            </div>
          </div>
          <div className="w-[100%] md:w-[400px] h-[100%]  flex flex-col justify-between gap-5">
            <div className="h-[100%] w-full object-cover">
              <img
                className="w-full h-full object-cover"
                src={maskGroup5}
                alt="men on black suit"
              />
            </div>
            <div className="w-full flex flex-col text-center justify-center">
              <h2 className=" font-bold uppercase mt-5  md:text-md text-xl">
                MEN TEXEDOS
              </h2>
              <p className="text-gray-900 text-sm md:text-xs mt-2 capitalize">
                Affordable suit for every body
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
