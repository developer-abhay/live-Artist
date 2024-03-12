import { artistList } from "../../../data/data";
import ArtistCard from "../../../components/ArtistCard";

const FeaturedArtist = () => {
  return (
    <section className="flex justify-center items-center p-10 mt-10 mb-20">
      <div className="flex flex-col justify-center items-center gap-10 w-[75%]">
        <div className="flex justify-between w-full">
          <h1 className="text-3xl font-semibold">Featured Artist</h1>
          <button className="btn"> Explore All</button>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {artistList.map(({ name, styles, shows, rating, type }, index) => (
            <ArtistCard
              key={index}
              name={name}
              styles={styles}
              shows={shows}
              rating={rating}
              type={type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtist;
