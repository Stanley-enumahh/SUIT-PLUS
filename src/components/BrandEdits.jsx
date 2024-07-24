import edit1 from "../assets/edits1.png";
import edit2 from "../assets/edits2.png";
import edit3 from "../assets/edits3.png";

export const BrandEdits = () => {
  return (
    <div className=" w-full bg-[#D9D9D9] h-fit flex justify-center items-center">
      <div className="w-full flex flex-col gap-6 md:gap-10 h-full justify-center items-center">
        <div className="md:mt-12 mt-8">
          <h1 className="font-bold">BRAND EDITS</h1>
        </div>
        <div className="flex flex-row gap-4 h-full w-full items-center justify-center">
          <div className="relative w-[50%] md:w-[35%] overflow-hidden h-full  items-center justify-center">
            <div className="absolute w-full h-full top-0 flex justify-center items-center">
              <p className="text-white text-xl md:font-normal font-bold md:text-lg">
                Dein Fit
              </p>
            </div>
            <div className="w-full h-full object-cover">
              <img src={edit1} alt="" />
            </div>
          </div>
          <div className="relative w-[50%] md:w-[35%] overflow-hidden h-full  items-center justify-center">
            <div className="absolute w-full h-full top-0 flex justify-center items-center">
              <p className="text-white text-xl md:font-normal font-bold">New</p>
            </div>
            <div className="w-full h-full object-cover">
              <img src={edit2} alt="" />
            </div>
          </div>
          <div className="relative w-[35%] md:flex hidden overflow-hidden h-full  items-center justify-center">
            <div className="absolute w-full h-full top-0 flex justify-center items-center">
              <p className="text-white">Custom Suits</p>
            </div>
            <div className="w-full h-full object-cover">
              <img src={edit3} alt="Custom Suits" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
