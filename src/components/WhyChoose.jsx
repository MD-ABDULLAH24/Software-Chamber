import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CiSettings } from "react-icons/ci";
import { TbRosette } from "react-icons/tb";

const WhyChoose = () => {
  return (
    <section className="mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px] mb-[50px] sm:mb-[70px] md:mb-[130px] lg:mb-[200px]">
      <div className="container">
        {/* Top content */}
        <div className="flex flex-col items-center justify-center max-w-[900px] mx-auto text-center bricolage">
          <h1 className="text-[20px] sm:text-[30px] md:text-[60px] lg:text-[93px] leading-[0.95] pb-[32px]">
            Why Choose Software Chamber
          </h1>
          <p className="text-[#808080] max-w-[620px] pb-[30px] md:pb-[45px] lg:pb-[53px]">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
          <button className="py-3 px-2 md:pl-6 md:pr-3 rounded-full flex text-[14px] md:text-[18px] text-white cursor-pointer items-center gap-6 bg-[#2CCEBA]">
            Let’s Discuss
            <span className="p-[6px] flex items-end bg-[#E9E9E9] text-black rounded-full">
              <FaArrowRight className="w-[12px] h-[14px]" />
            </span>
          </button>
        </div>

        {/* Swiper Slider */}
        <div className="relative mt-[20px] px-2 md:px-0 lg:mt-[53px]">
          <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
               1280: { slidesPerView: 4 },
            }}
            className="mySwiper "
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="px-[20px] md:px-[28px] pt-[36px] pb-[70px] bg-[#F3F3F3] rounded-[26px]">
                <div className="flex justify-between items-center border-b border-[#A5A5A5] pb-[32px]">
                  <h2 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-semibold">
                    Efficiency
                  </h2>
                  <p className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-teal-300">
                    <PiDiamondsFourDuotone className="text-[#ffffff] font-black text-[28px]"/>
                  </p>
                </div>
                <div className="pt-[30px] lg:pt-[50px]">
                  <h2 className="text-[18px] lg:text-[22px] text-[#494949]">
                    Software Chamber specializes in creating powerful, scalable,
                    and secure e-commerce solutions tailored to business needs.
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="px-[20px] md:px-[28px] pt-[36px] pb-[70px] bg-[#F3F3F3] rounded-[26px] lg:mt-[50px]">
                <div className="flex justify-between items-center border-b border-[#A5A5A5] pb-[32px]">
                  <h2 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-semibold">
                    Adaptability
                  </h2>
                  <p className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-teal-300">
                   <CiSettings className="text-[#ffffff] font-black text-[28px]" />
                  </p>
                </div>
                <div className="pt-[30px] lg:pt-[50px]">
                  <h2 className="text-[18px] lg:text-[22px] text-[#494949]">
                    Software Chamber specializes in creating powerful, scalable,
                    and secure e-commerce solutions tailored to business needs.
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="px-[20px] md:px-[28px] pt-[36px] pb-[70px] bg-[#F3F3F3] rounded-[26px]">
                <div className="flex justify-between items-center border-b border-[#A5A5A5] pb-[32px]">
                  <h2 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-semibold">
                    Scalability
                  </h2>
                  <p className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-teal-300">
                   <TbRosette className="text-[#ffffff] font-black text-[28px]" />
                  </p>
                </div>
                <div className="pt-[30px] lg:pt-[50px]">
                  <h2 className="text-[18px] lg:text-[22px] text-[#494949]">
                    Software Chamber specializes in creating powerful, scalable,
                    and secure e-commerce solutions tailored to business needs.
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="px-[20px] md:px-[28px] pt-[36px] pb-[70px] bg-[#F3F3F3] rounded-[26px] lg:mt-[50px]">
                <div className="flex justify-between items-center border-b border-[#A5A5A5] pb-[32px]">
                  <h2 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-semibold">
                    Precision
                  </h2>
                  <p className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-teal-300">
                    <PiDiamondsFourDuotone className="text-[#ffffff] font-black text-[28px]"/>
                  </p>
                </div>
                <div className="pt-[30px] lg:pt-[50px]">
                  <h2 className="text-[18px] lg:text-[22px] text-[#494949]">
                    Software Chamber specializes in creating powerful, scalable,
                    and secure e-commerce solutions tailored to business needs.
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            {/* Slider 5  */}
            <SwiperSlide>
              <div className="px-[20px] md:px-[28px] pt-[36px] pb-[70px] bg-[#F3F3F3] rounded-[26px]">
                <div className="flex justify-between items-center border-b border-[#A5A5A5] pb-[32px]">
                  <h2 className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-semibold">
                    Efficiency
                  </h2>
                  <p className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-teal-300">
                    <PiDiamondsFourDuotone className="text-[#ffffff] font-black text-[28px]"/>
                  </p>
                </div>
                <div className="pt-[30px] lg:pt-[50px]">
                  <h2 className="text-[18px] lg:text-[22px] text-[#494949]">
                    Software Chamber specializes in creating powerful, scalable,
                    and secure e-commerce solutions tailored to business needs.
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="custom-prev hidden xl:flex  absolute top-1/2 -left-10 transform -translate-y-1/2 bg-black text-white rounded-full w-[40px] h-[40px] md:w-[70px] md:h-[70px] items-center justify-center cursor-pointer z-10">
            <IoIosArrowBack />
          </div>
          <div className="custom-next hidden xl:flex  absolute top-1/2 -right-10 transform -translate-y-1/2 bg-black text-white rounded-full w-[40px] h-[40px] md:w-[70px] md:h-[70px]  items-center justify-center cursor-pointer z-10">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
