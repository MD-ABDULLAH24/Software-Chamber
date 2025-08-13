import React from "react";
import frame_1 from "../assets/images/intro_stats/Frame_1.png";
import frame_2 from "../assets/images/intro_stats/Frame_2.png";
import introImg from "../assets/images/intro_stats/introImg.png";

const IntroStats = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="px-2 md:px-0">
          {/* top content */}
          <div className="relative mb-[76px]">
            <span className="absolute hidden lg:flex  lg:top-6 lg:left-5">
              <img src={frame_1} alt="" />
            </span>
            <h1 className="font-semibold text-[20px]  sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[80px] bricolage  text-center w-full max-w-screen-2xl ">
              At Software Chamber,
              <span className="text-[#A5A5A5]">we specialize</span> in turning
              complex challenges into elegant{" "}
              <span className="text-[#A5A5A5]"> digital solutions</span>{" "}
            </h1>
            <span className="absolute hidden lg:flex right-98 bottom-3">
              <img src={frame_2} alt="" />
            </span>
          </div>
          {/* bottom content */}
          <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 items-center gap-3">
            {/* left side content */}
            <div className="flex flex-col text-center lg:text-left XL:ml-40  justify-center">
              <div>
                <h3 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-medium bricolage">
                  20+
                </h3>
                <p className="font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] leading-[1.4] text-gray-400">
                  Tech Partners
                </p>
              </div>
              <div className="my-5">
                <h3 className="text-[24px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-medium bricolage">
                  150+
                </h3>
                <p className="font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] leading-[1.4] text-gray-400">
                  Project Completed
                </p>
              </div>
              <div>
                <h3 className="text-[24px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-medium bricolage">
                  1K+
                </h3>
                <p className="font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] leading-[1.4] text-gray-400">
                  Satisfied Customers
                </p>
              </div>
            </div>
            {/* middle side content */}
            <div className="flex items-center justify-center">
              <img className="max-w-full h-auto lg:mr-18" src={introImg} alt="introImg" />

            </div>
            {/* right side content */}
            <div className="xl:px-4 py-8 bg-white space-y-6 mt-4">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-[48px] mt-2 h-[48px] shrink-0 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold text-[16px] leading-none">
                  <h1 className="bg-white w-[30px] h-[30px] rounded-full text-black flex items-center justify-center">
                    1
                  </h1>
                </div>
                <div>
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] font-semibold bricolage text-gray-900">
                    Your Team in the cloud
                  </h3>
                  <p className="text-gray-600 text-[17px] max-w-[330px]">
                    We Hire Best and brightest Talents to build world class
                    technology
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-[48px] mt-2 h-[48px] shrink-0 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold text-[16px] leading-none">
                  <h1 className="bg-white w-[30px] h-[30px] rounded-full text-black flex items-center justify-center">
                    2
                  </h1>
                </div>
                <div>
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] font-semibold bricolage text-gray-900">
                    Grow more with less
                  </h3>
                  <p className="text-gray-600 text-[17px] max-w-[270px]">
                    We have a competitive pricing structure
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="w-[48px] mt-2 h-[48px] shrink-0 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold text-[16px] leading-none">
                  <h1 className="bg-white w-[30px] h-[30px] rounded-full text-black flex items-center justify-center">
                    3
                  </h1>
                </div>
                <div className="">
                  <h3 className="whitespace-nowrap text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] font-semibold bricolage text-gray-900">
                    Weekly sprint and reviews
                  </h3>
                  <p className="text-gray-600 text-[17px] max-w-[340px]">
                    Our fast review and feedback loop is designed to keep you in
                    the driver's seat
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex  gap-4">
                <div className="w-[48px] mt-2 h-[48px] shrink-0 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold text-[16px] leading-none">
                  <h1 className="bg-white w-[30px] h-[30px] rounded-full text-black flex items-center justify-center">
                    4
                  </h1>
                </div>
                <div>
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] font-semibold bricolage text-gray-900">
                    Communication First
                  </h3>
                  <p className="text-gray-600 text-[17px] max-w-[330px]">
                    We use modern tools and services to collaborate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroStats;
