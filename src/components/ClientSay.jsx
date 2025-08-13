import React from "react";
import { IoStar } from "react-icons/io5";
import logo from "../assets/images/clientSay/logo_3.png"
import client from "../assets/images/clientSay/client.png"

const ClientSay = () => {
  return (
    <section className="bg-[#090B0F] px-2 md:px-0 py-[60px] lg:py-[150px]">
      <div className="container">
        {/* Top content  */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-[14px] md:text-[18px] cursor-pointer max-w-[360px] px-2 md:px-6 rounded-full bg-gradient-to-r from-[#213734] to-[#386c66] border border-[#28303F] backdrop-blur-3xl h-[49px] font-normal flex items-center justify-center gap-2">
            <IoStar className="text-[#00ffdd] " /> Smarter Idea, Instant
            Solutions
          </h2>
          <h1 className="text-white text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px] max-w-[1000px] pt-10 bricolage ">Don’t just take our word for it. Hear what <span className="text-gray-400"> our clients say </span></h1>

        </div>
        {/* Bottom content  */}
        <div className="bg-gradient-to-r from-[#051a17] to-[#000000] py-[30px] md:py-[40px] lg:py-[54px] px-[15px] sm:px-[50px] md:px-[90px] lg:px-[100px] rounded-2xl text-white mt-20 border-t-1 border-t-[#2CCEBA] shadow-2xl shadow-[#023c35]">
          <h2 className="text-[20px] md:text-[24px] lg:text-[30px] md:pr-50">"Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo."</h2>
          <div className="flex justify-between items-center pt-[30px] lg:pt-[50px]">
            <div className="flex gap-4 items-center">
              <img src={client} alt="" className="w-15 md:w-full"/>
              <div>
                <h2 className="text-white md:text-[21px] ">Alex Larkins</h2>
                <p className="text-gray-400 md:text-[18px] pt-1 md:pt-3">Art director at Airbnb</p>
              </div>
            </div>
            <div>
              <img src={logo} alt="" className="w-20 md:w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
