import { MdOutlineManageSearch } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { RiTimerFill } from "react-icons/ri";
import { LuPartyPopper } from "react-icons/lu";

const infoSection = [
  {
    title: "Search Your favourite artist",
    Icon: <MdOutlineManageSearch className="text-4xl text-orange-500" />,
  },
  {
    title: "Get best experience",
    Icon: <GiWallet className="text-4xl text-orange-500" />,
  },
  {
    title: "Enjoy Your parties & events",
    Icon: <LuPartyPopper className="text-4xl text-orange-500" />,
  },
  {
    title: "As per requirement",
    Icon: <RiTimerFill className="text-4xl text-orange-500" />,
  },
];

const InfoSection = () => {
  return (
    <section className="flex w-full h-[480px] justify-center items-center bg-white">
      <div className="flex w-[50%] h-[75%] gap-5 justify-between items-center ">
        <div className="w-[50%] h-full p-5 rounded-lg bg-orange-200 flex flex-col justify-evenly items-start">
          <h1 className="text-3xl">
            Simple & easy way to find your dream Artist
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            dolore vero itaque optio laudantium dolores quo, aut nisi odit?
            Laboriosam.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="w-[50%] h-full grid grid-cols-2 gap-5">
          {infoSection.map(({ title, Icon }) => {
            return (
              <div className="flex flex-col justify-center items-start gap-5 p-5 min-w-20 min-h-20 rounded-lg bg-orange-100  ">
                {Icon}
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
