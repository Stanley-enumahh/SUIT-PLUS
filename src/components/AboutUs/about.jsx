import { Navbar } from "../Navbar";
import { LookBook } from "../ViewBook";
import { Footer } from "../Footer";

export default function AboutUs() {
  return (
    <div className="w-full h-fit flex-col">
      <AboutHero />
      <AboutDetails />
      <LookBook />
      <Footer />
    </div>
  );
}

const AboutHero = () => {
  return (
    <div className="flex flex-col h-fit md:h-screen w-full">
      <Navbar />
      <div className="w-full h-[583px] mt-[50px] bg-[#151433] justify-center flex items-center">
        <h1 className="text-white md:text-3xl text-5xl text-center  font-bold">
          GET TO <br className="md:hidden flex" /> KNOW US
        </h1>
      </div>
    </div>
  );
};

const AboutDetails = () => {
  return (
    <div className="flex flex-col h-fit md:h-[600px]  w-full items-center justify-center">
      <div className="md:w-[70%] md:mt-0 mt-[50px] w-[90%] flex flex-col md:gap-11 gap-7 text-start">
        <div className="w-full flex justify-center md:justify-start">
          <h1 className=" text-xl font-extrabold mdLfont-bold">
            ABOUT SUIT PLUS
          </h1>
        </div>
        <div className="flex flex-col gap-8 text-[#4B4A4A] text-lg border-t border-gray-700 py-4 md:pt-0 md:border-none">
          <p>
            SUIT PLUS is your ultimate destination for premium men's suits
            tailored to address men's fashion needs and style preferences.
          </p>

          <p>
            At SUIT PLUS, we create an experience with our finely fitted and
            customized suits to inspire and match your unique style and event,
            leaving a lasting impression at your convenience.
          </p>
          <p>
            Our meticulously curated collection showcases a wide range of suits
            crafted from the finest quality fabrics and designed to perfection.
            From timeless classics to modern trends, we offer an extensive
            selection of styles, colors, and fits to cater to every taste and
            occasion.
          </p>
        </div>
      </div>
    </div>
  );
};
