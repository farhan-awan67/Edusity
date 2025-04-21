import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Button = ({
  bgColor,
  textColor,
  padding,
  img,
  text,
  fontSize,
  className,
}) => {
  return (
    <button
      className={clsx(
        "flex justify-center items-center rounded-full shadow-lg cursor-pointer px-4 py-2 gap-2 sm:gap-4",
        className,
        bgColor,
        textColor,
        padding
        // [`sm:${padding}`]
      )}
    >
      <span className={clsx("text-base", fontSize, [`sm:${fontSize}`])}>
        {text}
      </span>
      {img && <Image src={img} alt="image" width={20} height={20} />}
    </button>
  );
};

export default Button;
