// src/components/Hero.jsx
import React from "react";
import heroBg from "../assets/images/banner/bannerBg.png";
import { IoStar } from "react-icons/io5";
import content from "../assets/images/banner/content.png";
import { TbUserScan } from "react-icons/tb";
import Button from "./ui/Button";
import { CgDesktop } from "react-icons/cg";
import slide_1 from "../assets/images/banner/slider_1.png";
import slide_2 from "../assets/images/banner/slider_2.png";
import slide_3 from "../assets/images/banner/slider_3.png";
import slide_4 from "../assets/images/banner/slider_4.png";
import slide_5 from "../assets/images/banner/slider_5.png";
import vector_1 from "../assets/images/banner/vector_1.png"
import vector_2 from "../assets/images/banner/vector_2.png"
import vector_3 from "../assets/images/banner/vector_3.png"
import vector_4 from "../assets/images/banner/vector_4.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { BsFileEarmarkCheck } from "react-icons/bs";
const Hero = () => {
  
  return (
    <section className="relative  w-full text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4">
        <div className="pt-[190px] md:pt-[228px] flex flex-col items-center justify-start h-full text-center">
          <h1 className="text-[14px] md:text-[18px] cursor-pointer max-w-[360px] px-2 md:px-6 rounded-full bg-gradient-to-r from-[#213734] to-[#386c66] border border-[#28303F] backdrop-blur-3xl h-[49px] font-normal flex items-center justify-center gap-2">
            <IoStar className="text-[#00ffdd] " /> Smarter Idea, Instant
            Solutions
          </h1>
          <div className="mt-[30px] text-center px-2 md:px-0">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#00ffdd] to-[#ffffff] backdrop-blur-md text-[38px] sm:text-[46px] md:text-[80px] lg:text-[90px]  xl:text-[128px] bricolage w-full max-w-[1713px] leading-[1.2] md:leading-[0.99] tracking-[0.1em] font-bold">
              <span className="block">We are your Software</span>

              <span className="block">
                <span className="inline-flex flex-wrap items-center gap-2 justify-center">
                  <span>Development</span>

                  <span className="rounded-2xl bg-gradient-to-br from-[#213734] to-[#38aea0] w-[30px] h-[30px] md:w-[70px] md:h-[70px] flex items-center justify-center">
                    <TbUserScan className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] text-white" />
                  </span>

                  <span className="rounded-2xl bg-gradient-to-br from-[#213734] to-[#38aea0] w-[30px] h-[30px] md:w-[70px] md:h-[70px] flex items-center justify-center">
                    <CgDesktop className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] text-white" />
                  </span>

                  <span>Team</span>
                </span>
              </span>

              <span className="block">in The Cloud</span>
            </h1>
            <div className="flex items-center justify-center mt-10">
              <Button />
            </div>
          </div>

          {/* Bottom content */}
          <div className="h-[500px] relative max-w-[700px] mx-auto mt-16 cursor-pointer">
            <Swiper
              direction="vertical"
              slidesPerView={1}
              spaceBetween={0}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              style={{ height: "100%" }}
            >
              <SwiperSlide>
                <Slider_1 />
              </SwiperSlide>
              <SwiperSlide>
                <Slider_2 />
              </SwiperSlide>
              <SwiperSlide>
                <Slider_3 />
              </SwiperSlide>
              <SwiperSlide>
                <Slider_4 />
              </SwiperSlide>
              <SwiperSlide>
                <Slider_5 />
              </SwiperSlide>
              <SwiperSlide>
                <Slider_6 />
              </SwiperSlide> 
            </Swiper>
           <div className="hidden md:flex">
             <div className=" ">
              <img src={vector_1} alt="vector" className="absolute  top-5 -right-30" />
              <button className="py-4 flex items-center gap-2 px-6 bg-gradient-to-r from-[rgb(68,64,64)] to-[#646161] text-white rounded-xl absolute -right-75 top-0"><span><BsFileEarmarkCheck className="text-white font-bold text-[20px] "/></span> UI/UX Engineering</button>
            </div>
            <div className=" ">
              <img src={vector_2} alt="vector" className="absolute  bottom-55 -right-30" />
              <button className="py-4 flex items-center gap-2 px-6 bg-gradient-to-r from-[rgb(68,64,64)] to-[#646161] text-white rounded-xl absolute -right-75 bottom-50"><span><BsFileEarmarkCheck className="text-white font-bold text-[20px] "/></span> Software Services</button>
            </div>
            <div className=" ">
              <img src={vector_3} alt="vector" className="absolute  top-10 -left-26" />
              <button className="py-4 flex items-center gap-2 px-6 bg-gradient-to-r from-[rgb(68,64,64)] to-[#646161] text-white rounded-xl absolute -left-79 top-5"><span><BsFileEarmarkCheck className="text-white font-bold text-[20px] "/></span> Website Devolopement</button>
            </div>
            <div className=" ">
              <img src={vector_4} alt="vector" className="absolute  bottom-50 -left-17" />
              <button className="py-4 flex items-center gap-2 px-6 bg-gradient-to-r from-[rgb(68,64,64)] to-[#646161] text-white rounded-xl absolute -left-75 bottom-46"><span><BsFileEarmarkCheck className="text-white font-bold text-[20px] "/></span> Mobile App Devolopment</button>
            </div>
           </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Slider_1 = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white/30 via-white/5 to-white/10 backdrop-blur-[108px] p-6 md:p-8 rounded-2xl shadow-xl">
      {/* Left Side: Timeline Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src={slide_3} alt="Timeline" className="w-full h-auto" />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 md:pl-6 flex flex-col items-start gap-3">
        <h2 className="text-[16px] sm:text-[18px] md:text-[21px] text-left font-bold text-white w-[190px]">
          Software Service Solutions
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-left w-[190px]">
          Plan, track, and manage projects with precision tools.
        </p>
        <button className="px-5 py-2 bg-[#F8F8F80F] hover:bg-white/10 transition cursor-pointer rounded-full text-sm text-white font-medium shadow">
          Discover
        </button>
      </div>
    </div>
  );
};
const Slider_2 = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white/30 via-white/5 to-white/10 backdrop-blur-[108px] p-6 md:p-8 rounded-2xl shadow-xl">
      {/* Left Side: Timeline Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src={slide_2} alt="Timeline" className="w-full h-auto" />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 md:pl-6 flex flex-col items-start gap-3">
        <h2 className="text-[16px] sm:text-[18px] md:text-[21px] text-left font-bold text-white w-[190px]">
          Software Service Solutions
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-left w-[190px]">
          Plan, track, and manage projects with precision tools.
        </p>
        <button className="px-5 py-2 bg-[#F8F8F80F] hover:bg-white/10 transition cursor-pointer rounded-full text-sm text-white font-medium shadow">
          Discover
        </button>
      </div>
    </div>
  );
};
const Slider_3 = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white/30 via-white/5 to-white/10 backdrop-blur-[108px] p-6 md:p-8 rounded-2xl shadow-xl">
      {/* Left Side: Timeline Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src={slide_1} alt="Timeline" className="w-full h-auto" />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 md:pl-6 flex flex-col items-start gap-3">
        <h2 className="text-[16px] sm:text-[18px] md:text-[21px] text-left font-bold text-white w-[190px]">
          Software Service Solutions
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-left w-[190px]">
          Plan, track, and manage projects with precision tools.
        </p>
        <button className="px-5 py-2 bg-[#F8F8F80F] hover:bg-white/10 transition cursor-pointer rounded-full text-sm text-white font-medium shadow">
          Discover
        </button>
      </div>
    </div>
  );
};
const Slider_4 = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white/30 via-white/5 to-white/10 backdrop-blur-[108px] p-6 md:p-8 rounded-2xl shadow-xl">
      {/* Left Side: Timeline Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src={slide_4} alt="Timeline" className="w-full h-auto" />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 md:pl-6 flex flex-col items-start gap-3">
        <h2 className="text-[16px] sm:text-[18px] md:text-[21px] text-left font-bold text-white w-[190px]">
          Software Service Solutions
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-left w-[190px]">
          Plan, track, and manage projects with precision tools.
        </p>
        <button className="px-5 py-2 bg-[#F8F8F80F] hover:bg-white/10 transition cursor-pointer rounded-full text-sm text-white font-medium shadow">
          Discover
        </button>
      </div>
    </div>
  );
};
const Slider_5 = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white/30 via-white/5 to-white/10 backdrop-blur-[108px] p-6 md:p-8 rounded-2xl shadow-xl">
      {/* Left Side: Timeline Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src={slide_5} alt="Timeline" className="w-full h-auto" />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 md:pl-6 flex flex-col items-start gap-3">
       <h2 className="text-[16px] sm:text-[18px] md:text-[21px] text-left font-bold text-white w-[190px]">
          Software Service Solutions
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-left w-[190px]">
          Plan, track, and manage projects with precision tools.
        </p>
        <button className="px-5 py-2 bg-[#F8F8F80F] hover:bg-white/10 transition cursor-pointer rounded-full text-sm text-white font-medium shadow">
          Discover
        </button>
      </div>
    </div>
  );
};
const Slider_6 = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white/30 via-white/5 to-white/10 backdrop-blur-[108px] p-6 md:p-8 rounded-2xl shadow-xl">
      {/* Left Side: Timeline Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src={slide_5} alt="Timeline" className="w-full h-auto" />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 md:pl-6 flex flex-col items-start gap-3">
       <h2 className="text-[16px] sm:text-[18px] md:text-[21px] text-left font-bold text-white w-[190px]">
          Software Service Solutions
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-left w-[190px]">
          Plan, track, and manage projects with precision tools.
        </p>
        <button className="px-5 py-2 bg-[#F8F8F80F] hover:bg-white/10 transition cursor-pointer rounded-full text-sm text-white font-medium shadow">
          Discover
        </button>
      </div>
    </div>
  );
};
