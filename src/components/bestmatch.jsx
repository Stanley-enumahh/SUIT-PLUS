import weddingpartyImg from "../assets/wedding party.png";
import customsuitimg from "../assets/custom suits.png";
import cooperateImg from "../assets/coorperate events.png";

export const BestMatch = () => {
  return (
    <div className="md:w-[80%] w-[90%] md:mt-0 h-fit md:h-screen flex flex-col items-center gap-2 md:gap-4">
      <div className="text-center mt-8">
        <h1 className="font-bold md:text-xl text-2xl">BEST MATCH</h1>
        <p className="text-sm">
          Explore the best match of suits tailored to specific events
        </p>
      </div>
      <div className="flex w-full md:w-[90%] flex-col md:flex-row md:justify-between justify-center items-center gap-8 md:gap-4 md:h-[400px] h-fit mt-[40px]">
        <div className="w-[95%] md:w-[300px] h-[395px] flex flex-col justify-between">
          <div className="h-[93%] w-full">
            <img
              className="w-full h-full object-cover"
              src={weddingpartyImg}
              alt="men on blue suit"
            />
          </div>
          <div className="w-full flex justify-center">
            <h2 className=" font-bold uppercase md:text-md text-xl">
              Wedding PARTY
            </h2>
          </div>
        </div>
        <div className="w-[95%] md:w-[300px] h-[395px] flex flex-col justify-between">
          <div className="h-[90%] w-full">
            <img
              className="w-full h-full object-cover"
              src={customsuitimg}
              alt="men on blue suit"
            />
          </div>
          <div className="w-full flex justify-center">
            <h2 className=" font-bold uppercase md:text-md text-xl">
              Custom suits
            </h2>
          </div>
        </div>
        <div className="w-[95%] md:w-[300px] h-[395px] flex flex-col justify-between md:mb-0 mb-8">
          <div className="h-[90%] w-full">
            <img
              className="w-full h-full object-cover"
              src={cooperateImg}
              alt="men on blue suit"
            />
          </div>
          <div className="w-full flex justify-center">
            <h2 className=" font-bold uppercase md:text-md text-xl">
              Corporate event
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
