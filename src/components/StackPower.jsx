import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaCreditCard, FaDropbox, FaSpotify } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { SiGoogledrive } from "react-icons/si";
import logo from "../assets/images/logo/logo_2.png";
import Button from "./ui/Button";
import img_1 from "../assets/images/stackPower/image_1.png";
import img_2 from "../assets/images/stackPower/image_2.png";
import img_3 from "../assets/images/stackPower/image_3.png";
import img_4 from "../assets/images/stackPower/image_4.png";
import img_5 from "../assets/images/stackPower/image_5.png";
import img_6 from "../assets/images/stackPower/image_6.png";
import img_7 from "../assets/images/stackPower/image_7.png";
import img_8 from "../assets/images/stackPower/image_8.png";
import img_9 from "../assets/images/stackPower/image_9.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StackPower = () => {
 const settingsLeft = {
  dots: true,
  infinite: true,
  speed: 4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  rtl: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280, // laptop and below
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640, // mobile
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};


 const settingsRight = {
  dots: true,
  infinite: true,
  speed: 4000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  rtl: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
  return (
    <section className="bg-[#090B0F] px-2 md:px-0 py-[60px] lg:py-[150px]">
      <div className="container">
        {/* Top content  */}
        <div className="grid  grid-cols-1 xl:grid-cols-2">
          <div>
            <h1 className="text-white text-[20px] sm:text-[40px] bricolage md:text-[70px] lg:text-[83px]">
              Our Stack Powers of the{" "}
              <span className="text-gray-400 bricolage">World’s</span> Most{" "}
              <span className="text-gray-400 bricolage">Beloved Companies</span>
            </h1>
          </div>
          <div className="flex flex-col md:gap-8 justify-center mt-8 md:mt-0 items-center">
            <div className="md:flex gap-3 md:ml-40 ">
              <button className="bg-gradient-to-r ml-10 mb-2 md:mb-0 from-[#2CCEBA] to-[#0f8b7c4d] cursor-pointer md:px-5 md:py-4 px-2 py-1 flex items-center justify-between rounded-full">
                <span className="bg-white h-[40px] w-[40px] md:w-[84px] md:h-[84px] rounded-full mr-11  flex items-center justify-center">
                  <FaSpotify className="text-[20px] md:text-[50px] text-green-400" />
                </span>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  Spotify
                </span>
              </button>
              <button className="bg-gradient-to-r mb-2 mr-15 md:mb-0 from-[#2CCEBA] to-[#0f8b7c4d] cursor-pointer md:px-5 md:py-4 py-1 px-2 flex items-center justify-between rounded-full">
                <span className="bg-white h-[40px] w-[40px] md:w-[84px] md:h-[84px] rounded-full mr-9  flex items-center justify-center">
                  <CiSearch className="text-[20px] md:text-[50px] text-green-400" />
                </span>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  TalentQl
                </span>
              </button>
            </div>
            <div className="md:flex  gap-3">
              <button className="bg-gradient-to-r mb-2 ml-10 lg:mb-0 from-[#2CCEBA] to-[#0f8b7c4d] cursor-pointer md:px-5 md:py-4 py-1 px-2 flex items-center justify-between rounded-full">
                <span className="bg-white h-[40px] w-[40px] md:w-[84px] md:h-[84px] rounded-full mr-9  flex items-center justify-center">
                  <FaDropbox className="text-[20px] md:text-[50px] text-green-400" />
                </span>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  DropBox
                </span>
              </button>
              <button className="bg-gradient-to-r mb-2 mr-13 lg:mb-0 from-[#2CCEBA] to-[#0f8b7c4d] cursor-pointer md:px-5 md:py-4 py-1 px-2 flex items-center justify-between rounded-full">
                <span className="bg-white h-[40px] w-[40px] md:w-[84px] md:h-[84px] rounded-full mr-12  flex items-center justify-center">
                  <FaCreditCard className="text-[20px] md:text-[50px] text-green-400" />
                </span>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  Fliqpay
                </span>
              </button>
            </div>
            <div>
              <button className="bg-gradient-to-r mb-2 lg:mb-0 from-[#2CCEBA] to-[#0f8b7c4d] cursor-pointer md:px-5 md:py-4 py-1 px-2 flex items-center justify-between rounded-full">
                <span className="bg-white h-[40px] w-[40px] md:w-[84px] md:h-[84px] rounded-full mr-15  flex items-center justify-center">
                  <SiGoogledrive className="text-[20px] md:text-[50px] text-green-400" />
                </span>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  Slack
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Middle content  */}
        <div className="bg-gradient-to-t from-[#02332dd1] to-[#011d1d] rounded-4xl max-h-[901px] py-10 flex flex-col items-center justify-center mt-[60px] sm:mt-[80px] md:mt-[120px]  lg:mt-[160px]">
          <div className=" pt-[40px] md:pt-[63px] pb-[50px] md:pb-[108px]">
            <h1 className="text-[14px] md:text-[18px] cursor-pointer max-w-[360px] px-2 md:px-6 rounded-full bg-gradient-to-r from-[#213734] to-[#386c66] border border-[#28303F] backdrop-blur-3xl h-[49px] font-normal flex items-center justify-center gap-2">
              <IoStar className="text-[#00ffdd] " /> Smarter Idea, Instant
              Solutions
            </h1>
          </div>
          <span className="h-[70px] w-[70px] cursor-pointer md:h-[128px] md:w-[128px] flex items-center justify-center rounded-3xl bg-[#E9E9E9]">
            <img src={logo} className="w-[70%]" alt="Logo" />
          </span>
          <h1 className="pt-[30px] md:pt-[45px] text-[20px] mb-10 sm:text-[35px] md:text-[60px] lg:text-[83px] text-[#E9E9E9] bricolage text-center">
            Uncover the Design and Development Projects{" "}
            <span className="text-gray-400">That Set Us Apart</span>
          </h1>
          <div className="pb-10 md:pb-20">
            <Button />
          </div>
        </div>
        {/* Bottom content  */}
        <div className=" flex items-center justify-center mt-10 md:mt-20 pt-[40px] md:pt-[63px] pb-[50px] md:pb-[108px]">
            <h1 className="text-[14px] md:text-[18px] cursor-pointer max-w-[360px] px-2 md:px-6 rounded-full bg-gradient-to-r from-[#213734] to-[#386c66] border border-[#28303F] backdrop-blur-3xl h-[49px] font-normal flex items-center justify-center gap-2">
              <IoStar className="text-[#00ffdd] " /> Smarter Idea, Instant
              Solutions
            </h1>
          </div>
        <div className="slider-container  p-2">
          <Slider {...settingsRight}>
            <div className="p-2">
              <button className="lg:flex items-center gap-1 whitespace-nowrap">
                <img src={img_1} alt="image" className=" object-contain" />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Health Care</h3>
              </button>
            </div>
            <div className="p-2">
              <button className="lg:flex items-center gap-1 whitespace-nowrap">
                <img src={img_2} alt="image" className=" object-contain" />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Developers</h3>
              </button>
            </div>
            <div className="p-2">
              <button className="lg:flex items-center gap-1 whitespace-nowrap">
                <img src={img_3} alt="image" className=" object-contain" />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Software</h3>
              </button>
            </div>
            <div className="p-2">
              <button className="lg:flex items-center gap-1 whitespace-nowrap">
                <img src={img_4} alt="image" className=" object-contain" />
                <h3 className="text-white mt-2 text-[18px] md:text-[18px] font-bold md:mt-0">Entertainment</h3>
              </button>
            </div>
            <div className="p-4">
              <button className="lg:flex items-center gap-2 whitespace-nowrap">
                <img src={img_5} alt="image" className=" object-contain" />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Health Care</h3>
              </button>
            </div>
            <div className="p-4">
              <button className="lg:flex items-center gap-2 whitespace-nowrap">
                <img src={img_2} alt="image" className=" object-contain" />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Developers</h3>
              </button>
            </div>
          </Slider>
        </div>

        <div className="slider-container p-4 lg:mt-8">
          <Slider {...settingsLeft}>
            <div className="p-2">
              <button className=" lg:flex items-center gap-1 whitespace-nowrap">
                <img
                  src={img_6}
                  alt="image"
                  className=" object-contain "
                />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Hospitality</h3>
              </button>
            </div>
            <div className="p-2">
              <button className="lg:flex items-center gap-1 whitespace-nowrap">
                <img
                  src={img_7}
                  alt="image"
                  className=" object-contain"
                />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Hospitality</h3>
              </button>
            </div>
            <div className="p-1">
              <button className="lg:flex items-center gap-1 whitespace-nowrap">
                <img
                  src={img_8}
                  alt="image"
                  className=" object-contain"
                />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0 ">Manufacturing</h3>
              </button>
            </div>
            <div className="p-2 lg:ml-2">
              <button className="lg:flex items-center gap-1 whitespace-nowrap">
                <img
                  src={img_9}
                  alt="image"
                  className=" object-contain"
                />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Energy</h3>
              </button>
            </div>
            <div className="p-2">
              <button className="lg:flex items-center gap-1 whitespace-nowrap">
                <img
                  src={img_8}
                  alt="image"
                  className=" object-contain"
                />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Auto Motive</h3>
              </button>
            </div>
            <div className="p-2">
              <button className="lg:flex items-center gap-1 whitespace-nowrap">
                <img
                  src={img_7}
                  alt="image"
                  className=" object-contain"
                />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Hospitality</h3>
              </button>
            </div>
            <div className="p-2">
              <button className="lg:flex  items-center gap-1 whitespace-nowrap">
                <img
                  src={img_6}
                  alt="image"
                  className=" object-contain"
                />
                <h3 className="text-white text-[18px] md:text-[18px] font-bold mt-2 md:mt-0">Auto Motive</h3>
              </button>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default StackPower;
