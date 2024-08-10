import maskGroup1 from "../../assets/maskGroup1.png";
import maskGroup8 from "../../assets/maskGroup8.png";

export const EventHero1 = () => {
  return (
    <>
      <div className="hidden md:block bg-gradient-to-tl from-white-900 to-white-900 md:h-[50vh] lg:h-[75vh] w-[100%] relative">
        <img
          src={maskGroup1}
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="ps-20 mt-32 font-bold">
          <h1 className="text-white text-3xl lg:text-4xl text-slate-900 md:pt-20 mt-20 text-start">
            {" "}
            PERFECT SUIT
          </h1>
          <h1 className="text-white text-3xl lg:text-4xl pt-3 lg:text-slate-900 font-light text-start">
            FOR YOUR NEXT EVENT
          </h1>
        </div>
      </div>

      <div className="md:hidden bg-gradient-to-tl from-white-900 to-white-900 h-96 w-full relative">
        <img
          src={maskGroup8}
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div>
          <h1 className="text-white text-2xl text-slate-300 pt-20 mt-20 text-center">
            {" "}
            PERFECT SUIT
          </h1>
          <h1 className="text-white text-slate-300 text-2xl font-light text-center">
            {" "}
            FOR YOUR NEXT EVENT
          </h1>
        </div>
      </div>
    </>
  );
};
