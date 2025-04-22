import Image from "next/image";
import React from "react";
import uni_img from "@/assets/about.png";

const AboutUni = () => {
  return (
    <section className="mx-auto mt-[90px] flex justify-between flex-col-reverse gap-[50px] md:flex-row p-5">
      <div className="left basis-[40%] rounded-md overflow-hidden">
        <Image
          src={uni_img}
          alt="uniImg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full
           object-cover"
        />
      </div>

      <div className="right flex flex-col gap-3.5 basis-[55%]">
        <h3 className="text-lg text-[#212EA0] font-semibold">
          ABOUT UNIVERSITY
        </h3>
        <h2 className="text-[#000F38] text-3xl sm:text-[45px] font-semibold w-full sm:w-[70%]">
          Nurturing Tomorrow's Leaders Today
        </h2>
        <p className="sm:text-lg text-base text-[#676774]">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className="sm:text-lg text-base text-[#676774]">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className="sm:text-lg text-base text-[#676774]">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </section>
  );
};

export default AboutUni;
