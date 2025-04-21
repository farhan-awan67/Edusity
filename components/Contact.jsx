import React from "react";
import Title from "./Title";
import Image from "next/image";
import msg from "@/assets/msg-icon.png";
import mail from "@/assets/mail-icon.png";
import phone from "@/assets/phone-icon.png";
import location from "@/assets/location-icon.png";
import Button from "./Button";
import white_arrow from "@/assets/white-arrow.png";

const Contact = () => {
  return (
    <section className="mx-auto mt-[130px]">
      <Title subTitle="CONTACT US" title="Get in Touch" />

      <div className="flex justify-between flex-col mt-[70px] gap-[10%] md:flex-row">
        <div className="left basis-[40%]">
          <div className="flex gap-4 justify-start items-center">
            <h2 className="text-[25px] font-semibold">Send us a message</h2>
            <Image src={msg} alt="image" width={30} height={30} />
          </div>

          <p className="text-[#959082] text-base sm:text-lg mt-5 font-medium">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>

          <div className="flex gap-4 justify-start items-center mt-6 font-medium">
            <Image src={mail} alt="image" width={25} height={25} />
            <p className="text-[#959082] text-base">Contact@Edusity.dev</p>
          </div>
          <div className="flex gap-4 justify-start items-center mt-4 font-medium">
            <Image src={phone} alt="image" width={25} height={25} />
            <p className="text-[#959082] text-base">+1 123-456-7890</p>
          </div>
          <div className="flex gap-4 justify-start items-center mt-4 font-medium">
            <Image src={location} alt="image" width={25} height={25} />
            <p className="text-[#959082] text-base w-full md:w-[55%]">
              77 Massachusetts Ave, Cambridge MA 02139, United States
            </p>
          </div>
        </div>

        <form className="right basis-[50%] mt-14 md:mt-0">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg text-[#959082] mb-1">
              Your name
            </label>
            <input
              id="name"
              className="px-3 py-3 outline-none border-none bg-[#EBECFE]"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="number" className="text-lg text-[#959082] mb-1">
              Phone Number
            </label>
            <input
              id="number"
              className="px-3 py-3 outline-none border-none bg-[#EBECFE]"
              type="text"
              placeholder="Enter your number"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="email" className="text-lg text-[#959082] mb-1">
              Your Email
            </label>
            <input
              id="email"
              className="px-3 py-3 outline-none border-none bg-[#EBECFE]"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col mt-5 mb-9">
            <label htmlFor="message" className="text-lg text-[#959082] mb-1">
              Write your messages here
            </label>
            <textarea
              id="message"
              className="px-3 py-3 outline-none border-none bg-[#EBECFE] resize-none"
              placeholder="Enter your email"
              spellCheck={true}
              rows={5}
            />
          </div>

          <div className="flex justify-start items-start">
            <Button
              text="Submit now"
              img={white_arrow}
              bgColor="bg-[#212EA0]"
              fontSize="text-base"
              textColor="text-white"
              padding="px-[22px] py-[14px]"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
