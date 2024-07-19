import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

export const Hero2 = () => {
  return (
    <div className="flex gap-16 flex-col">
      <div className="flex md:flex-row flex-col md:gap-10 gap-7 justify-between items-center md:h-screen h-fit">
        <div className="md:w-[50%] w-full md:h-full flex items-center">
          <img
            className="md:w-[90%] w-full md:h-[90%] h-full object-cover"
            src={hero2}
            alt="Man with red suit"
          />
        </div>
        <div className="md:w-[50%] w-full h-full md:text-start text-center md:justify-center justify-start flex flex-col md:p-24 px-8 md:gap-4 gap-3">
          <div className=" flex md:justify-start justify-center">
            <p className="h-[3px] md:w-[60px] w-[50px] bg-black"></p>
          </div>
          <h1 className="uppercase font-bold text-sm md:text-xl">
            We take suiting stress out of the picture.
          </h1>
          <p className=" md:text-start text-center text-xs md:text-sm">
            Get Exposed to a wide variety of Occasion Specific Suit Collections
            and Make your Suiting Journey easier than ever.....
          </p>
          <div className="w-full flex justify-center">
            <button className="mt-6 md:mt-14 border border-[#191919] bg-transparent md:px-5 px-8 md:py-2  py-1 hover:bg-[#151433] hover:text-white transition-all duration-150">
              SUIT UP
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col md:gap-10 gap-7 justify-between items-center md:h-screen h-fit">
        <div className="md:w-[50%] w-full md:h-full flex items-center justify-end">
          <img
            className="md:w-[90%] w-full md:h-[90%] h-full object-cover"
            src={hero3}
            alt="Couple dressedy
             for wedding"
          />
        </div>
        <div className="md:w-[50%] w-full h-full md:text-start text-center md:justify-center justify-start flex flex-col md:p-24 px-8 md:gap-4 gap-3">
          <div className=" flex md:justify-start justify-center w-full">
            <p className="h-[3px] md:w-[60px] w-[50px] bg-black"></p>
          </div>
          <h1 className="uppercase font-bold text-sm md:text-xl">
            SUITING UP FOR THAT WEDDING ?
          </h1>
          <p className=" md:text-start text-center text-xs md:text-sm">
            Explore our wide variety of collections and designs, from world
            class designers and be the center of attraction in any wedding event
          </p>
          <div className="w-full flex justify-center mb-7">
            <button className="mt-6 md:mt-14 border border-[#191919] bg-transparent md:px-5 px-8 md:py-2  py-1 hover:bg-[#151433] hover:text-white transition-all duration-150">
              SUIT UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
