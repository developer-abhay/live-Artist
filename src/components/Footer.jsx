import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { footerColumns } from "../data/data";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full px-14 py-[74px] bg-orange-100">
      <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[115px] mx-auto max-w-[1200px]">
        <div className="flex justify-between items-center w-full gap-10">
          <div className="flex flex-col items-start justify-start w-[30%] gap-[10px]">
            <h1 className="mb-7 text-4xl font-bold text-blue-950">
              LiveArtist.in
            </h1>
            <h3>South Extension, New Delhi, India</h3>
            <h3>+91 85207090</h3>
            <h3>LiveShow.in@gmail.com</h3>
            <div className="flex items-center justify-start mt-12 gap-5">
              <FaFacebook className="text-3xl text-blue-950" />
              <FaYoutube className="text-3xl text-blue-950" />
              <FaInstagram className="text-3xl text-blue-950" />
              <FaTwitter className="text-3xl text-blue-950" />
              <SiGmail className="text-3xl text-blue-950" />
            </div>
          </div>
          <div className="flex justify-between items-start w-[70%]">
            {footerColumns.map(({ heading, items }, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start w-[19%] gap-[15px]"
              >
                <h4 className="!font-bold">{heading}</h4>
                <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                  <h4>{items[0]}</h4>
                  <h4>{items[1]}</h4>
                  <h4>{items[2]}</h4>
                  <h4>{items[3]}</h4>
                  <h4>{items[4] ? items[4] : ""}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-2xl">© 2024. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
