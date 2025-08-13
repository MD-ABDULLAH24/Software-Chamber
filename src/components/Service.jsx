import React from "react";
import vector from "../assets/images/intro_stats/Frame_1.png";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Service = () => {
  return (
    <section className="my-[50px] lg:my-[120px]">
      <div className="container">
        <div className="px-2 lg:px-0">
          {/* top side  */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="flex items-center text-[25px] sm:text-[45px] md:text-[76px] lg:text-[110px] font-normal gap-2 lg:gap-6 bricolage">
                Services
                <span>
                  <img src={vector} alt="vector"  className="w-[60%] lg:w-full"/>
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-1 lg:gap-8">
              <h4 className="text-[16px] lg:text-[20px]">All service</h4>
              <span className="bg-[#F3F3F3] h-[40px] w-[40px] flex items-center justify-center rounded-full cursor-pointer">
                <FaArrowRight className="w-[16px] h-[18px]" />
              </span>
            </div>
          </div>
          {/* bottom side  */}
          <div className="pt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:px-[27px] lg:py-[42px] px-[20px] py-[30px] bg-[#F3F3F3] rounded-2xl">
                <div className="pb-[61px]">
                    <h1 className="text-[20px] sm:text-[22px] md:text-[34px] lg:text-[42px] font-semibold leading-[1] pb-[20px] lg:pb-[35px]">Web & Mobile App Devolopment</h1>
                    <p className="lg:pr-27 text-[#808080] text-[18px]">Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                </div>
                <div className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] bg-white shadow-md cursor-pointer  rounded-full flex text-[34px] items-center justify-center">
                    <FiArrowUpRight c/>
                </div>
            
            </div>
            <div className="lg:px-[27px] lg:py-[42px] px-[20px] py-[30px] bg-[#27B4A3] rounded-2xl">
                <div className="pb-[61px]">
                    <h1 className="text-[20px] sm:text-[22px] text-white md:text-[34px] lg:text-[42px] font-semibold leading-[1] pb=[20px] lg:pb-[35px]">Application Software Services</h1>
                    <p className="lg:pr-27  text-white text-[18px]">Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                </div>
                <div className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] bg-white shadow-md cursor-pointer  rounded-full flex text-[34px] items-center justify-center">
                    <FiArrowUpRight c/>
                </div>
            
            </div>
            <div className="lg:px-[27px] lg:py-[42px] px-[20px] py-[30px] bg-[#F3F3F3] rounded-2xl">
                <div className="pb-[61px]">
                    <h1 className="text-[20px] sm:text-[22px] md:text-[34px] lg:text-[42px] lg:pr-30 font-semibold leading-[1] pb-[20px] lg:pb-[35px]">Software Coding & Optimuation</h1>
                    <p className="lg:pr-27 text-[#808080] text-[18px]">Software Chamber specializes in creating powerful, scalable, and secure e-</p>
                </div>
                <div className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] bg-white shadow-md cursor-pointer  rounded-full flex text-[34px] items-center justify-center">
                    <FiArrowUpRight c/>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
