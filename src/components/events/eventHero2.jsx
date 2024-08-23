import maskGroup20 from "../../assets/maskGroup20.png";
import maskGroup21 from "../../assets/Mask group23.png";
import maskGroup16 from "../../assets/Mask group (16).png";
import maskGroup17 from "../../assets/image 39.png";
import maskGoup9 from "../../assets/maskGroup9.png";

export const EventHero2 = () => {
  return (
    // <div className="md:w-[65%] w-[90%] md:mt-0 h-fit md:h-screen flex flex-col items-center gap-2 md:gap-4 mt-1">
    <div className="flex w-full md:w-[90%] lg:w-[80%] mt-10 flex-col md:flex-row md:justify-between justify-center items-center gap-8 md:gap-4  h-fit">
      <div className="w-[95%] md:w-[400px]  h-[535px] flex flex-col justify-between">
        <div className="h-[443px] w-full">
          <img
            className="w-full h-full md:flex hidden object-cover"
            src={maskGroup16}
            alt="men on blue suit"
          />
          <img
            className="w-full h-full flex md:hidden object-cover"
            src={maskGroup17}
            alt="men on blue suit"
          />
        </div>
        <div className="w-full flex flex-col md:items-start items-center justify-center md:justify-start text-center md:text-start">
          <h2 className=" font-bold uppercase flex md:text-md text-xl">
            WEEDING EVENT
          </h2>
          <p className="text-gray-900 text-sm flex md:text-xs">
            Find the perfect Wedding suit to make your special day memorable.
          </p>
        </div>
      </div>
      <div className="w-[95%] md:w-[400px]  h-[535px] flex flex-col justify-between">
        <div className="h-[443px] w-full">
          <img
            className="w-full h-full object-cover"
            src={maskGroup20}
            alt="men on blue suit"
          />
        </div>
        <div className="w-full flex flex-col md:items-start items-center justify-center md:justify-start text-center md:text-start">
          <h2 className=" font-bold uppercase flex md:text-md text-xl">
            DINNER PARTY
          </h2>
          <p className="text-gray-900 text-sm flex md:text-xs">
            Explore our dinner party collection for a polished sophisticated
            appearance.
          </p>
        </div>
      </div>
      <div className="w-[95%] md:w-[400px]  h-[535px] flex flex-col justify-between">
        <div className="h-[443px] w-full">
          <img
            className="w-full h-full md:flex hidden object-cover"
            src={maskGroup21}
            alt="men on blue suit"
          />
          <img
            className="w-ful flex md:hidden h-full object-cover"
            src={maskGoup9}
            alt="men on blue suit"
          />
        </div>
        <div className="w-full flex flex-col md:items-start items-center justify-center md:justify-start text-center md:text-start">
          <h2 className=" font-bold uppercase flex md:text-md text-xl">
            SPECIAL OCCASION
          </h2>
          <p className="text-gray-900 text-sm flex md:text-xs">
            Find the perfect fit for your special occasion
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};
