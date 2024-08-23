import display from "../assets/Display.png";

export const CustomComp = () => {
  return (
    <div className="block md:mt-14 md:flex  ">
      <div className="flex md:ms-1 lg:ms-5 pt-10 mt-10 justify-center md:hidden">
        <a href="" className="text-md text-gray-400">
          1. Fabric
        </a>
        <a href="" className="ms-3">
          2. Style
        </a>
        <a href="" className="ms-3 text-md text-gray-400">
          3. Size chart
        </a>
        <a href="" className="ms-3 text-md text-gray-400">
          4. Summary
        </a>
      </div>
      <div className="md:w-[55%]  lg:w-[70%] h-[100%] md:h-[100%]">
        <img
          src={display}
          className="pt-5 w-full object-cover h-full md:h-[55vh] lg:h-[63vh]  justify-center"
        />
      </div>

      <div className="md:w-[45%] lg:w-[50%] md:h-[80%] ">
        <div className="hidden md:block flex md:ms-1 lg:ms- pt-5">
          <a href="" className="ms-3 text-md text-gray-400">
            1. Fabric
          </a>
          <a href="" className="ms-3 text-md text-black">
            2. Style
          </a>
          <a href="" className="ms-3 text-md text-gray-400">
            3. Size chart
          </a>
          <a href="" className="ms-3 text-md text-gray-400">
            4. Summary
          </a>
        </div>
        <div className="ms-5 mt-10 lg:mt-7">
          <p className="text-xm">Choose your style for perfect fit </p>
          <div className="pe-5 mt-5  md:pe-20 lg:pe-22">
            <p className="border-solid border-2 border-black-600 px-3 py-1 md:mt-10">
              Jacket
            </p>
            <p className="border-solid border-2 border-black-600 px-3 py-1 mt-5">
              Waistcoat
            </p>
            <p className="border-solid border-2 border-black-600 px-3 py-1 mt-5">
              Trouser
            </p>
          </div>

          <div className="mt-100vh md:mt-[10vh] lg:mt-[20%]">
            <hr className="bg-black-1000 mt-16 me-5" />
            <div className="flex justify-between mt-5 mb-2 me-5">
              <button className="border justify-center md:justify-start border-[#191919] bg-transparent md:px-7 px-14 md:py-2 lg:py-2 py-4 hover:bg-[#191919] hover:text-white transition-all duration-150">
                Prev
              </button>
              <button className="border border-[#191919] bg-[#191919] text-white md:px-7 px-14 md:py-2 lg:py-0  py-2 lg:me-  hover:bg-transparent hover:text-[#191919] transition-all duration-150">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
