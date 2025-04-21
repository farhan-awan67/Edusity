import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <>
      <h2 className="text-center text-lg text-[#212EA0] font-[600]">
        {subTitle}
      </h2>
      <h5 className="text-center text-[32px] text-[#000F38] font-[700]">
        {title}
      </h5>
    </>
  );
};

export default Title;
