import { LuPhone } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <main className="mt-[80px]">
      <section className="bg-orange-50 p-20">
        <div className="flex flex-col items-center gap-5 m-auto w-[80%] ">
          <h1 className="text-4xl font-semibold">Get In Touch</h1>
          <p className=" text-center tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            molestiae laboriosam mollitia ad quisquam, et tempore in ducimus
            ipsum corporis. iosam mollitia ad quisquam, et tempore in ducimus
          </p>
          <div className="flex items-center gap-5 py-10 px-20 border-2 border-solid border-gray-300 bg-white rounded-lg w-full mt-5 ">
            <div className="flex flex-col justify-center items-center gap-5 w-[60%] pr-20   border-0  border-r-2 border-solid border-gray-300 ">
              <h2 className="text-2xl font-semibold">Search for Artists</h2>
              <form className="flex flex-col gap-4 w-full">
                <input
                  placeholder="Event Type"
                  className="p-2 border-2 border-solid border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  placeholder="Event Venue"
                  className="p-2 border-2 border-solid border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  placeholder="Artist Required"
                  className="p-2 border-2 border-solid border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  placeholder="Artist Required"
                  className="p-2 border-2 border-solid border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="btn font-bold mt-5">Search</button>
              </form>
            </div>

            <div className="flex flex-col gap-2 w-[50%] px-20">
              <h3 className="text-2xl mb-4 font-[500]">Office Address</h3>
              <p className="mb-5">
                G-2, South Extension - II ,<br /> New Delhi - 110049
              </p>
              <div className="flex items-center gap-2">
                <LuPhone /> +91 8570209023
              </div>
              <div className="flex items-center gap-2">
                <IoMailOpenOutline /> liveartist.in@gmail.com
              </div>
              <div>
                <div className="flex items-center justify-start mt-12 gap-5 ">
                  <FaFacebook className="text-3xl text-blue-950 cursor-pointer" />
                  <FaYoutube className="text-3xl text-blue-950 cursor-pointer" />
                  <FaInstagram className="text-3xl text-blue-950 cursor-pointer" />
                  <FaTwitter className="text-3xl text-blue-950 cursor-pointer" />
                  <SiGmail className="text-3xl text-blue-950 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
