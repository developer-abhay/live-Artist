//Data
import { teamMembers } from "../../data/data";
// Section
import Banner from "./section/Banner";
import StatSection from "../../section/StatSection";
import FounderSection from "./section/FounderSection";

const About = () => {
  return (
    <main className="mt-20">
      <Banner />
      <StatSection />
      <FounderSection />
      {/* Team Members  */}
      <section className="p-10 pb-24">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-4xl font-semibold ">LiveArtist Team Members</h1>
          <div className="grid grid-cols-4  gap-7">
            {teamMembers.map(({ name, desig, pic }, index) => (
              <div key={index}>
                <img
                  src={pic}
                  alt={`${desig} Photo`}
                  className="h-[280px] w-[280px] rounded-lg object-cover"
                />
                <p className="mt-2 font-[600]">{name}</p>
                <p>{desig}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
