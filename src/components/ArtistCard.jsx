import React from "react";
import ArtistImage from "../assets/images/demo-img.avif";
import { Link } from "react-router-dom";

const ArtistCard = ({ name, styles, shows, rating, type }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden max-w-[400px]">
      <Link to={`/${name}`}>
        <img src={ArtistImage} alt="Artist Image" />
      </Link>
      <div className="flex flex-col  p-4 border border-solid border-gray-300 rounded-b-lg gap-2 bg-orange-50">
        <h3>Full Name</h3>

        <h3> Styles | {styles}</h3>
        <div className="flex justify-between">
          <h3> No. of Shows : {shows}</h3>
          <h3>Rating Stars : {rating}</h3>
        </div>
        <button className="btn mt-2">View Details</button>
      </div>
    </div>
  );
};

export default ArtistCard;
