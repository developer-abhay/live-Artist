import Img1 from "../../../assets/images/demo-img.avif";
import Img2 from "../../../assets/images/demo-img.avif";
import Img3 from "../../../assets/images/demo-img.avif";
import Img4 from "../../../assets/images/demo-img.avif";

const Banner = () => {
  return (
    <section className="px-10 py-24">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[55%] text-center">
          <h1 className="text-5xl font-semibold leading-[50px] mb-7">
            Making it super easy to connect to your desired artists{" "}
          </h1>
          <p className="leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            accusamus nobis voluptates unde error quos, ad nisi sequi. Commodi
            sit eum libero, eveniet labore maiores ab laborum eum libero,
            eveniet labore maiores ab laborum lorem ipsum ihkfo nuimlo ksnein
          </p>
        </div>
        <div className="grid grid-cols-3 mt-7 gap-7 w-[70%] h-[700px]">
          <div className="rounded-lg overflow-hidden   col-start-1 col-end-3  ">
            <img src={Img1} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="rounded-lg overflow-hidden  col-start-3 col-end-4  ">
            <img src={Img2} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="rounded-lg overflow-hidden   col-start-1 col-end-2  ">
            <img src={Img3} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="rounded-lg overflow-hidden   col-start-2 col-end-4  ">
            <img src={Img4} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
