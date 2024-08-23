export const EventHero5 = () => {
  return (
    <div className="h-[70vh] w-full justify-center md:px-20 mt-5 md:mt-0 gap-12 md:gap-20 items-center md:flex-row flex-col flex md:justify-between">
      <div className="md:w-[50%] w-[90%] h-[45%] md:h-[75%] justify-center items-center flex bg-[#151433]">
        <h1 className="text-white text-3xl font-bold text-center">SUITPLUS</h1>
      </div>
      <div className="md:w-[50%] w-[90%] md:h-[75%] flex items-center">
        <div className=" w-full">
          <h2 className=" font-bold uppercase md:text-md text-xl">
            BOOK A CONSULTATION
          </h2>
          <p className="md:w-[50%] w-full text-xs md:text-start pt-5">
            Book an appointment today and discover a tailored suit that commands
            respect and confidence
          </p>

          <div className="w-full md:mt-6 mt-3 flex md:mb-0 justify-start">
            <button className="mt-4 md:mt-8 border justify-center md:justify-start border-[#191919] bg-[#151433] text-white md:px-7 px-8 md:py-2  py-3 hover:bg-transparent hover:text-[#191919] text-sm transition-all duration-150">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
