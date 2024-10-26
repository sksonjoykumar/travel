import React from "react";
import { IoIosSend } from "react-icons/io";
import { MdOutlineTravelExplore, MdOutlineArrowRight } from "react-icons/md";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import video1 from "../../assets/videos/video-1.mp4";

function Footer() {
  return (
    <div className="w-full lg:h-[55vh] overflow-visible lg:overflow-hidden mt-10 md:mt-20 relative">
      <div>
        <video src={video1} autoPlay muted loop className="w-full"></video>
      </div>

      <div className="footer-data absolute md:left-20 md:right-20 top-10">
        <div className="section-1">
          <h3 className="text-center md:text-left lg:ml-60 xl:ml-72 2xl:ml-80 text-2xl uppercase text-white font-normal ">
            Keep in Touch
          </h3>
          <div className=" mt-4 flex gap-3 md:gap-5 justify-center flex-wrap">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              Travel With us
            </h1>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Email Address"
              className="w-60 md:w-80 px-4 py-3 rounded-3xl text-sm border opacity-90 focus:outline-none outline-non"
            />
            <button
              type="button"
              className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-3 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
            >
              Details <IoIosSend size={20} />
            </button>
          </div>
        </div>
        <div className="section-2 mt-10 mx-0 md:mx-10 bg-slate-100 rounded-md p-6 shadow-md">
          <div className="flex gap-10 flex-wrap lg:flex-nowrap justify-center items-center md:justify-between mx-5 md:mx-20 ">
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <div className=" flex items-center flex-shrink-0 cursor-pointer">
                <MdOutlineTravelExplore size={25} color="#0EADC6" />
                <span className="text-1xl font-bold text-[#20b4cbd0]">
                  Travel.
                </span>
              </div>
              <p className=" mt-4 text-sm text-gray-700 leading-tight w-auto 2xl:w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo totam unde fuga ratione assumenda, quis
                maiores laborum quia at fugit a inventore ea dolor voluptates
                natus quasi porro est?
              </p>
              <div className=" mt-3 flex gap-2">
                <FaFacebook size={20} />
                <FaYoutube size={20} />
                <FaInstagram size={20} />
                <FaXTwitter size={20} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-6 2xl:gap-20">
              <div className="">
                <h3 className="text-md mb-3 text-gray-800 uppercase font-semibold">
                  Our Agency
                </h3>
                <ul>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Services</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Insurance</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Agency</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Tourism</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Payment</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-md mb-3 text-gray-800 uppercase font-semibold">
                  Partners
                </h3>
                <ul>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Services</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Insurance</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Agency</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Tourism</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Payment</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-md mb-3 text-gray-800 uppercase font-semibold">
                  last mi Minute
                </h3>
                <ul>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Services</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Insurance</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Agency</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Tourism</span>
                    </a>
                  </li>
                  <li className="text-sm hover:text-[#1e9cb0] transition-all duration-300">
                    <a href="#" className="flex items-center ">
                      <MdOutlineArrowRight size={25} />
                      <span className="text-sm">Payment</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
