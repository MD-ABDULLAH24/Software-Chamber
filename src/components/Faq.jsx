import React, { useState } from "react";
import frame_1 from "../assets/images/intro_stats/frame_1.png";
import frame_2 from "../assets/images/intro_stats/frame_2.png";
import { FaArrowRight } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Faq = () => {
  const [open1, setMenuOpen1] = useState(false);
  const [open2, setMenuOpen2] = useState(false);
  const [open3, setMenuOpen3] = useState(false);
  const [open4, setMenuOpen4] = useState(false);
  const [open5, setMenuOpen5] = useState(false);

  return (
    <section className="px-2 md:px-0 py-[60px] lg:py-[150px]">
      <div className="container">
        {/* Top content  */}
        <div className="flex items-center justify-center text-center mx-auto">
          <h1 className="text-[26px] sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[70px] max-w-[1300px] leading-tight font-bold bricolage lg:pr-20">
            Comprehensive Answers to the Most
            <span className="inline-block align-middle">
              <img
                src={frame_1}
                alt="Icon"
                className="  hidden lg:inline lg:h-[70px] mb-3  w-auto"
              />
            </span>
            Common Questions{" "}
            <span className="text-gray-400"> About Our Services</span> and How
            We <span className="text-gray-400">Work</span>
            <span className="inline-block align-middle">
              <img
                src={frame_2}
                alt="Icon"
                className=" hidden lg:inline h-[70px] mb-3 w-auto"
              />
            </span>
          </h1>
        </div>
        {/* Bottom content  */}
        <div>
          <div className="flex justify-between items-center mt-[20px] lg:mt-[53px] border-b-gray-500 border-dashed pb-[20px] md:pb-[30px] lg:pb-[42px] border-b-1">
            <div>
              <h1 className="flex items-center text-[25px] sm:text-[45px] md:text-[76px] lg:text-[110px] font-normal gap-2 lg:gap-6 bricolage">
                FAQ
              </h1>
            </div>
            <div className="flex items-center gap-1 lg:gap-8">
              <h4 className="text-[16px] lg:text-[20px]">All FAQ</h4>
              <span className="bg-[#2CCEBA] h-[40px] w-[40px] flex items-center justify-center rounded-full cursor-pointer">
                <FaArrowRight className="w-[16px] h-[18px]" />
              </span>
            </div>
          </div>

          <div className="w-full mx-auto p-4 space-y-4 mt-[40px] md:mt-[60px] lg:mt-[80px]">
            {/* faq 1  */}
            <div className="border-b-gray-500 border-dashed pb-[20px] md:pb-[30px] lg:py-[42px] border-b-1">
              <h1
                className="text-[18px] lg:text-[28px] font-bold cursor-pointer flex justify-between items-center"
                onClick={() => setMenuOpen1(!open1)}
              >
                What software development services does your company offer?
                <FiChevronDown
                  className={`md:w-14 md:h-15 w-14 h-7  rounded-full transition-transform duration-300 ${
                    open1 ? "rotate-180 bg-[#2CCEBA] text-white" : "rotate-0 bg-black text-white"
                  }`}
                />
              </h1>
              {open1 && (
                <p className="text-gray-700 mt-2 max-w-[1008px] pt-4 text-[20px]">
                  Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo
                  nanya yang bener dong. Bayangin aja kalo aplikasi ini
                  berbayar, masa pas chat lo harus bayar setiap karakter. Kalo
                  lo mau bayar mending pake MMS aja dah.
                </p>
              )}
            </div>
            <div className="border-b-gray-500 border-dashed pb-[20px] md:pb-[30px] lg:py-[42px] border-b-1">
              <h1
                className="text-[18px] lg:text-[28px] font-bold cursor-pointer flex justify-between items-center"
                onClick={() => setMenuOpen2(!open2)}
              >
                What software development services does your company offer?
                <FiChevronDown
                  className={`md:w-14 md:h-15 w-14 h-7  rounded-full transition-transform duration-300 ${
                    open2 ? "rotate-180 bg-[#2CCEBA] text-white" : "rotate-0 bg-black text-white"
                  }`}
                />
              </h1>
              {open2 && (
                <p className="text-gray-700 mt-2 max-w-[1008px] pt-4 text-[20px]">
                  Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo
                  nanya yang bener dong. Bayangin aja kalo aplikasi ini
                  berbayar, masa pas chat lo harus bayar setiap karakter. Kalo
                  lo mau bayar mending pake MMS aja dah.
                </p>
              )}
            </div>
            <div className="border-b-gray-500 border-dashed pb-[20px] md:pb-[30px] lg:py-[42px] border-b-1">
              <h1
                className="text-[18px] lg:text-[28px] font-bold cursor-pointer flex justify-between items-center"
                onClick={() => setMenuOpen3(!open3)}
              >
                What software development services does your company offer?
                <FiChevronDown
                  className={`md:w-14 md:h-15 w-14 h-7  rounded-full transition-transform duration-300 ${
                    open3 ? "rotate-180 bg-[#2CCEBA] text-white" : "rotate-0 bg-black text-white"
                  }`}
                />
              </h1>
              {open3 && (
                <p className="text-gray-700 mt-2 max-w-[1008px] pt-4 text-[20px]">
                  Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo
                  nanya yang bener dong. Bayangin aja kalo aplikasi ini
                  berbayar, masa pas chat lo harus bayar setiap karakter. Kalo
                  lo mau bayar mending pake MMS aja dah.
                </p>
              )}
            </div>
            <div className="border-b-gray-500 border-dashed pb-[20px] md:pb-[30px] lg:py-[42px] border-b-1">
              <h1
                className="text-[18px] lg:text-[28px] font-bold cursor-pointer flex justify-between items-center"
                onClick={() => setMenuOpen4(!open4)}
              >
                What software development services does your company offer?
                <FiChevronDown
                  className={`md:w-14 md:h-15 w-14 h-7  rounded-full transition-transform duration-300 ${
                    open4 ? "rotate-180 bg-[#2CCEBA] text-white" : "rotate-0 bg-black text-white"
                  }`}
                />
              </h1>
              {open4 && (
                <p className="text-gray-700 mt-2 max-w-[1008px] pt-4 text-[20px] ">
                  Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo
                  nanya yang bener dong. Bayangin aja kalo aplikasi ini
                  berbayar, masa pas chat lo harus bayar setiap karakter. Kalo
                  lo mau bayar mending pake MMS aja dah.
                </p>
              )}
            </div>
            <div className=" pb-[20px] md:pb-[30px] lg:py-[42px] ">
              <h1
                className="text-[18px] lg:text-[28px] font-bold cursor-pointer flex justify-between items-center"
                onClick={() => setMenuOpen5(!open5)}
              >
                What software development services does your company offer?
                <FiChevronDown
                  className={`md:w-14 md:h-15 w-14 h-7  rounded-full transition-transform duration-300 ${
                    open5 ? "rotate-180 bg-[#2CCEBA] text-white" : "rotate-0 bg-black text-white"
                  }`}
                />
              </h1>
              {open5 && (
                <p className="text-gray-700 mt-2 max-w-[1008px] pt-4 text-[20px]">
                  Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo
                  nanya yang bener dong. Bayangin aja kalo aplikasi ini
                  berbayar, masa pas chat lo harus bayar setiap karakter. Kalo
                  lo mau bayar mending pake MMS aja dah.
                </p>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
