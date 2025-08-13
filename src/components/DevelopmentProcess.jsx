import React from "react";
import devBg from "../assets/images/development/devBg.png";
import bottomBg from "../assets/images/development/bottomBg.png";
import { IoStar } from "react-icons/io5";
import Button from "./ui/Button";

const DevelopmentProcess = () => {
  return (
    <section className="relative w-full max-h-[540px] sm:max-h-[690px] md:max-h-[680px] lg:max-h-[770px] xl:max-h-[870px] overflow-hidden mb-[40px] sm:mb-[70px] md:mb:[100px] lg:mb-[142px] bg-[#162929]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={devBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-[100px] pb-[40px]">
        <h1 className="text-[14px] md:text-[18px] cursor-pointer max-w-[360px] px-2 md:px-6 rounded-full bg-gradient-to-r from-[#213734] to-[#386c66] border border-[#28303F] backdrop-blur-3xl h-[49px] font-normal flex items-center justify-center gap-2">
          <IoStar className="text-[#00ffdd]" /> Smarter Idea, Instant Solutions
        </h1>

        <h1 className="mt-4 text-[20px] sm:text-[34px] md:text-[50px] lg:text-[70px] leading-[1] pb-4 md:pb-10 font-bold bricolage text-white">
          Our Software
          <span className="block text-[#A5A5A5]">Development Process</span>
        </h1>

        <p className="text-[#808080] max-w-[620px] pb-[30px] md:pb-[45px] lg:pb-[53px]">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>

        <Button />

        {/* Bottom Image (Now in flow, after content) */}
        <div className="mt-10">
          <img src={bottomBg} alt="Bottom Decoration" className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
