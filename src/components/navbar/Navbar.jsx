import React, { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [openResMenu, setOpenResMenu] = useState(false);

  const handleResMenu = () => {
    setOpenResMenu(!openResMenu);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b bg-slate-100  border-gray-400">
      <div className="container mx-auto px-4 md:px-20 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 cursor-pointer">
            <MdOutlineTravelExplore size={35} color="#0EADC6" />
            <span className="text-2xl font-bold text-[#20b4cbd0]">Travel.</span>
          </div>

          <ul className="hidden md:flex items-center gap-3 lg:gap-7">
            <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
              <a href="#package">Package</a>
            </li>
            <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
              <a href="#shop">Shop</a>
            </li>
            <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hidden lg:block text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
              <a href="#pages">Pages</a>
            </li>
            <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
              <a href="#news">News</a>
            </li>
            <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="button hidden md:flex items-center">
            <button
              type="button"
              className="py-2 text-sm px-3 rounded-md bg-[#24c2da] text-white hover:bg-[#24b0c6] transition-all duration-300"
            >
              Book Now
            </button>
          </div>
          {/* responsive Navbar*/}
          <div className="md:hidden flex items-center justify-end">
            <button onClick={handleResMenu} type="button">
              {openResMenu ? (
                <IoMdClose size={30} />
              ) : (
                <AiOutlineBars size={30} />
              )}
            </button>
          </div>

          {openResMenu && (
            <div className="fixed top-[60px] right-0 z-50 text-center bg-gray-100 w-full p-5 flex flex-col justify-center items-center md:hidden">
              <ul className="flex flex-col gap-3">
                <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
                  <a href="#home">Home</a>
                </li>
                <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
                  <a href="#package">Package</a>
                </li>
                <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
                  <a href="#shop">Shop</a>
                </li>
                <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
                  <a href="#about">About</a>
                </li>
                <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
                  <a href="#pages">Pages</a>
                </li>
                <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
                  <a href="#news">News</a>
                </li>
                <li className="text-md font-semibold hover:text-[#1e9cb0] transition-all duration-300">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div className="mt-4 flex items-center">
                <button
                  type="button"
                  className="py-2 text-sm px-3 rounded-md bg-[#24c2da] text-white hover:bg-[#24b0c6] transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
