import TestimonialImg from "../../../assets/images/demo-img.avif";
import { TfiQuoteRight } from "react-icons/tfi";

const TestimonialCard = () => {
  return (
    <div className="w-[60%] flex gap-20 mb-10">
      <img src={TestimonialImg} alt="" className="w-[40%] rounded-lg" />
      <div className="w-[60%]">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-semibold">Taylor Wilson</h1>
            <h3 className="text-2xl my-2">Title</h3>
          </div>
          <TfiQuoteRight className="text-6xl  text-orange-500 mr-20 mt-[-10px]" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, id
          recusandae eaque unde accusantium ea sunt, repellat provident earum
          vero dolore mollitia! Iusto nemo aperiam accusamus, earum alias minima
          voluptas quam error voluptatem nam recusandae rem aliquid consequuntur
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
