import React from "react";
import ArtistImage from "../assets/images/demo-img.avif";

const VideoCard = () => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden max-w-[400px]">
      <img src={ArtistImage} alt="Artist Image" />
      <div className="flex flex-col  p-4 border border-solid border-gray-300 rounded-b-lg gap-2 bg-orange-50">
        <h3>Full Name</h3>

        <h3> Styles | </h3>
        <div className="flex justify-between">
          <h3> No. of Shows : </h3>
          <h3>Rating Stars : </h3>
        </div>
        <button className="btn mt-2">View Details</button>
      </div>
    </div>
  );
};

export default VideoCard;
