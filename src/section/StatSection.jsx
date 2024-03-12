import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { FaRegSmileWink } from "react-icons/fa";

export const statSection = [
  {
    title: "6000/-",
    text: "Solo artist prices starting from",
    Icon: <HiOutlineCurrencyRupee className="text-3xl text-orange-500" />,
  },
  {
    title: "50+",
    text: "Available in more than 50 cities ",
    Icon: <MdOutlineLocationOn className="text-3xl text-orange-500" />,
  },
  {
    title: "15000",
    text: "Lorem ipsum dolor sit amet",
    Icon: <MdOutlineLocalFireDepartment className="text-3xl text-orange-500" />,
  },
  {
    title: "24000",
    text: "Lorem ipsum dolor sit amet",
    Icon: <FaRegSmileWink className="text-3xl text-orange-500" />,
  },
];

const StatSection = () => {
  return (
    <section className="flex w-full justify-center items-center h-[45vh] bg-orange-50">
      <div className="flex  gap-10">
        {statSection.map(({ title, text, Icon }) => {
          return (
            <div className="flex flex-col justify-center  p-10 max-w-[250px] gap-4">
              <div className=" bg-white w-fit rounded-full p-3 mb-3">
                {Icon}
              </div>
              <h1 className="text-4xl font-bold">{title}</h1>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatSection;
