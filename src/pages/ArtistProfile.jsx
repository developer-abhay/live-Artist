import React from "react";
import { LuPhone } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import VideoCard from "../components/VideoCard";

const ArtistProfile = ({
  props: { name, img, styles, shows, rating, type },
}) => {
  return (
    <main className="mt-[80px] bg-orange-50 pb-10 ">
      {/* Banner */}
      <div className="w-full h-[220px] bg-orange-300 relative z-[1]">
        <div className="absolute bottom-[-60px] left-[50%] translate-x-[-50%]  w-[80%] m-auto flex items-end justify-around">
          <div className="flex items-end gap-5">
            <img
              src={img}
              alt="Artist Profile"
              className="w-[120px] h-[120px] object-cover rounded-lg"
            />
            <div>
              <h2>{name}</h2>
              <p>Rating</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <LuPhone /> +91 8570209023
            </div>
            <div className="flex items-center gap-2">
              <IoMailOpenOutline /> liveartist.in@gmail.com
            </div>
          </div>
          <button className="btn">Book</button>
        </div>
      </div>

      {/* Video Section */}
      <section className="p-10 w-full mt-32">
        <div className="flex  flex-col w-[80%] m-auto gap-10">
          <div className="flex justify-between gap-10">
            <button className="btn w-full">Solo</button>
            <button className="btn w-full">Duo</button>
            <button className="btn w-full">Trio</button>
            <button className="btn w-full">Full Piece</button>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="p-10">
        <div className="w-[80%] m-auto bg-white rounded-lg flex gap-12 p-10 border-solid border-gray-300 border">
          <div className="flex flex-col  gap-5 w-1/2">
            <div className="flex gap-5">
              <img
                src={img}
                alt=""
                className="w-[180px] aspect-square object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center gap-3">
                <h2 className="text-2xl">Name</h2>
                <h2 className="text-xl">Rating</h2>
                <h2 className="text-xl">Phone Number</h2>
                <h2 className="text-xl">Email</h2>
              </div>
            </div>
            <p className="leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              incidunt nulla harum aperiam optio unde corrupti magnam animi
              earum, cumque impedit ea laboriosam adipisci quidem ducimus odit.
              Magnam ab fugiat vitae provident dolores facere laborum est a.
              Aut, voluptatum praesentium.
            </p>
            <p className="leading-8">
              Magnam ab fugiat vitae provident dolores facere laborum est a.
              Aut, voluptatum praesentium.
            </p>
            <button className="btn">Contact</button>
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-xl">Experience</h1>
              <p className="text-sm text-gray-600 mt-2">15+ Years experience</p>
            </div>
            <div>
              <h1 className="text-xl">Styles</h1>
              <p className="text-sm text-gray-600 mt-2">{styles}</p>
            </div>
            <div>
              <h1 className="text-xl">Shows perfeormed In</h1>
              <p className="text-sm text-gray-600 mt-2">
                Delhi, Pune, Banglore
              </p>
            </div>
            <div>
              <h1 className="text-xl">Demo Text</h1>
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                explicabo veritatis odit corrupti ut, vel quasi voluptates
                voluptatibus distinctio sapiente.
              </p>
            </div>
            <div className="flex gap-32">
              <div>
                <h1 className="text-xl">Demo Text</h1>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit
                </p>
              </div>
              <div>
                <h1 className="text-xl">Demo Text</h1>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit
                </p>
              </div>
            </div>
            <div className="flex gap-32">
              <div>
                <h1 className="text-xl">Demo Text</h1>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit
                </p>
              </div>
              <div>
                <h1 className="text-xl">Demo Text</h1>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full p-10">
        <div className="w-[80%] m-auto bg-white rounded-lg border-solid border-gray-300 border">
          <div className="flex justify-between items-center box-border pt-5 pb-4 px-10 border-0 border-b-2 border-solid border-gray-300">
            <h1 className="text-3xl font-bold">Clients Review</h1>
            <button className="btn">Write a Review</button>
          </div>
          <div className="flex flex-col gap-5 p-6 py-8">
            <div className="flex flex-col gap-5 rounded-lg border-solid border-gray-300 border p-5 py-8">
              <p className="leading-7 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quia, veniam repellendus sunt impedit deleniti consequuntur
                earum adipisci, aspernatur, tenetur rerum voluptatum! Assumenda
                eaque officia totam ut amet nulla blanditiis!eaque officia totam
                ut amet nulla blanditiis!eaque officia totam ut amet nulla
                blanditiis!
              </p>
              <div className="flex gap-5">
                <p>4.5 Review</p>
                <p>09 June 2023</p>
              </div>
              <div className="flex gap-4">
                <img
                  src={img}
                  alt=""
                  className="rounded-full w-[70px] aspect-square object-cover"
                />
                <div className="flex flex-col justify-center ">
                  <h2 className="font-semibold text-xl">Name</h2>
                  <h4>Product Designer</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 rounded-lg border-solid border-gray-300 border p-5 py-8">
              <p className="leading-7 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quia, veniam repellendus sunt impedit deleniti consequuntur
                earum adipisci, aspernatur, tenetur rerum voluptatum! Assumenda
                eaque officia totam ut amet nulla blanditiis!eaque officia totam
                ut amet nulla blanditiis!eaque officia totam ut amet nulla
                blanditiis!
              </p>
              <div className="flex gap-5">
                <p>4.5 Review</p>
                <p>09 June 2023</p>
              </div>
              <div className="flex gap-4">
                <img
                  src={img}
                  alt=""
                  className="rounded-full w-[70px] aspect-square object-cover"
                />
                <div className="flex flex-col justify-center ">
                  <h2 className="font-semibold text-xl">Name</h2>
                  <h4>Product Designer</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 rounded-lg border-solid border-gray-300 border p-5 py-8">
              <p className="leading-7 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quia, veniam repellendus sunt impedit deleniti consequuntur
                earum adipisci, aspernatur, tenetur rerum voluptatum! Assumenda
                eaque officia totam ut amet nulla blanditiis!eaque officia totam
                ut amet nulla blanditiis!eaque officia totam ut amet nulla
                blanditiis!
              </p>
              <div className="flex gap-5">
                <p>4.5 Review</p>
                <p>09 June 2023</p>
              </div>
              <div className="flex gap-4">
                <img
                  src={img}
                  alt=""
                  className="rounded-full w-[70px] aspect-square object-cover"
                />
                <div className="flex flex-col justify-center ">
                  <h2 className="font-semibold text-xl">Name</h2>
                  <h4>Product Designer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArtistProfile;
