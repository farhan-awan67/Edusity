"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`z-[100] px-[3%] py-2 sm:py-2.5 sm:px-[10%] w-full flex justify-between items-center top-0 fixed ${
        sticky ? "bg-[#212EA0]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-center items-center w-[150px] sm:w-[200px]">
        <Image
          className="object-cover"
          src={logo}
          width={0}
          height={0}
          sizes="100vw"
          alt="image"
        />
      </div>

      <div className="flex justify-center items-center">
        <Button
          textColor="text-black"
          text="Contact us"
          bgColor="bg-white"
          padding="px-3 py-2 sm:px-[22px] sm:py-[14px]"
          fontSize="text-lg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
