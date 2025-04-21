import React from "react";
import Button from "./Button";
import btn_img from "@/assets/dark-arrow.png";

const Hero = () => {
  return (
    <section className="hero w-full min-h-screen flex justify-center items-center">
      <div className="max-w-[800px] p-2.5 sm:p-0">
        <h1 className="text-[35px] tracking-tight leading-[35px] sm:leading-normal sm:text-[60px] text-white font-bold text-center sm:tracking-normal">
          We Ensure better education for a better world
        </h1>
        <p className="mx-auto text-sm mt-2 sm:mt-0 sm:text-base text-white text-center max-w-[700px] mb-5 sm:mb-6">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>

        <Button
          text="Explore more"
          bgColor="bg-white"
          textColor="#B8B5B8"
          padding="px-[22px] py-[14px]"
          img={btn_img}
          fontSize="text-lg"
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
