import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import footer from "../assets/images/footer/footer.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#012520] to-[#011f19] px-2 lg:px-0 py-[60px] lg:py-[150px]">
      <div className="container">
        <h1 className="font-semibold text-[20px] sm:text-[40px] md:text-[70px] lg:text-[130px] text-[#E9E9E9] bricolage py-10 md:py-15 lg:py-20">
          LET’S TALK
        </h1>
        <div>
          {/* middle content  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[50px] sm:pb-[70px] md:pb-[100px] lg:pb-[156px] ">
            <div>
              <p className="text-[#A6A6A6] text-[20px] lg:text-[29px] pb-[30px] md:pb-[40px] lg:pb-[64px] ">
                A new era of energy, elegance, and elite competition begins
                here. Where passion meets performance on the court like never
                before.
              </p>
              <div>
                <h3 className="text-[#E9E9E9] font-semibold text-[20px] md:text-[26px] lg:text-[32px] pb-[24px] md:pb-[32px]">
                  Social media
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-[53px] ">
                  <div className="flex flex-col items-start ">
                    <button className="pb-[16px] text-[20px] md:text-[26px] text-[#A6A6A6] font-medium flex gap-2 items-center">
                      Instagram
                      <span>
                        <FiArrowUpRight />
                      </span>
                    </button>
                    <button className="pb-[16px] text-[20px] md:text-[26px] text-[#A6A6A6] font-medium flex gap-2 items-center">
                      Twitter
                      <span>
                        <FiArrowUpRight />
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col items-start ">
                    <button className="pb-[16px] text-[20px] md:text-[26px] text-[#A6A6A6] font-medium flex gap-2 items-center">
                      Tiktok
                      <span>
                        <FiArrowUpRight />
                      </span>
                    </button>
                    <button className="pb-[16px] text-[20px] md:text-[26px] text-[#A6A6A6] font-medium flex gap-2 items-center">
                      Facebook
                      <span>
                        <FiArrowUpRight />
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col items-start ">
                    <button className="pb-[16px] text-[20px] md:text-[26px] text-[#A6A6A6] font-medium flex gap-2 items-center">
                      Linkedin
                      <span>
                        <FiArrowUpRight />
                      </span>
                    </button>
                    <button className="pb-[16px] text-[20px] md:text-[26px] text-[#A6A6A6] font-medium flex gap-2 items-center">
                      Youtube
                      <span>
                        <FiArrowUpRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-10 lg:ml-50">
              <div>
                <h1 className="font-semibold text-[20px] md:text-[24px] lg:text-[32px] text-[#E9E9E9] pb-[8px]">
                  ADDRESS
                </h1>
                <p className="text-[18px] md:text-[24px] lg:text-[29px] text-[#A6A6A6]">
                  1901 Thornridge Cir, Shiloh, Hawaii 81063
                </p>
              </div>

              <div>
                <h1 className="font-semibold text-[20px] md:text-[24px] lg:text-[32px] text-[#E9E9E9] pb-[8px]">
                  PHONE
                </h1>
                <p className="text-[18px] md:text-[24px] lg:text-[29px] text-[#A6A6A6]">
                  [+1] 872-298-3989
                </p>
              </div>

              <div>
                <h1 className="font-semibold text-[20px] md:text-[24px] lg:text-[32px] text-[#E9E9E9] pb-[8px]">
                  EMAIL
                </h1>
                <p className="text-[18px] md:text-[24px] lg:text-[29px] text-[#A6A6A6]">
                  hello@tranzit.com
                </p>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <img src={footer} alt="Image" />
            </div>
          </div>
          {/* bottom content  */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-dashed border-[#A6A6A6] pt-6 lg:pt-15 ">
            <div>
              <h4 className="text-[18px] md:text-[24px] text-[#A6A6A6]">2024 Software Chamber All Right Reserved</h4>
            </div>
            <div className="flex  md:justify-end gap-6 mt-4 md:mt-0 sm:gap-[30px] md:gap-[50px] lg:gap-[100px]">
              <p className="text-[18px] md:text-[21px] text-[#A6A6A6]">Privacy Policy</p>
              <p className="text-[18px] md:text-[21px] text-[#A6A6A6]">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
