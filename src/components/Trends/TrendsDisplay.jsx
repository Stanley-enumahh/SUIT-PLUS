import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import trending1Img from "../../assets/Mask group (4).png";
import trending2Img from "../../assets/Mask group (5).png";
import trending3Img from "../../assets/Mask group (6).png";
import trending4Img from "../../assets/Mask group (15).png";
import trending5Img from "../../assets/Mask group (8).png";
import trending6Img from "../../assets/Mask group (9).png";
import trending7Img from "../../assets/Mask group (13).png";
import trending8Img from "../../assets/Mask group (11).png";
import trending9Img from "../../assets/Mask group (12).png";
import filterIcon from "../../assets/lets-icons_filter.png";

const TrendData = [
  {
    image: trending1Img,
    title: "Black Suit",
  },
  {
    image: trending2Img,
    title: "Azure Allure Suit",
  },
  {
    image: trending3Img,
    title: "Serenity Blue Suit",
  },
  {
    image: trending5Img,
    title: "Urban Slate Suit",
  },
  {
    image: trending6Img,
    title: "Urban Slate Suit",
  },
  {
    image: trending8Img,
    title: "Black Suit",
  },
  {
    image: trending9Img,
    title: "Royal Blue Power Suit",
  },
  {
    image: trending7Img,
    title: "Serenity Blue Suit",
  },
  {
    image: trending4Img,
    title: "Graphite Glamour Suit",
  },
];

export const TrendsSection = () => {
  return (
    <div className="w-full h-fit flex justify-center md:mt-16 mt-12">
      <div className="w-[90%] flex flex-col gap-8">
        <div className="w-full flex justify-between flex-row">
          <button className="flex text-xs border p-2 items-center justify-center flex-row gap-2">
            <img className="w-5" src={filterIcon} /> Filter
          </button>
          <button className="flex text-xs border hover:text-white hover:bg-[#151433] transition-all duration-150 px-4 p-2 items-center justify-center flex-row gap-2">
            Featured <IoIosArrowDown />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 mr-3 md:mr-6  md:gap-x-0 gap-x-3 gap-y-6 md:gap-y-12 w-full h-fit">
          {TrendData.map((Trends, index) => {
            return <TrendingDetails data={Trends} key={index} />;
          })}
        </div>
        <div className="flex justify-center">
          <button className="p-2 px-7 mt-8 mb-16 border hover:bg-black hover:text-white text-xs border-black transition-all duration-150">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

const TrendingDetails = (props) => {
  const { image, title } = props.data;
  return (
    <div className="h-full w-full md:w-[390px] flex flex-col justify-between md:gap-5 gap-8">
      <div className="md:h-[80%] w-full">
        <img className="h-full w-full object-cover" src={image} />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:items-start items-center md:text-start text-center md:gap-0 gap-1 md:justify-between md:h-[50px] h-fit ">
        <div className="flex flex-col justify-between md:gap-1 gap-2">
          <h3 className="font-bold md:text-lg text-lg md:font-semibold">
            {title}
          </h3>
          <p className="text-gray-900 text-sm md:text-xs">Hugo Wool Tuxedo</p>
        </div>

        <div className="flex flex-row gap-3 text-lg md:text-xs text-black items-center">
          <p className="flex flex-row ">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoStarOutline />
          </p>
          <p className="text-gray-900 text-lg md:text-xs">(65)</p>
        </div>
      </div>
    </div>
  );
};
