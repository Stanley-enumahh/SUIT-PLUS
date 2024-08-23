import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import trending1Img from "../assets/trending1.png";
import trending2Img from "../assets/trending2.png";
import trending3Img from "../assets/trending3.png";
const TrendingData = [
  {
    image: trending1Img,
    title: "Boss",
    info: "Hugo Wool Tuxedo",
  },
  {
    image: trending2Img,
    title: "Grosgrain ",
    info: "Tailor Fit Wool Tuxedo",
  },
  {
    image: trending3Img,
    title: "Eton",
    info: "Trim Fit Wool Tuxedo",
  },
];

export const Trending = () => {
  return (
    <div className="h-fit md:h-screen w-[90%] md:w-full flex flex-col gap-12  items-center">
      <div className="text-center">
        <h1 className="font-bold md:text-lg text-xl">TRENDING</h1>
        <p className="text-sm">
          Keep up with the latest trends and take a deep dive into our world at
          Suitplus
        </p>
      </div>

      <div className="h-[68%] justify-center items-center w-full flex flex-col md:flex-row gap-4 md:mb-0 mb-10">
        {TrendingData.map((trending, index) => {
          return <TrendingDetails data={trending} key={index} />;
        })}
      </div>
    </div>
  );
};

const TrendingDetails = (props) => {
  const { image, title, info } = props.data;
  return (
    <div className="h-full w-full md:w-[300px] flex flex-col justify-between md:gap-5 gap-8">
      <div className="h-[80%] w-full">
        <img className="h-full w-full object-cover" src={image} alt={info} />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:items-start items-center md:text-start text-center md:gap-0 gap-1 md:justify-between md:h-[50px] h-fit ">
        <div className="flex flex-col justify-between md:gap-1 gap-3">
          <h3 className="font-bold md:text-lg text-xl md:font-semibold">
            {title}
          </h3>
          <p className="text-gray-900 text-sm md:text-xs">{info}</p>
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
