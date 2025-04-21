import React from "react";
import Title from "./Title";
import Image from "next/image";
import img1 from "@/assets/gallery-1.png";
import img2 from "@/assets/gallery-2.png";
import img3 from "@/assets/gallery-3.png";
import img4 from "@/assets/gallery-4.png";
import white_arrow from "@/assets/white-arrow.png";
import Button from "./Button";

const Gallery = () => {
  return (
    <section className="mx-auto mt-[90px]">
      <Title subTitle="GALLERY" title="Campus Photos" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 mb-11">
        <div className="basis-[20%] overflow-hidden rounded-md">
          <Image
            src={img1}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="basis-[20%] overflow-hidden rounded-md">
          <Image
            src={img2}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="basis-[20%] overflow-hidden rounded-md">
          <Image
            src={img3}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="basis-[20%] overflow-hidden rounded-md">
          <Image
            src={img4}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Button
        bgColor="bg-[#212EA0]"
        fontSize="text-base"
        text="See more here"
        textColor="text-white"
        img={white_arrow}
        padding="px-[22px] py-[14px]"
        className="mx-auto"
      />
    </section>
  );
};

export default Gallery;
