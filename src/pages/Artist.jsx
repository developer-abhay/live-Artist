import React, { useState } from "react";
import ArtistCard from "../components/ArtistCard";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import { artistList } from "../data/data";
import Select from "../components/Select";

const optionList = ["Solo", "Duo", "Trio", "Full Piece"];
const eventList = [];
const priceList = [
  "Less than $4999",
  "$5000-9999",
  "$10,000-14,999",
  "$15,000-19,999",
  "$20,000-24,999",
  "$25,000-29,999",
];

const Artist = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    alert(selectedOption);
  };
  return (
    <main className="mt-[80px]">
      <section className="flex flex-col p-20 gap-5">
        <h1 className="text-4xl font-semibold">Find Artist</h1>

        <div className="flex  justify-between">
          <Select list={optionList} text="Event Location" />
          <Select list={optionList} text="Type" />
          <Select list={priceList} text="Price Range" />

          <input
            type="text"
            placeholder="Price"
            className=" p-2 border-2 border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="More"
            className="p-2 border-2 border-solid border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="btn">Search</button>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-10">
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
        <div className="flex justify-between mt-5">
          <button className="flex items-center h-fit gap-2 py-3 px-4 rounded-lg  border border-gray-400 border-solid">
            <FaLongArrowAltLeft className="" />
            Prev
          </button>
          <button className="flex items-center h-fit gap-2 py-3 px-4 rounded-lg border border-gray-400 border-solid">
            Next
            <FaLongArrowAltRight />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Artist;
