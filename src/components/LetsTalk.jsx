import React from "react";
import client from "../assets/images/letsTalk/clientSay.png";
import { FaArrowRight } from "react-icons/fa";

const LetsTalk = () => {
  return (
    <section className="px-2 md:px-0 py-[60px] lg:py-[150px]">
      <div className="container">
        {/* Top content  */}
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px] font-semibold  text-center max-w-[900px] bricolage">
            Let’s talk about your next project.{" "}
            <span className="text-gray-400">We’re here to help.</span>
          </h1>
          <p className="text-[18px] md:text-[22px] font-medium mt-2 md:mt-8 text-[#494949] max-w-[550px] leading-[1.4] tracking-[0.01em] text-center">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
        </div>
        {/* Bottom content  */}
        <div className="mt-[40px] sm:mt-[60px] md:mt-[80px] lg:mt-[105px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div>
              <img
                src={client}
                alt=""
                className="max-h-[582px] w-full rounded-4xl object-cover"
              />
            </div>

            {/* Form */}
            <div>
              <form action="" className="space-y-3 md:space-y-5 max-h-[582px] mt-2">
                <input
                  type="text"
                  className="bg-[#F3F3F3] rounded-xl w-full py-[18px] pl-6 border-none focus:outline-none"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="bg-[#F3F3F3] rounded-xl w-full py-[18px] pl-6 border-none focus:outline-none"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="bg-[#F3F3F3] rounded-xl w-full py-[18px] pl-6 border-none focus:outline-none"
                  placeholder="Email"
                />

                {/* Number with select */}
                <div className="flex gap-3">
                  <select className="bg-[#F3F3F3] rounded-xl py-[18px] pl-6 border-none w-[80px]">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>0</option>
                  </select>
                  <input
                    type="number"
                    className="bg-[#F3F3F3] rounded-xl flex-1 py-[18px] pl-6 border-none focus:outline-none"
                    placeholder="Phone"
                  />
                </div>

                <input
                  type="text"
                  className="bg-[#F3F3F3] rounded-xl w-full py-[18px] pl-6 border-none focus:outline-none "
                  placeholder="Job Title"
                />
                <input
                  type="text"
                  className="bg-[#F3F3F3] rounded-xl w-full pt-[18px] pb-[76px] pl-6 border-none focus:outline-none"
                  placeholder="Your message"
                />
              </form>
              <button className="py-3 px-9 mt-4 md:pl-6 md:pr-3 rounded-full flex text-[14px] md:text-[22px] text-white cursor-pointer items-center gap-6 bg-[#2CCEBA]">
                Submit
                <span className="p-[6px] flex items-end bg-[#E9E9E9] text-black rounded-full">
                  <FaArrowRight className="w-[12px] h-[14px]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
