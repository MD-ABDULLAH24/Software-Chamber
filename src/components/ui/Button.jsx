import React from "react";
import { IoMdLogOut } from "react-icons/io";

const Button = () => {
  
  return (
    <>
      <button className="py-3 px-2 md:pl-6 md:pr-3 rounded-full flex text-[14px] md:text-[24px] text-white cursor-pointer  items-center gap-6 bg-gradient-to-r from-[#28303F] to-[#1A1F2C] border border-[#28303F] backdrop-blur-md">
        Contact Us
        <span className="p-[6px] flex items-end bg-white text-black rounded-full">
          <IoMdLogOut />
        </span>
      </button>
    </>
  );
};

export default Button;
