import { CiLocationOn } from "react-icons/ci";
import Select from "../../../components/Select";
const SearchCard = () => {
  const handleSubmit = () => {};
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[90%] p-6 bg-white rounded-[16px]">
      <h2 className="text-2xl font-semibold">Search for Artists</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {/* <div className="flex items-center p-3 px-4 border-2 border-solid border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"> */}

        <Select text="Event Location" list={["Delhi", "Bombay"]} />

        {/* <CiLocationOn /> */}
        {/* </div> */}

        <input
          placeholder="Event Date"
          className="p-2 border-2 border-solid border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <input
          placeholder="Event Type"
          className="p-2 border-2 border-solid border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <button className="btn font-bold mt-5">Search</button>
      </form>
    </div>
  );
};

export default SearchCard;
