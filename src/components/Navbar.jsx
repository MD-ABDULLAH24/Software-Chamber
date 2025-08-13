import React from "react";
import logo from "../assets/images/logo/logo.png";
import { IoMdLogOut } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";


const Navbar = () => {
  return (
    <>
      <nav className="pt-[45px] bg-transparent absolute top-0 left-0 w-full z-10 ">
        <div className="container">
          <div className="grid grid-cols-2  items-center px-4 md:px-0">
            {/* Logo */}
            <div >
              <img src={logo} alt="Software Chamber" className="cursor-pointer"/>
            </div>
            {/* Button & Menu Icon */}
            <div className="flex justify-end gap-[26px] items-center">
              <button className="py-5 px-3.5 rounded-full hidden md:flex text-[24px] text-white cursor-pointer  items-center gap-2 bg-gradient-to-r from-[#28303F] to-[#1A1F2C] border border-[#28303F] backdrop-blur-md">
                      Contact Us
                      <span className="p-[6px] bg-white text-black rounded-full">
                        <IoMdLogOut />
                      </span>
                    </button>
              <button className="md:w-[70px] w-[40px] md:h-[60px] cursor-pointer h-[30px] flex items-center justify-center  bg-gradient-to-r from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.1)] rounded-full"><RiMenu4Fill className="w-[30px] text-white h-[30px]"/></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
