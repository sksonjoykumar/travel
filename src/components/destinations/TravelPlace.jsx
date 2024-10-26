import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuClipboardPaste } from "react-icons/lu";
import pic1 from "../../assets/images/p-1.jpg";
import pic2 from "../../assets/images/p-2.jpg";
import pic3 from "../../assets/images/p-3.jpg";
import pic4 from "../../assets/images/pic-1 (1).jpg";
import pic5 from "../../assets/images/pic-1 (2).jpg";
import pic6 from "../../assets/images/pic-1 (3).jpg";
import pic7 from "../../assets/images/pic-1 (4).jpg";
import pic8 from "../../assets/images/pic-1 (5).jpg";
import pic9 from "../../assets/images/pic-1 (6).jpg";
import pic10 from "../../assets/images/pic-1 (7).jpg";
import pic11 from "../../assets/images/pic-1 (8).jpg";

function TravelPlace() {
  return (
    <div className="max-w-7xl mx-auto px-12 mt-10 md:mt-20">
      <section className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#33afc2]">
          Most visited destinations
        </h1>
        <div className="main-card grid md:grid-cols-3 grid-flow-row gap-10 mt-5 md:mx-6">
          <div className="card border shadow-sm shadow-gray-600 rounded-xl cursor-pointer">
            <img
              src={pic1}
              alt="pic-1"
              className="w-full h-48 rounded-t-xl object-cover"
            />
            <div className="p-6">
              <h2 className="text-md font-semibold text-gray-800">Bora Bora</h2>
              <div className="flex items-center justify-start ml-[-5px] my-1 mb-3">
                <IoLocationOutline size={20} />
                <span className="text-sm text-gray-900 ml-1">New Zealand</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2 border-b-2 pb-3">
                <div className="">
                  <h4 className="uppercase text-md text-gray-700">Cultural</h4>
                  <h4 className="uppercase text-md text-gray-700">
                    Relax
                    <span className="inline-block w-9 h-5 rounded-xl text-sm text-white ml-1 text-center bg-[#33AFC2]">
                      +1
                    </span>
                  </h4>
                </div>
                <div className="flex  items-end">
                  <h3 className="text-3xl font-semibold text-gray-700">$700</h3>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm leading-tight text-gray-700 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  nesciunt vel saepe laborum expedita sapiente excepturi rerum
                  ipsa earum doloribus perferendis optio esse.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-2 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
                  >
                    Details <LuClipboardPaste />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card border shadow-sm shadow-gray-600 rounded-xl cursor-pointer">
            <img src={pic2} alt="pic-1" className="w-full h-48 rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-md font-semibold text-gray-800">Bora Bora</h2>
              <div className="flex items-center justify-start ml-[-5px] my-1 mb-3">
                <IoLocationOutline size={20} />
                <span className="text-sm text-gray-900 ml-1">New Zealand</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2 border-b-2 pb-3">
                <div className="">
                  <h4 className="uppercase text-md text-gray-700">Cultural</h4>
                  <h4 className="uppercase text-md text-gray-700">
                    Relax
                    <span className="inline-block w-9 h-5 rounded-xl text-sm text-white ml-1 text-center bg-[#33AFC2]">
                      +1
                    </span>
                  </h4>
                </div>
                <div className="flex  items-end">
                  <h3 className="text-3xl font-semibold text-gray-700">$700</h3>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm leading-tight text-gray-700 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  nesciunt vel saepe laborum expedita sapiente excepturi rerum
                  ipsa earum doloribus perferendis optio esse.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-2 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
                  >
                    Details <LuClipboardPaste />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card border shadow-sm shadow-gray-600 rounded-xl cursor-pointer">
            <img src={pic3} alt="pic-1" className="w-full h-48 rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-md font-semibold text-gray-800">Bora Bora</h2>
              <div className="flex items-center justify-start ml-[-5px] my-1 mb-3">
                <IoLocationOutline size={20} />
                <span className="text-sm text-gray-900 ml-1">New Zealand</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2 border-b-2 pb-3">
                <div className="">
                  <h4 className="uppercase text-md text-gray-700">Cultural</h4>
                  <h4 className="uppercase text-md text-gray-700">
                    Relax
                    <span className="inline-block w-9 h-5 rounded-xl text-sm text-white ml-1 text-center bg-[#33AFC2]">
                      +1
                    </span>
                  </h4>
                </div>
                <div className="flex  items-end">
                  <h3 className="text-3xl font-semibold text-gray-700">$700</h3>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm leading-tight text-gray-700 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  nesciunt vel saepe laborum expedita sapiente excepturi rerum
                  ipsa earum doloribus perferendis optio esse.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-2 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
                  >
                    Details <LuClipboardPaste />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card border shadow-sm shadow-gray-600 rounded-xl cursor-pointer">
            <img src={pic4} alt="pic-1" className="w-full h-48 rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-md font-semibold text-gray-800">Bora Bora</h2>
              <div className="flex items-center justify-start ml-[-5px] my-1 mb-3">
                <IoLocationOutline size={20} />
                <span className="text-sm text-gray-900 ml-1">New Zealand</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2 border-b-2 pb-3">
                <div className="">
                  <h4 className="uppercase text-md text-gray-700">Cultural</h4>
                  <h4 className="uppercase text-md text-gray-700">
                    Relax
                    <span className="inline-block w-9 h-5 rounded-xl text-sm text-white ml-1 text-center bg-[#33AFC2]">
                      +1
                    </span>
                  </h4>
                </div>
                <div className="flex  items-end">
                  <h3 className="text-3xl font-semibold text-gray-700">$700</h3>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm leading-tight text-gray-700 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  nesciunt vel saepe laborum expedita sapiente excepturi rerum
                  ipsa earum doloribus perferendis optio esse.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-2 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
                  >
                    Details <LuClipboardPaste />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card border shadow-sm shadow-gray-600 rounded-xl cursor-pointer">
            <img src={pic5} alt="pic-1" className="w-full h-48 rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-md font-semibold text-gray-800">Bora Bora</h2>
              <div className="flex items-center justify-start ml-[-5px] my-1 mb-3">
                <IoLocationOutline size={20} />
                <span className="text-sm text-gray-900 ml-1">New Zealand</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2 border-b-2 pb-3">
                <div className="">
                  <h4 className="uppercase text-md text-gray-700">Cultural</h4>
                  <h4 className="uppercase text-md text-gray-700">
                    Relax
                    <span className="inline-block w-9 h-5 rounded-xl text-sm text-white ml-1 text-center bg-[#33AFC2]">
                      +1
                    </span>
                  </h4>
                </div>
                <div className="flex  items-end">
                  <h3 className="text-3xl font-semibold text-gray-700">$700</h3>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm leading-tight text-gray-700 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  nesciunt vel saepe laborum expedita sapiente excepturi rerum
                  ipsa earum doloribus perferendis optio esse.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-2 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
                  >
                    Details <LuClipboardPaste />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card border shadow-sm shadow-gray-600 rounded-xl cursor-pointer">
            <img src={pic6} alt="pic-1" className="w-full h-48 rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-md font-semibold text-gray-800">Bora Bora</h2>
              <div className="flex items-center justify-start ml-[-5px] my-1 mb-3">
                <IoLocationOutline size={20} />
                <span className="text-sm text-gray-900 ml-1">New Zealand</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2 border-b-2 pb-3">
                <div className="">
                  <h4 className="uppercase text-md text-gray-700">Cultural</h4>
                  <h4 className="uppercase text-md text-gray-700">
                    Relax
                    <span className="inline-block w-9 h-5 rounded-xl text-sm text-white ml-1 text-center bg-[#33AFC2]">
                      +1
                    </span>
                  </h4>
                </div>
                <div className="flex  items-end">
                  <h3 className="text-3xl font-semibold text-gray-700">$700</h3>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm leading-tight text-gray-700 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  nesciunt vel saepe laborum expedita sapiente excepturi rerum
                  ipsa earum doloribus perferendis optio esse.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-2 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
                  >
                    Details <LuClipboardPaste />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card border shadow-sm shadow-gray-600 rounded-xl cursor-pointer">
            <img src={pic7} alt="pic-1" className="w-full h-48 rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-md font-semibold text-gray-800">Bora Bora</h2>
              <div className="flex items-center justify-start ml-[-5px] my-1 mb-3">
                <IoLocationOutline size={20} />
                <span className="text-sm text-gray-900 ml-1">New Zealand</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2 border-b-2 pb-3">
                <div className="">
                  <h4 className="uppercase text-md text-gray-700">Cultural</h4>
                  <h4 className="uppercase text-md text-gray-700">
                    Relax
                    <span className="inline-block w-9 h-5 rounded-xl text-sm text-white ml-1 text-center bg-[#33AFC2]">
                      +1
                    </span>
                  </h4>
                </div>
                <div className="flex  items-end">
                  <h3 className="text-3xl font-semibold text-gray-700">$700</h3>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm leading-tight text-gray-700 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  nesciunt vel saepe laborum expedita sapiente excepturi rerum
                  ipsa earum doloribus perferendis optio esse.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-2 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
                  >
                    Details <LuClipboardPaste />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card border shadow-sm shadow-gray-600 rounded-xl cursor-pointer">
            <img src={pic8} alt="pic-1" className="w-full h-48 rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-md font-semibold text-gray-800">Bora Bora</h2>
              <div className="flex items-center justify-start ml-[-5px] my-1 mb-3">
                <IoLocationOutline size={20} />
                <span className="text-sm text-gray-900 ml-1">New Zealand</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2 border-b-2 pb-3">
                <div className="">
                  <h4 className="uppercase text-md text-gray-700">Cultural</h4>
                  <h4 className="uppercase text-md text-gray-700">
                    Relax
                    <span className="inline-block w-9 h-5 rounded-xl text-sm text-white ml-1 text-center bg-[#33AFC2]">
                      +1
                    </span>
                  </h4>
                </div>
                <div className="flex  items-end">
                  <h3 className="text-3xl font-semibold text-gray-700">$700</h3>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm leading-tight text-gray-700 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  nesciunt vel saepe laborum expedita sapiente excepturi rerum
                  ipsa earum doloribus perferendis optio esse.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-2 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
                  >
                    Details <LuClipboardPaste />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card border shadow-sm shadow-gray-600 rounded-xl cursor-pointer">
            <img src={pic9} alt="pic-1" className="w-full h-48 rounded-t-xl" />
            <div className="p-6">
              <h2 className="text-md font-semibold text-gray-800">Bora Bora</h2>
              <div className="flex items-center justify-start ml-[-5px] my-1 mb-3">
                <IoLocationOutline size={20} />
                <span className="text-sm text-gray-900 ml-1">New Zealand</span>
              </div>
              <div className="flex justify-between border-t-2 pt-2 border-b-2 pb-3">
                <div className="">
                  <h4 className="uppercase text-md text-gray-700">Cultural</h4>
                  <h4 className="uppercase text-md text-gray-700">
                    Relax
                    <span className="inline-block w-9 h-5 rounded-xl text-sm text-white ml-1 text-center bg-[#33AFC2]">
                      +1
                    </span>
                  </h4>
                </div>
                <div className="flex  items-end">
                  <h3 className="text-3xl font-semibold text-gray-700">$700</h3>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm leading-tight text-gray-700 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  nesciunt vel saepe laborum expedita sapiente excepturi rerum
                  ipsa earum doloribus perferendis optio esse.
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    className="flex items-center justify-center border-none outline-none gap-2 border bg-[#28a0b3] rounded-3xl px-5 py-2 text-white text-sm hover:bg-[#37aec0] transition-all duration-300"
                  >
                    Details <LuClipboardPaste />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TravelPlace;
