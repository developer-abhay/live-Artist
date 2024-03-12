//Images
import GetStartedImg1 from "../../assets/images/demo-img.avif";
import GetStartedImg2 from "../../assets/images/demo-img.avif";
import GetStartedImg3 from "../../assets/images/demo-img.avif";
import GetStartedImg4 from "../../assets/images/demo-img.avif";
// components
import TestimonialCard from "./components/TestimonialCard";
//Sections
import StatSection from "../../section/StatSection";
import InfoSection from "./sections/InfoSection";
import HeroSection from "./sections/HeroSection";
import FeaturedArtist from "./sections/FeaturedArtist";

const Home = () => {
  return (
    <main className="mt-20">
      <HeroSection />
      <InfoSection />
      <StatSection />
      <FeaturedArtist />
      <section className="flex justify-center items-center px-10 py-28 bg-orange-50">
        <div className="flex flex-col gap-40 w-[80%] ">
          <div className="flex gap-[10%]">
            <div className="flex flex-col justify-end gap-5 items-start w-[50%]">
              <h1>Simple & easy way to find your dream Appointment</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                omnis obcaecati accusantium. Repellendus, laboriosam. Quos
                nesciunt quod repellat inventore, reprehenderit ab laudantium
                eius deserunt voluptatum reiciendis itaque numquam nobis
                praesentium officia aliquam aliquid eos, omnis accusantium
                accusamus! Ipsam laborum ipsum.
              </p>
              <button className="btn">Get Started</button>
            </div>
            <div className="grid grid-cols-2 w-[40%]">
              <img src={GetStartedImg1} alt="" />
              <img src={GetStartedImg2} alt="" />
              <img src={GetStartedImg3} alt="" />
              <img src={GetStartedImg4} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="w-[50%]">
              <img src={GetStartedImg1} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-5 items-start w-[50%]">
              <h1>Simple & easy way to find your dream Appointment</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                omnis obcaecati accusantium. Repellendus, laboriosam. Quos
                nesciunt quod repellat inventore, reprehenderit ab laudantium
                eius deserunt voluptatum reiciendis itaque numquam nobis
                praesentium officia aliquam aliquid eos, omnis accusantium
                accusamus! Ipsam laborum ipsum.
              </p>
              <button className="btn">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      {/* testmonials */}
      <section className="flex justify-center items-center p-10 mt-10 mb-20">
        <div className="flex flex-col gap-3 items-center justify-center  w-full">
          <TestimonialCard />
          <div className="flex justify-between w-[400px]">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
