import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import video1 from "../../assets/videos/video-1.mp4";
import video2 from "../../assets/videos/video-2.mp4";
import video3 from "../../assets/videos/travel-1.mp4";

function HeroSection() {
  return (
    <div className="w-full h-[60vh] xl:h-[80vh] top-0 overflow-hidden">
      <section>
        <video className="w-full " src={video2} autoPlay muted loop></video>
      </section>
      <section className="section-2 absolute overflow-hidden left-10 right-10 xl:left-20 xl:right-20 2xl:left-32 2xl:right-32 top-14 md:top-36 xl:top-48">
        <div className="heading  text-center md:text-left mt-10">
          <h3 className="uppercase text-md md:text-[1.2rem] font-semibold text-white">
            Our Packages
          </h3>
          <h1 className="text-2xl my-3 md:text-4xl font-semibold text-white">
            Search your Holiday
          </h1>
        </div>
        {/* mt-60 */}
        <div className=" main-packages flex flex-col md:flex-row items-center justify-center gap-5 xl:gap-7 bg-white shadow-md rounded-xl p-5 md:p-10 m-5 md:m-10">
          <div className="">
            <label
              htmlFor="Search your destination"
              className="text-sm text-gray-700"
            >
              Search your destination
            </label>
            <br />
            <div className="mt-2 flex items-center px-5 py-2 border w-44 xl:w-60 2xl:w-80 bg-gray-100 rounded-3xl">
              <input
                className="border-none outline-none bg-transparent w-full text-sm"
                type="search"
                name="Search your destination"
                id=""
                placeholder="Enter travel destination"
              />
              <IoLocationOutline size={25} className="ml-2" />
            </div>
          </div>
          <div className="">
            <label htmlFor="Select your Date" className="text-sm text-gray-700">
              Select your Date
            </label>
            <br />
            <div className="mt-2 flex items-center px-5 py-2 border  w-44 xl:w-60 2xl:w-80 bg-gray-100 rounded-3xl">
              <input
                className="border-none outline-none bg-transparent w-full text-md"
                type="date"
                name="Select your Date"
                id=""
                placeholder="Enter travel destination"
              />
            </div>
          </div>
          <div className="">
            <div className="flex justify-between">
              <label htmlFor="Max price" className="text-sm text-gray-700">
                Max price
              </label>
              <p className="text-md text-gray-800 font-semibold">$5000</p>
            </div>

            <div className="mt-2 flex items-center px-5 py-2 border  w-44 xl:w-60 2xl:w-80 bg-gray-100 rounded-3xl">
              <input
                className="border-none outline-none py-1 bg-transparent w-full text-md"
                type="range"
                name="Max price"
                id=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
