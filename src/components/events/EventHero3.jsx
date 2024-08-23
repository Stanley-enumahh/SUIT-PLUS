import image25 from "../../assets/image 25.png";
import hero3 from "../../assets/maskGroup22.png";

export const EventHero3 = () => {
  return (
    <div className="flex gap-16 flex-col">
      <div className="flex md:flex-row flex-col  gap-7 justify-between items-center md:h-screen h-fit">
        <div className="md:w-[90%] w-full justify-center md:h-full flex items-center">
          <img
            className="md:w-[80%] w-[90%]  h-full object-contain"
            src={image25}
            alt="Man with red suit"
          />
        </div>
        <div className="md:w-[80%] w-full h-full md:text-start text-center md:justify-center justify-start flex flex-col md:p-24 px-8 md:gap-4 gap-3">
          <div className=" flex md:justify-start justify-center">
            <p className="h-[3px] md:w-[60px] w-[50px] bg-black"></p>
          </div>
          <h1 className="uppercase font-bold text-sm md:text-xl">
            DRESS LIKE A BOSS
          </h1>
          <p className=" md:text-start text-center text-xs md:text-sm">
            Discover the art of dressing like a boss with our curated collection
            of premium suits tailored to elevate your professional wardrobe and
            reflect your personal style.
          </p>
          <div className="w-full flex justify-center">
            <button className="mt-6 md:mt-6 border border-[#191919] bg-transparent md:px-5 px-8 md:py-2  py-1 hover:bg-[#151433] hover:text-white transition-all duration-150">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col md:gap-10 gap-7 justify-between items-center md:h-screen h-fit">
        <div className="md:w-[90%] w-full justify-center md:h-full flex items-center">
          <img
            className="md:w-[80%] w-[90%]  h-full object-contain"
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
            LOREM IPSUM
          </h1>
          <p className=" md:text-start text-center text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            voluptatum autem aliquid, asperiores facere reiciendis dignissimos
            beatae nemo suscipit delectus voluptates dolores aut, odit, eum quis
            quod voluptate sint error?
          </p>
          <div className="w-full flex justify-center mb-7">
            <button className="mt-6 md:mt-14 border border-[#191919] bg-transparent md:px-5 px-8 md:py-2  py-1 hover:bg-[#151433] hover:text-white transition-all duration-150">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
