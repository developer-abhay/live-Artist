import SearchCard from "../components/SearchCard";
import HeroImg from "../../../assets/images/demo-img.avif";

const HeroSection = () => {
  return (
    <section className="flex justify-between w-full h-[calc(100vh-80px)] p-12 bg-orange-50 ">
      <div className="flex flex-col items-center justify-center w-[50%] gap-[5%]">
        <div className="flex flex-col items-start w-[90%] gap-[15px]">
          <h1 className="text-4xl">
            Find the perfect musician
            <br />
            for your events
          </h1>
          <p className="text-gray-600">
            We helps our clients find the best fit for their events <br />
            br it weddings, corporate events or parties. we are a One stop
            solution.
          </p>
        </div>
        <SearchCard />
      </div>
      <div className="flex items-center w-[45%] rounded-lg h-[480px] overflow-hidden shadow-lg shadow-gray-600">
        <img
          src={HeroImg}
          alt="image_one"
          className="z-1 w-[100%] h-[100%] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
