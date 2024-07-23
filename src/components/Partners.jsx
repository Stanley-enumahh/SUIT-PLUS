import partner1 from "../assets/image 15.png";
import partner2 from "../assets/image 16.png";
import partner3 from "../assets/image 17.png";
import partner4 from "../assets/image 18.png";

export const Partners = () => {
  return (
    <div className="w-full h-full md:h-[350px] bg-[#151433] flex justify-center items-center ">
      <div className="w-[80%] md:w-[50%] flex gap-10 flex-col mb-14 mt-10 md:mt-0 m:mb-0">
        <div>
          <h1 className="uppercase text-white text-lg md:font-normal font-semibold md:text-2xl text-center">
            “Proper Cloth has become a go-to source for made-to-measure shirts
            for even the most discerning menswea customer.”
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 items-center justify-center">
          <img src={partner1} alt="partner1" />
          <img src={partner2} alt="partner2" />
          <img src={partner3} alt="partner3" />
          <img src={partner4} alt="partner4" />
        </div>
      </div>
    </div>
  );
};
