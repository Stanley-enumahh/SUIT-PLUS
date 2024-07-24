import { IoIosStar } from "react-icons/io";

export const Reviews = () => {
  return (
    <div className="w-full h-fit md:h-[500px] flex justify-center items-center">
      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] justify-between h-full md:h-[70%] md:items-center md:gap-0 gap-8">
        {/* left side start */}
        <div className="flex flex-col justify-between md:h-full h-fit w-full  md:w-[20%]">
          <div>
            <h1 className="font-bold text-xl md:text-2xl">
              Unfiltered <br /> Client Reviews
            </h1>
          </div>
          <div className="md:flex hidden flex-col gap-2">
            <p>100,000+</p>
            <p className="text-sm">5 - Star Reviews</p>
            <p className="flex flex-row gap-2">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </p>
          </div>
        </div>
        {/* left side end */}

        {/* right side start */}
        <div className=" md:w-[70%] w-full h-full flex flex-col md:flex-col justify-between md:border-none border-t border-black md:pt-0 pt-4 md:gap-12 gap-7">
          <div className="h-fit md:h-[30%] w-[86%] flex flex-col md:flex-row md:gap-0 gap-4 md:justify-between items-center md:border-t border-black">
            <div className="w-full flex flex-col items-start gap-1 md:gap-3">
              <h1 className="text-sm md:text-xs font-bold">
                “Everything fit perfectly”
              </h1>
              <p className="text-sm md:text-xs text-gray-600">
                1 hour ago from Megamond, Lagos State
              </p>
            </div>
            <div className="w-full justify-center md:w-[50%] flex flex-col gap-2 md:gap-4">
              <h1 className="text-sm md:text-xs font-bold">
                “A perfect fit out of box. I love all the customizable details.
                Well worth the cost.”
              </h1>
              <p className="text-xs text-gray-600">
                1 hour ago from Gitsu, Abuja
              </p>
            </div>
          </div>

          <div className="h-fit md:h-[30%] w-[86%] flex flex-col md:flex-row md:gap-0 gap-4 md:justify-between items-center md:border-t border-black">
            <div className="w-full flex flex-col items-start gap-1 md:gap-3">
              <h1 className="text-sm md:text-xs font-bold">
                “Everything fit perfectly”
              </h1>
              <p className="text-sm md:text-xs text-gray-600">
                1 hour ago from Megamond, Lagos State
              </p>
            </div>
            <div className="w-full justify-center md:w-[50%] flex flex-col gap-2 md:gap-4">
              <h1 className="text-sm md:text-xs font-bold">
                “A perfect fit out of box. I love all the customizable details.
                Well worth the cost.”
              </h1>
              <p className="text-xs text-gray-600">
                1 hour ago from Gitsu, Abuja
              </p>
            </div>
          </div>
          <div className="h-fit md:h-[30%] w-[86%] flex flex-col md:flex-row md:gap-0 gap-4 md:justify-between items-center md:border-t border-black">
            <div className="w-full flex flex-col items-start gap-1 md:gap-3">
              <h1 className="text-sm md:text-xs font-bold">
                “Everything fit perfectly”
              </h1>
              <p className="text-sm md:text-xs text-gray-600">
                1 hour ago from Megamond, Lagos State
              </p>
            </div>
            <div className="w-full justify-center md:w-[50%] flex flex-col gap-2 md:gap-4">
              <h1 className="text-sm md:text-xs font-bold">
                “A perfect fit out of box. I love all the customizable details.
                Well worth the cost.”
              </h1>
              <p className="text-xs text-gray-600">
                1 hour ago from Gitsu, Abuja
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
