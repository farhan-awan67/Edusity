import React from "react";
import Title from "./Title";
import Image from "next/image";
import program1 from "@/assets/program-1.png";
import program2 from "@/assets/program-2.png";
import program3 from "@/assets/program-3.png";
import programIcon1 from "@/assets/program-icon-1.png";
import programIcon2 from "@/assets/program-icon-2.png";
import programIcon3 from "@/assets/program-icon-3.png";

const Program = () => {
  return (
    <section className="mx-auto mt-[60px]">
      <Title subTitle="OUR PROGRAM" title="What We Offer" />

      {/* images */}
      <div className="flex flex-col gap-[25px] p-5 my-5 sm:flex-row">
        <div className="img-wrapper basis-[33%] cursor-pointer relative overflow-hidden">
          <div className="caption mt-[100%] bg-[#735af349]    w-full h-full absolute flex flex-col justify-center items-center">
            <Image src={programIcon1} width={50} height={50} alt="icon" />
            <p className="text-lg text-white">Graduation Degree</p>
          </div>
          <Image
            src={program1}
            alt="program1"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-md"
          />
        </div>

        <div className="img-wrapper basis-[33%] cursor-pointer relative overflow-hidden">
          <div className="caption mt-[100%] bg-[#735af349]  w-full h-full absolute flex flex-col justify-center items-center">
            <Image src={programIcon2} width={50} height={50} alt="icon" />
            <p className="text-lg text-white">Masters Degree</p>
          </div>
          <Image
            src={program2}
            alt="program1"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-md"
          />
        </div>

        <div className="img-wrapper basis-[33%] cursor-pointer relative overflow-hidden">
          <div className="caption mt-[100%] bg-[#735af349]  w-full h-full absolute flex flex-col justify-center items-center">
            <Image src={programIcon3} width={50} height={50} alt="icon" />
            <p className="text-lg text-white">Post Graduation</p>
          </div>
          <Image
            src={program3}
            alt="program1"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Program;
