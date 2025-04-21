"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Title from "./Title";
import Image from "next/image";
import img1 from "@/assets/user-1.png";
import img2 from "@/assets/user-2.png";
import img3 from "@/assets/user-3.png";
import img4 from "@/assets/user-4.png";

// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute right-4 top-1/2 z-50 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-700 transition custom-arrow next-arrow`}
//       style={{ ...style }}
//       onClick={onClick}
//     >
//       ❯
//     </div>
//   );
// };

// // Custom Previous Arrow Component
// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute left-4 top-1/2 z-50 transform -translate-y-1/2 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-700 transition custom-arrow prev-arrow`}
//       style={{ ...style }}
//       onClick={onClick}
//     >
//       ❮
//     </div>
//   );
// };

const Testimonial = () => {
  let settings = {
    dots: false, //removed dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mx-auto mt-[90px]">
      <Title subTitle="TESTIMONIALS" title="What Student Says" />

      {/* slider div */}
      <Slider
        {...settings}
        className="mt-[60px] flex items-center justify-center gap-4"
      >
        {/* card 1 */}
        <div className="bg-white shadow-xl p-7 rounded-sm w-full h-auto sm:p-3 md:p-3">
          {/* header */}
          <div className="flex justify-start items-center gap-2.5">
            <div className="w-13 rounded-full border-4 border-blue-950 overflow-hidden">
              <Image
                src={img1}
                alt="profile image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover"
              />
            </div>

            <div>
              <h3 className="sm:text-[18px] font-semibold text-[#212EA0] tracking-tighter">
                Emily Williams
              </h3>
              <p className="text-[#906767] text-sm md:text-base">
                Edusity, USA
              </p>
            </div>
          </div>

          <p className="text-[#906767] text-[15px] md:text-base mt-5">
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>

        {/* card 2 */}
        <div className="bg-white shadow-xl p-7 rounded-sm w-full h-auto sm:p-3 md:p-3">
          {/* header */}
          <div className="flex justify-start items-center gap-2.5">
            <div className="w-13 rounded-full border-4 border-blue-950 overflow-hidden">
              <Image
                src={img2}
                alt="profile image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover"
              />
            </div>

            <div>
              <h3 className="sm:text-[18px] font-semibold text-[#212EA0] tracking-tighter">
                William Jackson
              </h3>
              <p className="text-[#906767] text-sm md:text-base">
                Edusity, USA
              </p>
            </div>
          </div>

          <p className="text-[#906767] text-[15px] md:text-base mt-5">
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>

        {/* card 3 */}
        <div className="bg-white shadow-xl p-7 rounded-sm w-full h-auto sm:p-3 md:p-3">
          {/* header */}
          <div className="flex justify-start items-center gap-2.5">
            <div className="w-13 rounded-full border-4 border-blue-950 overflow-hidden">
              <Image
                src={img3}
                alt="profile image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover"
              />
            </div>

            <div>
              <h3 className="sm:text-[18px] font-semibold text-[#212EA0] tracking-tighter">
                Emily Williams
              </h3>
              <p className="text-[#906767] text-sm md:text-base">
                Edusity, USA
              </p>
            </div>
          </div>

          <p className="text-[#906767] text-[15px] md:text-base mt-5">
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>

        {/* card 4 */}
        <div className="bg-white shadow-xl p-7 rounded-sm w-full h-auto sm:p-3 md:p-3">
          {/* header */}
          <div className="flex justify-start items-center gap-2.5">
            <div className="w-13 rounded-full border-4 border-blue-950 overflow-hidden">
              <Image
                src={img4}
                alt="profile image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover"
              />
            </div>

            <div>
              <h3 className="sm:text-[18px] font-semibold text-[#212EA0] tracking-tighter">
                William Jackson
              </h3>
              <p className="text-[#906767] text-sm md:text-base">
                Edusity, USA
              </p>
            </div>
          </div>
          <p className="text-[#906767] text-[15px] md:text-base mt-5">
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
      </Slider>
    </section>
  );
};

export default Testimonial;
